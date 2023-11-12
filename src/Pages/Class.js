// src/Class.js
import React, { useState } from 'react';
import Profile from '../Components/Profile';
import Header from "../Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import '../Style/Class.css';

const dummyData = [
  { id: 1, name: 'John Doe', yearOfStudy: 'Sophomore', major: 'Computer Science', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', yearOfStudy: 'Junior', major: 'Electrical Engineering', email: 'jane.smith@example.com' },
  { id: 3, name: 'Bob Johnson', yearOfStudy: 'Freshman', major: 'Mechanical Engineering', email: 'bob.johnson@example.com' },
  { id: 4, name: 'Alice Williams', yearOfStudy: 'Senior', major: 'Mathematics', email: 'alice.williams@example.com' },
  { id: 5, name: 'Charlie Brown', yearOfStudy: 'Sophomore', major: 'Physics', email: 'charlie.brown@example.com' },
  { id: 6, name: 'Eva Davis', yearOfStudy: 'Junior', major: 'Chemistry', email: 'eva.davis@example.com' },
  { id: 7, name: 'Frank Wilson', yearOfStudy: 'Senior', major: 'Biology', email: 'frank.wilson@example.com' },
  { id: 8, name: 'Grace Lee', yearOfStudy: 'Freshman', major: 'Environmental Science', email: 'grace.lee@example.com' },
  // Add more dummy data as needed
];

const profData = {id: 9, name: 'Prof. Bob', yearOfStudy: 'Professor', major: 'Environmental Science', email: 'profBob@example.com'}



const Class = () => {
  const {classname} = useParams();
  const [searchTerm, setSearchTerm] = useState('');



  return (
    <div>

      <Header />
      <h1 className="class-header">Classmate Search</h1>
      <div className="professor-container">
        <div className="row">
          <div className="col-2">
            <Profile
                key="prof"
                data= {profData}
                isHighlighted = {false}
              />
          </div>
          <div className="col-7 d-flex align-items-center ">
            <h4 className="mb-0">{classname}</h4>
          </div>
          <div className="col-3 d-flex justify-content-end align-items-center">
            <button className="btn btn-primary" style={{ height: 'fit-content' }}>Add to this class</button>
          </div>  
        </div>

      </div>
      <div className="Class">

        <div className="d-flex justify-content-center">
        <div className="input-group mb-3 search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search classmates"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          {/* <button onClick={handleSearch}>Search</button> */}
        </div>
        </div>
        
        <div className="profile-container">
          {dummyData.map(profile => (
            
            <div key={profile.id} className="col-md-2">
              {/* {console.log(profile)} */}
              <Profile
                key={profile.id}
                data={profile}
                isHighlighted={searchTerm && profile.name.toLowerCase().includes(searchTerm.toLowerCase())}
              />
            </div>

          ))}
        </div>
      </div>

    </div>

  );
};


export default Class;
