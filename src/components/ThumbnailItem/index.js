// Write your code here.

const ThumbnailItem = prop => {
  const {key, imagesList} = prop
  const {thumbnailUrl, imageButtun, thumbnailAltTex} = imagesList

  const onChangeImage = () => {
    imageButtun(key)
  }
  return (
    <li className="li-con">
      <button onClick={onChangeImage} type="button">
        <img src={thumbnailUrl} alt={thumbnailAltTex} />
      </button>
    </li>
  )
}

export default ThumbnailItem
