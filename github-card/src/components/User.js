import React from 'react';

class User extends React.Component {
    render() {
        return(
            <div className='my-card'>
                <img src={this.props.profile.avatar_url}/>
                <div>
                    <h3>{this.props.profile.name}</h3>
                    <p>Username: {this.props.profile.login}</p>
                    
                </div>
            </div>
        );
    }
}

export default User;