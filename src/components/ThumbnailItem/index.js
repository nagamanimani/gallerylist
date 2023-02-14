// Write your code here.

const ThumbnailItem =(prop)=>{
    const { key,imagesList}=this.prop
    const { imageUrl,humbnailUrl}=imagesList

    const onChangeImage()=>{
        imageButtun(key)
    }
return
    (<li id={key}>
    <button onClick={this.onChangeImage} >  
    <img src={humbnailUrl}/>

    </button>
      
    </li>)
}

export default ThumbnailItem 
