import { useState } from 'react';
import { validateEmail } from '../utils/validators';

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const emptyForm = { name: '', email: '', message: '' };
const noneTouched = { name: false, email: false, message: false };

const errorText = {
  name: 'You need to provide a name to contact Alex.',
  email: 'You need to provide a valid email to contact Alex.',
  message: 'You need to provide a message to contact Alex.',
};

const validate = (values) => ({
  name: values.name.trim() === '' ? errorText.name : '',
  email: validateEmail(values.email) ? '' : errorText.email,
  message: values.message.trim() === '' ? errorText.message : '',
});

const fieldClass =
  'mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600';

export default function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [touched, setTouched] = useState(noneTouched);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const errors = validate(values);
  const isValid = Object.values(errors).every((message) => message === '');

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      setValues(emptyForm);
      setTouched(noneTouched);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="mx-auto max-w-xl">
      <h1 className="mb-6 text-3xl font-semibold text-slate-900">Contact Me</h1>
      <form
        name="contact"
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
          <input
            id="name" name="name" type="text" className={fieldClass}
            value={values.name} onChange={handleChange} onBlur={handleBlur}
            placeholder="Your name"
          />
          {touched.name && errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email address</label>
          <input
            id="email" name="email" type="email" className={fieldClass}
            value={values.email} onChange={handleChange} onBlur={handleBlur}
            placeholder="you@example.com"
          />
          {touched.email && errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
          <textarea
            id="message" name="message" rows={5} className={fieldClass}
            value={values.message} onChange={handleChange} onBlur={handleBlur}
            placeholder="What would you like to say?"
          />
          {touched.message && errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={!isValid || status === 'sending'}
          className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>
        {status === 'sent' && <p className="text-sm text-green-700">Thanks, your message was sent.</p>}
        {status === 'error' && (
          <p className="text-sm text-red-600">
            Something went wrong. You can email me directly at me@alexmessina.dev.
          </p>
        )}
      </form>
    </section>
  );
}