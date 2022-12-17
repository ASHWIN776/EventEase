import { useState } from 'react'
import SignUp from './components/Signup'


const Register = () => {
    const [role, setRole] = useState('');
    return (
        <div>
            <h5>Select Role</h5>

            <input type="radio" value="sponsor"  onClick={() => setRole("sponsor")} />
            <img src="" alt="" />
            <label htmlFor="html">Sponsor</label>&emsp;
            <input type="radio" value="host"  onClick={() => setRole("host")} />
            <label htmlFor="html">Host</label>&emsp;
            <input type="radio" value="user"  onClick={() => setRole("user")} />
            <label htmlFor="html">User</label>
            {role != "" &&
                <SignUp role={role} />
            }
        </div>
    )
}

export default Register