import React from 'react';
import Button from 'react-bootstrap/Button';

function SignUp() {
    return (
        <div>
            <form>
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

                <input
                    type="text"
                    placeholder="Enter your Organization"
                />

                <input
                    type="text"
                    placeholder="Enter your location"

                />

                <input
                    type="text"
                    placeholder="Enter your dept"
                />

                <input
                    type="text"
                    placeholder="Enter your sem"
                />

                <input
                    type="text"
                    placeholder="Enter your company name"
                />

                <input
                    type="text"
                    placeholder="Enter your Contact"
                />

                <textarea placeholder='Enter your company description'>

                </textarea>


                <Button>
                    SignUp
                </Button>
            </form>
        </div>

    );
}

export default SignUp;