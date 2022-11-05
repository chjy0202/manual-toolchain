import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <figure className="react-figure">
    <a
      className="link"
      href="https://reactjs.org"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img className="logo" src="assets/react.svg" alt="React" />
    </a>
    <figcaption className="description">React 툴체인 매뉴얼 구성</figcaption>
  </figure>
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
