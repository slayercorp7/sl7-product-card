# SL7-Product-Card

Este es un paquete de pruebas

### Diego Caiza

## ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons }
from ''
```

```
<ProductCard
          key={product.id}
          product={product}
          InitialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({maxCount, reset, increaseBy, count, isMaxCountReached}) => (
            <>
              <ProductImage  />
              <ProductTitle  />
              <ProductButtons  maxCount={maxCount} />
              <button onClick={reset}>reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {/* si no llega al maxcount ocultar */}
              <button onClick={() => increaseBy(+2)}
              disabled={(isMaxCountReached)}
              >+2</button>
              <span>count:{count}</span>

            </>
          )}
        </ProductCard>


```
