import React from 'react'
import "../StacKOverflow/css/index.css"
import MainQuestion from './MainQuestion'
import Sidebar from '../StacKOverflow/Sidebar'
import './index.css'

function index(){
    return<>
        <div className='stack-index'>
            <div className='stack-index-content'>
                <Sidebar/>
                <MainQuestion/>
            </div>
        </div>
        </>

}
export default index