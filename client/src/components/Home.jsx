import React from 'react';
import Axios from 'axios';

class Home extends React.Component { //component use state
    render() {
        return (
            <>
            <div className='middle'>
                <div className='search-elements'>
                    <input type="text" className='search-bar' placeholder='Enter a search keyword...'/>
                </div>

                <div>
                    <button className='submit-button'>Submit</button>
                </div>
            </div>
            </>
        );
    }
}

export default Home;