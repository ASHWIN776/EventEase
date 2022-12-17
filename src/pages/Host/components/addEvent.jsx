import React from 'react'
import Button from 'react-bootstrap/Button';
import AddEventForm from './AddEventForm';
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
    let navigate = useNavigate();
    return (
        <div>
        <center>
        <br/>
           <br/>
           
           <Button onClick={() => navigate("/AddEventForm")}>
              Add Event
           </Button>
           {/* <AddEventForm/> */}
        </center>
      </div>
     );
}
 
export default AddEvent;