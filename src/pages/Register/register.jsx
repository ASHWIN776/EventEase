import { useState } from 'react'
import SignUp from './components/Signup'


const Register = () => {
    const [role, setRole] = useState('');
    return (
        <div>
            <h5>Type</h5>

            <input type="radio" value="sponsor" name="role" onClick={() => setRole("sponsor")} />
            <label htmlFor="html">Sponsor</label>&emsp;
            <input type="radio" value="host" name="role" onClick={() => setRole("host")} />
            <label htmlFor="html">Host</label>&emsp;
            <input type="radio" value="user" name="role" onClick={() => setRole("user")} />
            <label htmlFor="html">User</label>
            {role != "" &&
                <SignUp role={role} />
            }
        </div>
    )
}

export default Register