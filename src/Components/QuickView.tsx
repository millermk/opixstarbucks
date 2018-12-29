import * as React from 'react';
import { Product } from 'src/Models/Product';

interface IProductCardProps { 
    product: Product;
}

// tslint:disable-next-line:no-empty-interface
interface IProductCardState {
}

class QuickView extends React.Component<IProductCardProps, IProductCardState> {
    public constructor(props: IProductCardProps) {
        super(props);
    }

    public render() {
        return (
            <div className="QuickView">
                <div className="QuickView-image-container">
                    <img className="QuickView-image" src={process.env.PUBLIC_URL + '/product-images/' + this.props.product.imageName} />
                </div>
                <div className="QuickView-info">
                    <div>
                        <div className="QuickView-rating">★★★★★ (1)</div>
                        <div className="QuickView-lovers">♥ 124 LOVERS</div>
                        <div className="QuickView-title">{this.props.product.productName.toUpperCase()}</div>
                        <div className="QuickView-price">$25</div>
                        <div className="QuickView-code">CODE: 22500284108 | GELCOLOR</div>
                        <div className="QuickView-description">{this.props.product.productDescription}</div>
                        <div className="QuickView-find-store">FIND A STORE</div>
                    </div>
                    <div className="QuickView-bottom-fill" />
                    <div className="QuickView-bottom-content">
                        <a className="QuickView-try-it" href="#" onClick={this.nullButtonClick}>TRY IT ON</a>
                        <a className="QuickView-details-link" href="#" onClick={this.nullButtonClick}>PRODUCT DETAILS ⯈</a>
                    </div>
                </div>
            </div>
        );
    }

    private nullButtonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
    }
}

export default QuickView;
