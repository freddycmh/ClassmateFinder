import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import '../Style/Student.css'
const Student = () => {
    const { studentData } = useParams();
    console.log(studentData)
    const data = JSON.parse(studentData);
  
    // Default profile picture URL
    const defaultImageUrl = 'https://picsum.photos/100?grayscale';
  
    return (
        <div>
            <Header/>
            <div className="container mt-4">
        
        <div className="row">
          <div className="col-md-3">
            <img src={defaultImageUrl} alt="Profile" className="img-fluid rounded-circle" />
            <div className="bio-box mt-3">
            <div className="bio-label">Bio:</div>
            <div className="bio-data">
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
            
          </div>
          <div className="col-md-7">
            <div className="info-box">
              <div className="info-data">{data.name}</div>
            </div>
            <div className="info-box">
              <div className="info-data">{data.yearOfStudy}</div>
            </div>
            <div className="info-box">
              <div className="info-label">Major:</div>
              <div className="info-data">{data.major}</div>
            </div>
            <div className="info-box">
              <div className="info-label">Email:</div>
              <div className="info-data">{data.email}</div>
            </div>
          </div>
        </div>
      </div>
        </div>
      
    );
  };
  
  export default Student;