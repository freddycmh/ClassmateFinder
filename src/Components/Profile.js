import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Profile.css';

const defaultImageUrl = 'https://img.icons8.com/material-rounded/1921/00000/user-male-circle.png';

const Profile = ({ data, isHighlighted }) => {
    
    if(data){
        const { name, email, major, yearOfStudy } = data;
        console.log(name)
        return (
            <div className={`profile profile-item${isHighlighted ? 'highlighted' : ''}`}>
                <Link to={`/ClassmateFinder/student/${JSON.stringify(data)}`} className="link-text">
                <img src={defaultImageUrl} alt={`${name}'s profile`} />
                <p>{name}</p>
                </Link>
              
            </div>
          );
    }
    return 
    // <div className={`profile ${isHighlighted ? 'highlighted' : ''}`}>
    //   <img src={defaultImageUrl} alt={`${name}'s profile`} />
    //   <p>{name}</p>
    // </div>
    ;
};

export default Profile;