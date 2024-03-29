import React, { Component } from 'react';
import carousel1 from "./Images/carousel1.png"
import carousel2 from "./Images/carousel2.png"
import carousel3 from "./Images/carousel3.png"
import carousel4 from "./Images/carousel4.png"
import './App.css';

const carousels = [carousel4, carousel1, carousel2, carousel3]
class App extends Component {
  state = {
    index: 0,
  }

  componentDidMount() {
    setInterval(this.slider, 3000)
  }

  slider = () => {
    const { index } = this.state
    if (index/100 < carousels.length-1) {
      this.setState({index: index + 100})
    } else {
      this.setState({index: 0})
    }
  }

  render() {
    const {index} = this.state
    return (
      <div
        className="slider"
        style={{ 
          transform: `translateX(-${index}%)`,
          transition: `transform ${index ? 500 : 0}ms`,
        }}
      >
        {carousels.map(url => 
          <div className="slider-container" key={url}>
            <img src={url} alt="carousel_Image" className="responsive" />
          </div>)
        }
      </div>
    )
  }
}

export default App;
