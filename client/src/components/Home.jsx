import React from 'react';
import Axios from 'axios';

class Home extends React.Component { //component use state
    render() {
        return (
            <>
            <div className='top-bar'>
                <div className='logo'>
                    <img src="" alt=""/>
                </div>

                <div>
                    <h2>About</h2>
                </div>

                <div>
                    <h2>Menu</h2>
                </div>
            </div>

            <div className='middle'>
                <div className='search-elements'>
                    <input type="text" className='search-bar' placeholder='Enter a search keyword...'/>
                </div>

                <div>
                    <button className='submit-button'>Submit</button>
                </div>
            </div>

            <div className='bottom-bar'>
                <div className='dev-info'>Developer Information</div>
                <div className='licenses'>Licenses</div>
            </div>
            </>
        );
    }
}

export default Home;