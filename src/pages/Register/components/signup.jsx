import React from 'react';
import Button from 'react-bootstrap/Button';

function SignUp(){
    return ( 
        <div>
            <input 
                type="text"
                placeholder="Enter your department"

            />
            <br/>
            <br/>
            <input 
                type="text"
                placeholder="Enter your intrests"
               
            />
            <br/>
            <br/>
           <Button>
               SignUp
            </Button>
        </div>

     );
}
 
export default SignUp;