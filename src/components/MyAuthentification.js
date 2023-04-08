import { useState } from 'react'
// import { auth } from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function MyAuthentification() {

    const [data, setData] = useState({});

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value };

        setData({ ...data, newInput });

    };

    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((response) => {
                console.log(response.user)
            })
            .catch((err) => {
                alert(err.message)
            })
    };
    return (
        <div className='input'>
            <input
                name="email"
                placeholder='email'
                type='email'
                onChange={(event) => handleInput(event)}
            />
            <input
                name="password"
                placeholder='password'
                type='password'
                onChange={(event) => handleInput(event)}
            />
            <button
                name='submitBtn'
                onClick={() => handleSubmit()}
            >Submit</button>

        </div>
    )
}
