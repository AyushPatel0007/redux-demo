import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './UserReducer'
import { useNavigate } from 'react-router-dom'




const Create = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const handleSubmit = (event) => {
        console.log(name)
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name: name, email: email }))
        navigate('/')
    }

    return (
        <div>
            <h1>Create the form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name" placeholder='enter name' className='form-control' onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>
                        Email:
                    </label>
                    <input type="text" name="email" placeholder='enter email' className='form-control' onChange={e => setEmail(e.target.value)} />
                </div>
                <button className='btn btn-info'>Create</button>
            </form>

        </div>
    )
}

export default Create
