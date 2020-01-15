import React from 'react';
import Axios from 'axios';

class FollowerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: {}
        }
    }

    componentDidMount() {
        Axios.get(this.props.userData.url)
        .then(res => {
            this.setState({profileData: res.data});
        })
    }

    render() {
        return(
            <div className='user-card'>
                <img src={this.state.profileData.avatar_url}/>
                <div>
                    <h3>{this.state.profileData.name}</h3>
                    <p>Username: {this.state.profileData.login}</p>
              
                </div>
            </div>
        );
    }
}

export default FollowerCard;