import React from "react"
import NavScrollExample from "./navbar"
import {useLocation} from 'react-router-dom';


const ViewMore = () => {
    
    return (  
        <div>
            <NavScrollExample/>
            <center>
                <h1>{useLocation().state.title}</h1>
            </center>
        </div>
    );
}
 
export default ViewMore;