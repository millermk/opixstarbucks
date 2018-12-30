import * as React from 'react';
import './App.css';

import Header from './Components/Header';
import ProductGrid from './Components/ProductGrid';

import * as ReactModal from 'react-modal';
import hero from './Assets/hero.jpg';

// tslint:disable-next-line:no-empty-interface
interface IAppProps { 
}

interface IAppState {
  modalOpen: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  public constructor(props: IAppProps) {
    super(props);

    this.state = {modalOpen: true};
  }
  public componentDidMount() {
    ReactModal.setAppElement('.App');
  }
  public render() {
    return (
      <div className="App">
        <Header />
        <div className="App-hero">
          <img src={hero} className="App-hero-image" alt="logo" />
          <div className="App-hero-text">
            <p className="App-title">Starbucks® Collection</p>
            <p className="App-subtitle">The perfect cup of coffee is a lot like the perfect manicure - it's made just for you. So espresso yourself with this warm, rich collection of iconic Starbucks® colors, all in OPI's durable, high-gloss GelColor formula.</p>
          </div>
        </div>
        <p className="Product-header">Starbucks® Gelcolor</p>
        <ProductGrid />
        <ReactModal
            isOpen={this.state.modalOpen}
            onRequestClose={this.exitPreview}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            className='Modal'
            overlayClassName='ModalOverlay'
        >
            <a className="Modal-close" onClick={this.exitQuickViewButtonClick} href="#">✕</a>
            <p className="Modal-disclaimer-title">
              Disclaimer
            </p>
            <p className="Modal-disclaimer-content">
              This site is made as a mockup/parody only. This site is not an offer for or description of an actual product or service. OPI and GelColor are trademarks of Coty-OPI Inc. Starbucks, Starbucks Rewards, Frappuccino, and Passion Tango are trademarks or registered trademarks of Starbucks Corporation.
            </p>
        </ReactModal>
      </div>
    );
  }

  private exitPreview = () => {
    this.setState({modalOpen: false});
  }

  private exitQuickViewButtonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    this.setState({modalOpen: false});
  }
}

export default App;
