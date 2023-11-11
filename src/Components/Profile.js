import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Profile.css';

const defaultImageUrl = 'https://picsum.photos/100?grayscale';

const Profile = ({ data, isHighlighted }) => {
    
    if(data){
        const { name, email, major, yearOfStudy } = data;
        console.log(name)
        return (
            <div className={`profile ${isHighlighted ? 'highlighted' : ''}`}>
                <Link to={`/student/${JSON.stringify(data)}`}>
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