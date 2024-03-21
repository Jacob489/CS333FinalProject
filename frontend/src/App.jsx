import Todos from './components/Todos/Todos'
import { useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

/**
 * The main component of the application.
 * Renders the Todos component inside a div with the class name 'app'.
 *
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  const [loader, setLoader] = useState(false);
  //uses useState to initialize a variable called loader that detects if the PDF is being generated or not, initially set to false by default
 
  //function to handle PDF download
  const downloadPDF = () => {
    const capture = document.querySelector('.todos'); //selects the element that has the to-do list
    setLoader(true); //set the loader to true which indicates the PDF has started generating

    // Hide the PDF button during PDF generation by setting the visibility to hidden once it starts generating
    const PDFbutton = document.querySelector('.PDFbutton');
    PDFbutton.style.visibility = 'hidden';

    //uses the html2canvas library to convert the to-do list html element into a canvas/image
    html2canvas(capture).then((canvas) => {
      const img= canvas.toDataURL('img/png'); //creates url for the image generated by the html2canvas library
      const doc = new jsPDF('p', 'mm', 'a5'); //using the jspdf library generate a new jspdf instance with preferred pdf size/dimensions
      //get the width and height of the PDF document so it can appropriately scale the image
      const Width = doc.internal.pageSize.getWidth();
      const Height = doc.internal.pageSize.getHeight();
      //add the image to the PDF
      doc.addImage(img, 'PNG', 0, 0, Width, Height);
      setLoader(false); //set loader to false indicating the generating has stopped
      doc.save('todos.pdf'); //save the PDF as todos.pdf

      // Show the PDF button again after PDF generation is complete
      PDFbutton.style.visibility = 'visible';
    });
  };
  //Download button below:
  return (
    <div className='app'> 
      <section className='todos'> 
        <header>
          <h1>To-Do List</h1>
        </header>
        <Todos /> 
        <button onClick={downloadPDF} className="PDFbutton"> 
          Download PDF
        </button>
      </section>
    </div>
  )
}

export default App