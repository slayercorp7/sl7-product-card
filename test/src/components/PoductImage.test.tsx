import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../../src/components/ProductCard';
import { product1 } from '../../data/products';
import { ProductImage } from '../../../src/components/ProductImage';

describe('pruebas en Product image', () => {
  test('debe de mostrar el componente correctamente con la imagen del producto', () => {
    const wrapper = renderer.create(<ProductImage img='https://example.jpg' />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductImage/>}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});