import React, {Component} from 'react'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'


class App extends Component {
  state = {
    ingredients: this.props.ingredients,
    stack: []
  }
  
  handleClick = (e, id) => {
    const stackCopy = [...this.state.stack]
    stackCopy.unshift(this.state.ingredients[id])
    this.setState({
      stack: stackCopy
    })
  }

  handleClear = (e) => {
    this.setState({
      stack: []
    })
  }

  render() {
    return (
      <div className="App">
        <IngredientList allIngredients={this.state.ingredients} moveIngredients={this.handleClick}/>
        <BurgerPane burger={this.state.stack} clear={this.handleClear}/>
      </div>
    );

  }
}

export default App;
