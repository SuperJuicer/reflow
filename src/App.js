import Bottom from './Bottom';
import './App.css';

// Note: footer would not be an appropriate substitute for Bottom
function App() {
  return (
    <>
      <main>
        <h1>Reflow Demo</h1>
        <ol>
          <li>Decrease your resolution to 1280x1024</li>
          <li>Zoom to 400%</li>
          <li>What do you see?</li>
        </ol>
      </main>
      <Bottom/>
    </>
  );
}

export default App;
