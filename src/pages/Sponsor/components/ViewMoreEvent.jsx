import React from "react"
import NavScrollExample from "./navbar"
import {useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const ViewMore = () => {
    
    let eventInfo = useLocation().state;
    console.log(eventInfo)
    
    let themeArr = eventInfo.theme.map(t => (
        <Button variant="light" size="sm" active className="mx-2 my-2">
            {t}
        </Button>
    ));
    return (  
        <div>
            <NavScrollExample/>
            <center>
                <h1>{eventInfo.title}</h1>
                <div>
                    {themeArr}
                </div>
                <p>
                    {eventInfo.content}
                </p>
            </center>
        </div>
    );
}
 
export default ViewMore;