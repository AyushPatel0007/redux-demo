import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteUser } from './UserReducer'

const Mainhome = () => {
    const users=useSelector((state)=>state.users)
    console.log(users)

    const dispatch=useDispatch();
    const navigate=useNavigate()

    const handleDelete=(id)=>{
        dispatch(deleteUser({id}))


    }

  return (
    <div>
        <Link to="/create" className='btn btn-success my-3'>Create</Link>
        <table className='table'>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Name
                </th>
                <th>
                    Email
                </th>
                <th>
                    Action
                </th>
            </tr>
            <tbody>
                {users.map((user,index)=>(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary' >Edit</Link>
                            <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-primary'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Mainhome;
