// src/Class.js
import React, { useState } from 'react';
import Profile from '../Components/Profile';
import Header from "../Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import '../Style/Class.css';

const dummyData = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Jane' },
  { id: 5, name: 'John' },
  { id: 6, name: 'Jane' },
  { id: 7, name: 'John' },
  { id: 8, name: 'John' },
  // Add more dummy data as needed
];



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
                name="Prof. Bob"
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
              <Profile
                key={profile.id}
                name={profile.name}
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
