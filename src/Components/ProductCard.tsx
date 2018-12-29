import * as React from 'react';
import * as ReactModal from 'react-modal';
import { Product } from 'src/Models/Product';
import QuickView from './QuickView';


interface IProductCardProps { 
    product: Product;
}

// tslint:disable-next-line:no-empty-interface
interface IProductCardState {
    isFavorite: boolean;
    isPreviewing: boolean;
}

class ProductCard extends React.Component<IProductCardProps, IProductCardState> {
    public constructor(props: IProductCardProps) {
        super(props);
        this.state = {
            isFavorite: false,
            isPreviewing: false
        }
    }

    public render() {
        return (
                <div className="Product-card">
                    <a className="Product-card-favorite" href="#" onClick={this.favoriteButtonClick}>{this.state.isFavorite ? '♥' : '♡'}</a>
                    <img className="Product-card-image" src={process.env.PUBLIC_URL + '/product-images/' + this.props.product.imageName} />
                    <div className="Product-card-title">{this.props.product.productName}</div>
                    <div className="Product-card-price">$25</div>
                    <div className="Product-card-rating">★★★★★ (1)</div>
                    <a className="Product-card-quick-view" href="#" onClick={this.quickViewButtonClick}>QUICK VIEW</a>
                    <ReactModal
                        isOpen={this.state.isPreviewing}
                        onRequestClose={this.exitPreview}
                        shouldCloseOnOverlayClick={true}
                        shouldCloseOnEsc={true}
                        className='Modal'
                        overlayClassName='ModalOverlay'
                    >
                        <a className="Modal-close" onClick={this.exitQuickViewButtonClick} href="#">✕</a>
                        <QuickView product={this.props.product}/>
                    </ReactModal>
                </div>
        );
    }

    private favoriteButtonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        this.setState({isFavorite: !this.state.isFavorite});
    }

    private quickViewButtonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        this.setState({isPreviewing: !this.state.isPreviewing});
    }

    private exitQuickViewButtonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        this.setState({isPreviewing: false});
    }

    private exitPreview = () => {
        this.setState({isPreviewing: false});
    }
}

export default ProductCard;
