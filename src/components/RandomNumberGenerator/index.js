import {component} from 'react'
import './index.css'

class RandomNumberGenerator extends component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Generate
          </button>
          <p className="para">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
