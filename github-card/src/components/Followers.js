  
import React from 'react';
import Axios from 'axios';

import FollowerCard from './FollowerCard';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        Axios.get('https://api.github.com/users/davebettswebdev/followers')
        .then(res => {
            this.setState({followers: res.data});
            console.log(this.state.followers);
        })
    }

    render() {
        return(
            <div>
                {this.state.followers.map((element, index) => <FollowerCard key={index} userData={element}/>)}
            </div>
        );
    }
}

export default Followers;