//Import the needed modules
import ResumePDF from '../assets/ResumeMessinaJAlexander.pdf'
import { Document, Page} from 'react-pdf';
import { pdfjs } from 'react-pdf';


//Create a worker to process the PDF resume. Note - this code was take directly from the react-pdf site which can be found here: 
//https://github.com/wojtekmaj/react-pdf#import-worker-recommended
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

//Stylize the resume to be more appealing
const resumeDivStyle = {
  display: 'flex',
  justifyContent: 'center',
}

//Display the resume page
export default function viewPDF() {
  return (
    <div>
      {/* Create a link to download my resume */}
      <div className='text-center'>
        <a href= {ResumePDF} download="Resume- J Alexander Messina"> <button className="btn btn-dark enabled mt-2 mb-2 btn-sm">Download .pdf file</button></a>
      </div>
      {/* Display the resume in an easily readable way */}
      <div style={resumeDivStyle}>
        <Document file={ResumePDF} >
          <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} wrap={true}/>
        </Document>
        <Document file={ResumePDF} >
          <Page pageNumber={2} renderAnnotationLayer={false} renderTextLayer={false} wrap={true}/>
        </Document>
      </div>
    </div>
  );
}