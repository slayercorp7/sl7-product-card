import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const App = () => {
  const product = {
    id: '1',
    title: 'compra',
    img: './coffe-mug.png',
  };
  return (
    <>
      <ProductCard
        key={product.id}
        product={product}
        InitialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ maxCount, reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons maxCount={maxCount} />
            <button onClick={reset}>reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {/* si no llega al maxcount ocultar */}
            <button onClick={() => increaseBy(+2)} disabled={isMaxCountReached}>
              +2
            </button>
            <span>count:{count}</span>
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
