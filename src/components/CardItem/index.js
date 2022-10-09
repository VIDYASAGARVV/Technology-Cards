// Write your code here.
import './index.css'

const CardItem = props => {
  const {techDetails} = props
  const {title, description, imgUrl, className} = techDetails
  console.log(title)

  return (
    <div className={`${className} card-container`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="card-img" alt={`${title}-img`} />
      </div>
    </div>
  )
}
export default CardItem
