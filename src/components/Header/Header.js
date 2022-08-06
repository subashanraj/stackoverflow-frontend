import { Avatar } from '@mui/material'
import React from 'react'
import './CSS/Header.css'
import SearchIcon from '@mui/icons-material/Search'
import InboxIcon from '@mui/icons-material/Inbox'
import { Link, useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../feature/userSlice'
import { auth } from '../../firebase'


function Header() {
    const user =useSelector(selectUser)
    const history=useHistory()
    
  return (
   <div className='header-container'>
    <div className='header-left'>
    <Link to = '/'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png' alt='logo' />
        </Link>
        <h3>Products</h3>
    </div>
    <div className='header-middle'>
        <div className='header-search-container'>
            <SearchIcon/>
            <input type="text" placeholder="Serach..."/>
        </div>
    </div>
    <div className='header-right'>
        <div className='header-right-container'>
            <span onClick={()=> 
                {auth.signOut()
                history.push('/')
                }}><Avatar src={user?.photo} /></span>
            <InboxIcon/>
            <svg
            aria-hidden='true'
            className='svg-icon iconStackExchange'
            width='24' 
            height='24'
            viewBox='0 0 18 18'
            fill='rgba(0,0,0,0.5)'
            style={{
              cursor:'pointer',
            }}
            >
             <path d ="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v313-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
             </svg>
        </div>
    </div>

   </div>
  )
}

export default Header