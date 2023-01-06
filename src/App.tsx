import React from 'react';
import './App.css';
import { RandomeFunctional } from './randomFunctional';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPageFunctinol } from './ErrorPageFunctinol';
import { MyComponant } from './MyComponant';
import { ProductDetail } from './ProductDetail';
import data from './Data';
function App() {

  return (
    <div className="App">
      <h2>Typescript</h2>
      <h3>Q1 and Q2. Random number generation using functional component</h3>
      <ErrorBoundary fallback={<ErrorPageFunctinol />}>
        <RandomeFunctional />
      </ErrorBoundary>
      <hr />
      <h3>Q3. React app with typescript</h3>
      <MyComponant name="Lucky" age={21} logedIn={true} />
      <hr />
      <h3>Q4. Pass product details and print</h3>
      <ProductDetail detail={data} />
    </div>
  );
}

export default App;
