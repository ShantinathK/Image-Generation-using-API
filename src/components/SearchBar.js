// import { createElement } from "react";
import "./SearchBar.css";
import { useState} from "react";
import '../../node_modules/bulma/css/bulma.css';
// import Image from "../Images/bg.jpg";


function SearchBar({ onSubmit}){
    const[term, setTerm] = useState('')
    

    const handleInput = (event) => {
        setTerm(event.target.value);
    }
      
    const handleClick = (event) => {
        event.preventDefault();
        onSubmit(term);
        console.log("hello"); 
    }   
    return(
        <div className="search-Bar">
            {/* using form which trigger Asubmit event in form */}
            {/* <div id="backgd"></div> */}
            <form id="content" onSubmit={handleClick}>
                <div className="field" style={{width: '60%'}}>
                    <label className="label">API Based Image Generator Tool</label>
                    <div className="field">
                        <p style={{color: 'white', textAlign: 'left'}}>An API-based image generation tool that serves as an online gallery, allowing users to effortlessly download high-quality images to their local machines.</p>
                    </div>
                    <div className="field">
                        <div className="control">
                                <input className="input is-medium is-rounded" type="text" placeholder="e.g. Car" value={term} onChange={handleInput} />
                        </div>
                    </div>
                </div>
                
                
                <button className="button is-link is-rounded" onClick={handleClick}>Generate</button>
            </form>
        </div>
    );
}



export default SearchBar;