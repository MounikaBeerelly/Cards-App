import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="github-profile">
                <h2 style={{color: Math.random() < 0.5 ? 'green' : 'red'}}> Card Component</h2> {/* conditional styling */}
                <hr/>
                <img src="https://placehold.it/75" />
                <div className="info">
                    <div className="name" style={{fontWeight: 'bold'}}>Name here..</div>
                    <div className="company" style={{fontStyle:'italic', fontSize:'60%'}}>Company here...</div> {/*inline styling in react */}
                </div>
            </div>
        );
    }
}

export default Card;
