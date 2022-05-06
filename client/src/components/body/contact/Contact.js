import React, {useState} from 'react'
//import { Link } from 'react-router-dom'
//import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isEmpty} from '../../utils/validation/Validation'


const initialState = {
    name: '',
    email: '',
    message: '',
    //password: '',
    //cf_password: '',
    err: '',
    success: ''
}

function Contact() {
    const [user, setUser] = useState(initialState)

    const {name, email, message, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) )
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        /*
        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})
*/

        /*
        try {
            const res = await axios.post('/user/register', {
                name, email, password
            })

            setUser({...user, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }

        */
    }

    return (
        <div className="login_page">
            <h2>Contact Us</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter your name" id="name"
                    value={name} name="name" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                </div>
                
                <div>
                    <label htmlFor="comment">Comment</label>
                    <input type="textarea" placeholder="Enter email address" id="email" />
                </div>
               

                <div className="row">
                    <button type="submit">Sumbit</button>
                </div>
            </form>

           
        </div>
    )
}

export default Contact