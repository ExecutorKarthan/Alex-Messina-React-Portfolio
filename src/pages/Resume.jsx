import ResumePDF from '../assets/ResumeMessinaJAlexander.pdf'
import { Document, Page} from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const resumeDivStyle = {
  display: 'flex',
  justifyContent: 'center',
}

function viewPDF() {
  return (
    <div>
      <div className='text-center'>
        <a href= {ResumePDF} download="Resume- J Alexander Messina"> <button className="btn btn-dark enabled mt-2 mb-2 btn-sm">Download .pdf file</button></a>
      </div>
      <div style={resumeDivStyle}>
        <Document file={ResumePDF} >
          <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} wrap={true}/>
          <Page pageNumber={2} renderAnnotationLayer={false} renderTextLayer={false} wrap={true}/>
        </Document>
      </div>
    </div>
  );
}

export default viewPDF;