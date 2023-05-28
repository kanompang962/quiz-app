import React, { useContext } from 'react'
import { DataContext } from '../App'
import './../App.css'

const Menu = () => {
    const { setAppState } = useContext(DataContext);
    return (
        <div className='menu'>
            <h1>Menu</h1>
            <button onClick={() => setAppState('quiz')}>เริ่มทำแบบทดสอบ</button>
        </div>
    )
}

export default Menu