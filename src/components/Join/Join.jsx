import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

function Join() {

    const [formValue, setFormValue] = useState({
        name: '',
        room: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValue({ ...formValue, [name]: value })
    }

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder="Name" type="text" name="name" className="joinInput" onChange={handleChange}/>
                </div>
                <div>
                    <input placeholder="Room" type="text" name="room" className="joinInput mt-20" onChange={handleChange}/>
                </div>
                <Link 
                    onClick={event => (!formValue.name || !formValue.room) && event.preventDefault()} 
                    to={`/chat?name=${formValue.name}&room=${formValue.room}`}>
                    <button className={'button mt-20'} type="submit">Sign In</button>
                </Link>
               
            </div>
        </div>
    )
}

export default Join
