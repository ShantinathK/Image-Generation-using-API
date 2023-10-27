// import searchImages from "./OpenAI";
import searchImages from "./api";
import { useState } from "react";
// import ImageShow from "./components/ImageShow";
import ImageList from "./components/ImageList"
import SearchBar from "./components/SearchBar";

let page = 1;

let result = 0;
function App(){
    const [T,setT] = useState("");
    const [images, setImages] = useState([]);
    async function handlesubmit(term){
        setImages([]);  //refresh the result with same search criteria
        setT(term);
        try{
            if(term.length>0){
                page = 1;
                result  = await searchImages(term, page);
                if (result && result.length > 0) {
                    
                    setImages(result); 
                }else{
                    // No data received from the server
                    throw new Error('No data received from the server');
                }
            }else{
                //Please enter something to generate
                throw new Error('Please enter something to generate');
                
            }
                    
        }catch(e){
            console.error('Error:', e.message);
            alert(e.message); // Rethrow the error to handle it at the higher level, if needed.
            window.location.reload();
        }
        
    }
    const showMore = async()=>{
            page++; // Increment the page to load more data
            const result = await searchImages(T, page);
              // Combine the new data with the existing data
            //   setImages((prevImages) => [...prevImages, ...result]);
            const update = [
                ...images, ...result
            ]
            setImages(update)
    }   

    
    return(
        <div>
            <SearchBar onSubmit={handlesubmit} />
            <ImageList images = {images} />
            <div style={{marginLeft: "45%"}}>
                {images.length > 0 && (
                <button onClick={showMore} className="button is-link is-rounded">
                Show More
                </button>
            )}
            </div>
            
            
        </div>
    );
}

export default App;