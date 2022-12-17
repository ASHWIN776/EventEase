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
            
            <center>
                <h1>{eventInfo.title}</h1>
                <div>
                    {themeArr}
                </div>
                <p>
                    {eventInfo.content}
                </p>
                <div>
                    <div>
                    <Button variant="light" size="sm" active className="mx-2 my-2">
                        Apply as a volunteer
                        </Button>
                    </div>
                    <div>
                    <Button variant="light" size="sm" active className="mx-2 my-2">
                        Participate
                    </Button>
                    </div>
                </div>
            </center>
        </div>
    );
}
 
export default ViewMore;