import { useState } from 'react'
import SignUp from './components/Signup'
import "./register.css"


const Register = () => {
    const [role, setRole] = useState('');
    return (
        <div className='center'>
            <h5>Select Role</h5>
            <div className='d-flex'>

                <div className='mx-3'>
                    <input type="radio" value="host"  name="role" onClick={() => setRole("host")} />
                    <img src="../../src/assets/imgs/organizer.png"  alt="Organizer" height="150px" width="150px" />
                    <p>Organizer</p>
                </div>

                <div className='mx-3'>
                    <input type="radio" value="user"  name="role" onClick={() => setRole("user")} />
                    <img src="../../src/assets/imgs/attendee.png" alt="Attendee" height="150px" width="150px"/>
                    <p>Attendee</p>
                </div>

                <div className='mx-3'>
                    <input type="radio" value="sponsor" name="role" onClick={() => setRole("sponsor")} />
                    <img src="../../src/assets/imgs/sponsor.png" name="role" alt="Sponsor" height="150px" width="150px" />
                    <p>Sponsor</p>
                </div>
            </div>

            {role != "" &&
                <SignUp role={role} />
            }
        </div>
    )
}

export default Register