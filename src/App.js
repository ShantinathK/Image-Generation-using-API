// import searchImages from "./OpenAI";
import searchImages from "./api";
import { useState } from "react";
// import ImageShow from "./components/ImageShow";
import ImageList from "./components/ImageList"
import SearchBar from "./components/SearchBar";



function App(){

    const [images, setImages] = useState([]);
    async function handlesubmit(term){
        // setClicks(term);
        // return 'hello' + term
        try{
            let result = 0;
            if(term.length>0){
                result  = await searchImages(term);
                if (result && result.length > 0) {
                    // Data received successfully
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

  


    return(
        <div>
            <SearchBar onSubmit={handlesubmit} />
            <ImageList images = {images} />
            
        </div>
    );
}

export default App;