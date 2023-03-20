import React, { useState } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Popover from './components/Popover';
import Sidebar from './components/SideBar';


function App() {

  const [popover_visible ,setPopoverVisibility ] = useState(false);

  const setPopOverVisibleListener =() =>{
    setPopoverVisibility(!popover_visible)
  }
  return (
    <div className="app">
     
      {/* Side bar */}
      <Sidebar/>
      <MainContent setPopOverVisibleListener={setPopOverVisibleListener} />
      <Popover visible={popover_visible}/>
    </div>
  );
}

export default App;
