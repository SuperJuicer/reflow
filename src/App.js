import { useEffect, useState } from 'react';
import Bottom from './Bottom';
import Top from './Top';

/**
 * Renders the app. Children are Top and Bottom components.
 * Can zoom up to 400% at 1280x1024 resolution without loss of function.
 * This meets WCAG's Success Criterion 1.4.10.
 */
function App() {

  // We'll need to pass the yOffset to the grid eventually for scrolling when the user zooms in,
  // especially with resolution 1280x1024 up to 400%.
  const [yOffset, setYOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setYOffset(window.pageYOffset);
    }
  }, []);

  return (
    // Note: footer would not be an appropriate substitute for Bottom
    <>
      <Top/>
      <Bottom 
        // Will pass -yOffset eventually to fixed-positioned grid
        // to change its position while scrolling vertically.
        style={{marginTop: -yOffset + 25}}
      />
    </>
  );
}

export default App;