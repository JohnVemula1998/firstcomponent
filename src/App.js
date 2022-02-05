import React, { Component } from 'react';
import Card from "./Card"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='heading'>First Component</h1>
        <Card 
        title = "Food"
        image = "https://loremflickr.com/300/300/food"
        description ="Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals."
        />
        <Card 
        title = "Flowers"
        image = "https://loremflickr.com/300/300/flower"
        description ="A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Angiospermae). The biological function of a flower is to facilitate reproduction, usually by providing a mechanism for the union of sperm with eggs."
        />
        <Card 
        title = "Birds"
        image = "https://loremflickr.com/300/300/bird"
        description = "Birds are warm-blooded vertebrates characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton. Birds live worldwide and range in size from the 5.5cm bee hummingbird to the 2.8m ostrich."
        />
        <Card 
        title = "Cars"
        image = "https://loremflickr.com/300/300/car"
        description = "Cars came into global use during the 20th century, and developed economies depend on them. The year 1886 is regarded as the birth year of the car when German inventor Carl Benz patented his Benz Patent-Motorwagen."
        />
        
      </div>
    );
  }
}

export default App;
