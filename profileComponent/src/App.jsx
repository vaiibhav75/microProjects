import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const profile1 = {
        backgroundImage: "https://picsum.photos/300/150",
        profileImage: "https://picsum.photos/250",
        name: "John Doe",
        place: "New York",
        followers: 12120,
        likes: 2200,
        photos: 300000
    }

    const profile2 = {
        backgroundImage: "https://picsum.photos/300/150",
        profileImage: "https://picsum.photos/250",
        name: "Jane Doe",
        place: "Los Angeles",
        followers: 12120,
        likes: 2200,
        photos: 300000
    }

  return (
    <div className="mainContainer">
        <ProfileCard profile={profile1}></ProfileCard>
        <ProfileCard profile={profile2}></ProfileCard>
    </div>
  )
}

function ProfileCard ({profile}) {
    const background = profile.backgroundImage;
    const profileImage = profile.profileImage;
    const name = profile.name;
    const place = profile.place;
    const followers = formatNumber(profile.followers);
    const likes = formatNumber(profile.likes);
    const photos = formatNumber(profile.photos);

    return (
        <div className="cardContainer">
            <div className="upperContainer">

                <img src={profileImage} alt="profile" className="profileImage"/>
                <h3 className="name">{name}</h3>
                <p className="place">{place}</p>

            </div>
            <div className="lowerContainer">
                <Stat tag= "Followers" number={followers}></Stat>
                <Stat tag="Likes" number={likes}></Stat>
                <Stat tag= "Photos" number={photos}></Stat>
            </div>
        </div>
    )
}

function Stat ({number,tag}) {
    return (
        <div className="statContainer">
            <h3 className="statHeading"> {number}</h3>
            <p className="statNumber">{tag}</p>
        </div>
    )
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





export default App
