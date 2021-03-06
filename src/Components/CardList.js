import React, { Component } from 'react';

const testData = [
    {
        name: "Dan Abramov",
        avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
        company: "@facebook"
    },
    {
        name: "Sophie Alpert",
        avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
        company: "Humu"
    },
    {
        name: "Sebastian Markbåge",
        avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
        company: "Facebook"
    },
];

const CardList = (props) => (
    <div>
        {testData.map(profile => <Cards {...profile} />)}
    </div>
);

class Cards extends Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} />
                <div className="info">
                    <div className="name" >{profile.name}</div>
                    <div className="company" >{profile.company}</div> {/*inline styling in react */}
                </div>
            </div>
        );
    }
}

export default CardList;
