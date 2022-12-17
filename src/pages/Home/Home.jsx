import React from 'react'
import Main from './components/Main'

const Home = () => {
    return (
        <div className='d-flex flex-row justify-content-around eventImg' >
        <div>
            <img src="/src/assets/imgs/event.png" style={{marginTop: '200px'}} alt="" />
        </div>
            <Main/>
        </div>
    )
}

export default Home