import './Top.css';

/**
 * Presentational component, responsible for rendering the Top of the app,
 * which includes the level 1 heading and the ordered list
 */
const Top = () => {

  return (
    <main>
      <h1>Reflow Demo</h1>
      <ol>
        <li>Decrease your resolution to 1280x1024</li>
        <li>Zoom to 400%</li>
        <li>What do you see?</li>
      </ol>
    </main>);
};

export default Top;