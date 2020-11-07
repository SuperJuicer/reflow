import Bottom from './Bottom';
import Top from './Top';
import React, {useState, useRef} from 'react';

function App() {

  // We'll need a reference to the App to eventually pass scrollTop to grid
  // for positioning when App is scrolled vertically.
  const appRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  function setScrollTopHandler() {
    setScrollTop(
      appRef
        ? appRef.current
          ? appRef.current.scrollTop
          : 0
        : 0
    );
  }

  console.log('appRef = ');
  console.log(appRef);
  console.log('appRef.current = ');
  console.log(appRef.current);
  console.log('appRef.current.scrollTop = ');
  if (appRef.current) console.log(appRef.current.scrollTop);
  console.log('scrollTop = ' + scrollTop);
  console.log('-scrollTop = ' + -scrollTop);

  // Note: footer would not be an appropriate substitute for Bottom
  return (
    <div ref={appRef} onScroll={setScrollTopHandler}>
      <Top/>
      <Bottom 
        // Will pass -scrollTop eventually to fixed-positioned grid
        // to change its position while scrolling vertically.
        style={{marginTop: -scrollTop}}
      />
    </div>
  );
}

export default App;
