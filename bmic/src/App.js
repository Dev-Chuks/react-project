//  THE APP.js IS WHERE ALL THE APP RUNS . ALL TEH COMPONENTS CREATED ARE CALLED INTO THE APP.js FROM WHERE WE CAN RUN  
// ALL THE COMPONENTS SUCCESSFULLY. THE APP.js IS A CONTAINER FOR OUR APP THAT WE ARE DESIGNING WHILE OTHERS FORMS THE 
// COMPONENTS DESIGNED IN OTHER PLACES AND CALLED INTO THE MAIN APP

import react from 'react';
import HEADER from './Components/header'; // THE ./components describes the folder arrangement to allow ease in processing 
import SECTION from './Components/section';
import FOOTER from './Components/footer';
import './App.css';
import BMS from './Components/bmsdetails';

 

function App() {
  return (
    <div >
     <div className='hb-div'>
        <HEADER/>
        <div className='bms-div'><BMS/></div>
     
     </div> 
      
      <SECTION/>
      {/* without callng thRs here, the program will contained in the footer components will not run */}
      <FOOTER/> 
    </div>
  );
};

export default App


// cntr p: to search through files quickly
// cntrl backslash: opens two windows and cntrl w to close 
// cntrl shift L: this selects the same words in a file 
// cntrl B to toggle the side bar
// cntrl D to select multiple same text 
// alt up or down arrow to move text up or down a line 
// shift alt down arrow to duplicate teh text beneath a line 
// f2 to rename all occurences of a text