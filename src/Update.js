import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'

 

const Update = () => {

    const users=useSelector((state)=>state.users)
    const {id}=useParams();
    const exitsingsusers=users.filter(f=>f.id==id)
    const {name,email}=exitsingsusers[0]
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch=useDispatch()
    const navigate=useNavigate()

 const handleUpdate=(e)=>{
    e.preventDefault();
    dispatch(updateUser({id:id,name:uname,email:uemail}))
    navigate("/")

 }

  return (
    <div>
        <form onSubmit={handleUpdate}>
                <div>
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name" placeholder='enter name' className='form-control' value={uname} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>
                        Email:
                    </label>
                    <input type="text" name="email" placeholder='enter email' className='form-control' value={uemail} onChange={e => setEmail(e.target.value)} />
                </div>
                <button className='btn btn-info'>Update</button>
            </form> 
    </div>
  )
}

export default Update
