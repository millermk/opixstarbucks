import * as React from 'react';
import './App.css';

import Header from './Components/Header';
import ProductGrid from './Components/ProductGrid';

import * as ReactModal from 'react-modal';
import hero from './Assets/hero.jpg';

class App extends React.Component {
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
            <p className="App-title">Starbucks Collection</p>
            <p className="App-subtitle">The perfect cup of coffee is a lot like the perfect manicure - it's made just for you. So espresso yourself with this warm, rich collection of iconic Starbucks colors, all in OPI's durable, high-gloss GelColor formula.</p>
          </div>
        </div>
        <p className="Product-header">Starbucks Gelcolor</p>
        <ProductGrid />
      </div>
    );
  }
}

export default App;
