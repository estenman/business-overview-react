import React from 'react';
import './App.css';
import './Normalize.css'
import './components/Header/Header-FullNavigation.css';
import './components/Program-Button/ProgramButton.css';
import './components/program-detailed/ProgramDetail.css';
import Header from './components/Header/Header.js';
import ProgramButton from './components/Program-Button/ProgramButton.js';
import ProgramDetailContainer from './components/program-detailed/ProgramDetailContainer.js';

function App() {
  return (
    <div className="page-wrapper">
    	<Header />
    	<div className="program-wrapper">
    		 <ProgramButton />
    		 <ProgramDetailContainer />
    	</div>
    </div>
  );
}

export default App;
