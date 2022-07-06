import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../../src/components/ProductTitle';
import { ProductCard } from '../../../src/components/ProductCard';
import { product1 } from '../../data/products';

describe('pruebas en Product Title', () => {
  test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(<ProductTitle title="hola" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
