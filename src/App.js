import React, { useEffect, useState } from 'react';
import Bottom from './Bottom';
import Top from './Top';
// import React, {useState, useRef} from 'react';

function App() {

  // We'll need a reference to pass the yOffset to the grid eventually  
  const [yOffset, setYOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setYOffset(window.pageYOffset)
    }
  }, []);

  console.log(-yOffset); 

  return (
    // Note: footer would not be an appropriate substitute for Bottom
    <div>
      <Top/>
      <Bottom 
        // Will pass -yOffset eventually to fixed-positioned grid
        // to change its position while scrolling vertically.
        style={{marginTop: -yOffset}}
      />
    </div>
  );
}

export default App;
