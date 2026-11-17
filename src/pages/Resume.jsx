import ResumePDF from '../assets/ResumeMessinaJAlexander.pdf'
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function Resume() {
  const pageWidth = Math.min(window.innerWidth - 32, 700)

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-semibold text-navy-900">Resume</h1>
        <a
          href={ResumePDF}
          download="Resume- J Alexander Messina"
          className="rounded-md bg-accent-500 px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-accent-400"
        >
          Download PDF
        </a>
      </div>
      <div className="flex flex-col items-center gap-6">
        {[1, 2].map((pageNumber) => (
          <Document key={pageNumber} file={ResumePDF}>
            <Page
              pageNumber={pageNumber}
              width={pageWidth}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className="shadow-md"
            />
          </Document>
        ))}
      </div>
    </section>
  )
}