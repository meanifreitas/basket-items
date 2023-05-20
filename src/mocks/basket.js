import logo from '../../assets/logo.png';
import tomato from '../../assets/vegetables/tomato.png';
import broccoli from '../../assets/vegetables/broccoli.png';
import potato from '../../assets/vegetables/potato.png';
import cucumber from '../../assets/vegetables/cucumber.png';
import pumpkin from '../../assets/vegetables/pumpkin.png';

const basket = {
  top: {
    title: 'Basket Details'
  },
  details: {
    basketName: 'Vegetables basket',
    farmName: 'Jenny Jack Farm',
    farmLogo: logo,
    description: 'A basket with selected items directly from the farm to your kitchen',
    price: '$40',
    button: 'Buy'
  },
  items: {
    title: 'Basket items',
    list: [{
      name: 'tomato',
      image: tomato
    }, {
      name: 'broccoli',
      image: broccoli
    }, {
      name: 'potato',
      image: potato
    }, {
      name: 'cucumber',
      image: cucumber
    }, {
      name: 'pumpkin',
      image: pumpkin
    }]
  }
};

export default basket;