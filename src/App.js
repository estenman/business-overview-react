import React from 'react';
import './App.css';
import './Normalize.css'
import './components/Header/Header-FullNavigation.css';
import './components/Program-Button/ProgramButton.css';
import './components/program-detailed/ProgramDetail.css';
import './components/program-detail-short/ProgramShort.css'
import Header from './components/Header/Header.js';
import ProgramButton from './components/Program-Button/ProgramButton.js';
import ProgramDetailContainer from './components/program-detailed/ProgramDetailContainer.js';
import ProgramShortContainer from './components/program-detail-short/ProgramShortContainer.js';

function App() {
  return (
    <div className="page-wrapper">
    	<Header />
    	<div className="tan-wrapper">
    		<ProgramButton />
            <div>
                <div className="three-part-program">
                    <ProgramDetailContainer prgid={100}/>
                    <ProgramDetailContainer prgid={101}/>
                    <ProgramDetailContainer prgid={102}/>
                </div>
                <ProgramShortContainer /> 
            </div>   
 
    	</div>       
    </div>
  );
}

export default App;
