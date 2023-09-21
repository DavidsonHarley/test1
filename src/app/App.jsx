import { Suspense, lazy } from 'react';
import './styles/index.scss';

const Main = lazy(() => import('../pages/Main/Main'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="app">
        <Main />
      </div>
    </Suspense>
  );
}

export default App;
