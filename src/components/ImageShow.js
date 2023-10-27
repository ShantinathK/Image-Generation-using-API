import "../../node_modules/bulma/css/bulma.css";
import "./ImageShow.css";
import { saveAs } from "file-saver";
import downloadicon from '../Images/download.svg';


function ImageShow({image}){
    // console.log(image)

   
    const downloadImage = () => {
        saveAs(image.urls.small, image.description+".jpg") // Put your image URL here.
    }
    

    return(
        <div className="imageAlign ">
            {/* <div>{image.id}</div> */}
            {/* <img src={image.urls.small} alt="image1" style={{width: "500px", height: "500px",position:"relative", flexDirection: "column"}}/> */}
            <img id="display" className="image is-128X128" src={image.urls.small} alt={image.alt}/>
            <i className="fas fa-download" id="download" onClick={downloadImage}>
                <img src={downloadicon} alt="downloadimage" />
            </i>
        </div>
        
    );
}

export default ImageShow;