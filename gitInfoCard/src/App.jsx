import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetchProfiles(['https://api.github.com/users/vaiibhav75', 'https://api.github.com/users/anu30singh']);
    }, []);

    const fetchProfiles = (urls) => {
        Promise.all(urls.map(url =>
            fetch(url)
                .then(response => response.json())
                .then(data => ({
                    backgroundImage: "https://picsum.photos/300/150",
                    profileImage: data.avatar_url,
                    name: data.name,
                    place: data.login,
                    followers: data.followers,
                    likes: data.following,
                    photos: data.public_repos
                }))
        ))
            .then(profiles => setProfiles(profiles))
            .catch(error => console.error('Error fetching profiles:', error));
    };

    return (
        <div className="mainContainer">
            {profiles.map((profile, index) => (
                <ProfileCard key={index} profile={profile} />
            ))}
        </div>
    );
}

function ProfileCard({ profile }) {
    const { backgroundImage, profileImage, name, place, followers, likes, photos } = profile;

    return (
        <div className="cardContainer">
            <div className="upperContainer">
                <img src={profileImage} alt="profile" className="profileImage" />
                <h3 className="name">{name}</h3>
                <p className="place">{place}</p>
            </div>
            <div className="lowerContainer">
                <Stat tag="Followers" number={followers} />
                <Stat tag="Following" number={likes} />
                <Stat tag="Repos" number={photos} />
            </div>
        </div>
    );
}

function Stat({ number, tag }) {
    const formattedNumber = formatNumber(number);

    return (
        <div className="statContainer">
            <h3 className="statHeading">{formattedNumber}</h3>
            <p className="statNumber">{tag}</p>
        </div>
    );
}

function formatNumber(num) {
    const absNum = Math.abs(num);
    const million = 1000000;
    const billion = 1000000000;
    const trillion = 1000000000000;

    if (absNum < million) {
        return num.toLocaleString(); // Use built-in method for thousands separator
    } else if (absNum < billion) {
        const formattedNum = (num / million).toFixed(1).replace(/\.0$/, ''); // Convert to millions
        return addCommasToNumber(formattedNum) + 'M';
    } else if (absNum < trillion) {
        const formattedNum = (num / billion).toFixed(1).replace(/\.0$/, ''); // Convert to billions
        return addCommasToNumber(formattedNum) + 'B';
    } else {
        const formattedNum = (num / trillion).toFixed(1).replace(/\.0$/, ''); // Convert to trillions
        return addCommasToNumber(formattedNum) + 'T';
    }
}

function addCommasToNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default App;
