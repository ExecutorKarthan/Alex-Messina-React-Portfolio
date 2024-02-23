import ResumePDF from '../assets/ResumeMessinaJAlexander.pdf'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

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
    <div style={resumeDivStyle}>
      <Document file={ResumePDF} >
        <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
        <Page pageNumber={2} renderAnnotationLayer={false} renderTextLayer={false}/>
      </Document>
    </div>
  );
}

export default viewPDF;