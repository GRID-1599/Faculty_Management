import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  Image,
  pdfjs,
} from "react-pdf/dist/esm/entry.webpack5";

import pdfSrc from "./sample.pdf";

const PDFViewer = (props) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const fileUrl = {
    url: "./sample1.pdf",
  };

  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={pdfSrc} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      {/* <Document
        file={pdf}
        // ...
        // ...
      >

      </Document> */}
    </div>
  );
};

export default PDFViewer;
