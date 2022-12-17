import React from 'react';
import Button from 'react-bootstrap/Button';

function SignUp(){
    return ( 
        <div>
            <form>
             <br/>
            <br/>
            <h5>Type</h5>
            <input 
                type="radio"
                value="Sponsor"
                name="role"

                            />
            <label for="html">Sponsor</label>&emsp;
            <input 
                type="radio"
                value="Host"
                name="role"

            />
            <label for="html">Host</label>&emsp;
            <input 
                type="radio"
                value="User"
                name="role"

            />
            <label for="html">User</label>
            <br/>
            <br/>
        
            <input 
                type="text"
                placeholder="Enter your Organization"

            />
            <br/>
            <br/>
            <input 
                type="text"
                placeholder="Enter your location"
               
            />
            <br/>
            <br/>
            <input 
                type="text"
                placeholder="Enter your dept"
               
            />
            <br/>
            <br/>
            <input 
                type="text"
                placeholder="Enter your sem"
               
            />
            <br/>
            <br/>
            <input 
                type="text"
                placeholder="Enter your company name"
               
            />
            <br/>
            <br/>
            <input 
                type="text"
                placeholder="Enter your Contact"
               
            />
            <br/>
            <br/>
            <textarea placeholder='Enter your company description'>
                
            </textarea>
            <br/>
            <br/>
            
            <Button>
               SignUp
            </Button>
            </form>
        </div>

     );
}
 
export default SignUp;