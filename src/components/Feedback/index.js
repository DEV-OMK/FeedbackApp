// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  }

  emojiClick = () => {
    this.setState(prevState => ({isFeedbackGiven: !prevState.isFeedbackGiven}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedbackGiven} = this.state

    return (
      <div className="bg-container">
        {!isFeedbackGiven && (
          <div className="feedback-card">
            <h1 className="feedback-title">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="feedback-emoji-container">
              {emojis.map(eachEmoji => {
                const {id, name, imageUrl} = eachEmoji

                return (
                  <li className="emoji-container" key={id}>
                    <img
                      className="emoji"
                      src={imageUrl}
                      onClick={this.emojiClick}
                      alt={name}
                    />
                    <p className="emoji-name">{name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        {isFeedbackGiven && (
          <div className="feedback-card">
            <img
              src={loveEmojiUrl}
              className="emoji"
              onClick={this.emojiClick}
              alt="love emoji"
            />
            <h1 className="feedback-title">Thank You!</h1>
            <p className="thank-you-caption">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
