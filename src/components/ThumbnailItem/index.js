// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  handleClick = () => {
    const {imageDetails, handleThumbnailClick} = this.props
    handleThumbnailClick(imageDetails.id)
  }

  render() {
    const {imageDetails, isSelected} = this.props

    return (
      <li className="thumbnail-item">
        <button type="button" className="button">
          {' '}
          <img
            src={imageDetails.thumbnailUrl}
            alt={imageDetails.thumbnailAltText}
            className={`thumbnail ${isSelected ? 'selected' : 'un-selected'}`}
            onClick={this.handleClick}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
