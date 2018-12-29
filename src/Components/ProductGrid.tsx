import * as React from 'react';
import {products} from '../Data/Data';
import ProductCard from './ProductCard';

class ProductGrid extends React.Component {
  public render() {
    const items: JSX.Element[] = products.map(p => <ProductCard product={p} key={p.productID}/>);
    items.push(...products.map(p => <div className="Product-card-dummy" key={p.productID + '-dummy'}/>));

    return (
      <div className="Product-grid">
        {items}
      </div>
    );
  }
}

export default ProductGrid;
