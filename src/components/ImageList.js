import ImageShow from "./ImageShow";
import "../../node_modules/bulma/css/bulma.css"

function ImageList({images}){
    const renderedImages = images.map( (image)=>{
        console.log(image);
        return <ImageShow image={image} />

    });
    // const renderedImages = (images)=>
    // {
    //     return <ImageShow image={images} />
    // }

    return(
        <div style={{justifyContent: 'center'}}>{renderedImages}</div>
    );
}

export default ImageList;