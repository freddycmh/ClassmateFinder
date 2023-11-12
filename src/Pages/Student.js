import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import '../Style/Student.css'
const Student = () => {
    const { studentData } = useParams();
    console.log(studentData)
    const data = JSON.parse(studentData);

    // Default profile picture URL
    const defaultImageUrl = 'https://img.icons8.com/material-rounded/1921/00000/user-male-circle.png';

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(data.email)
            .then(() => {
                // Show a notification after a short delay
                setTimeout(() => {
                    alert('Email copied to clipboard!');
                }, 100);
            })
            .catch((error) => {
                console.error('Error copying to clipboard:', error);
                alert('Error copying to clipboard. Please try again.');
            });
    };

    return (
        <div>
            <Header />
            <div className="container mt-4 mx-auto">

                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={defaultImageUrl} alt="Profile" className="img-fluid rounded-circle profile-picture" />
                        </div>
                        <div className="bio-box mt-3">
                            <div className="bio-label">Bio:</div>
                            <div className="bio-data">
                                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8 mt-5 offset-md-1">
                        <div className="info-box">
                            <div className="info-data name">{data.name}</div>
                        </div>
                        <div className="info-box">
                            <div className="info-data y-o-s">{data.yearOfStudy}</div>
                        </div>
                        <div className="info-major">
                            {data.major ? (<div className="info-major-exists">
                                <div className="info-label">Major:</div>
                                <div className="info-box">
                                    <div className="info-data">{data.major}</div>
                                </div>
                            </div>) : null}
                        </div>
                        <div className="info-label">Email:</div>
                        <div className="info-box position-relative">
                            <div className="info-data">{data.email}</div>

                            <img
                                style={{ width: '30px', height: '30px', marginRight: '20px' }} // Adjust the size as needed
                                src="https://img.icons8.com/badges/48/copy.png"
                                alt="copy"
                                title="Copy Email"
                                className="copy-icon position-absolute end-0 top-50 translate-middle-y" // Adjust the margins as needed
                                onClick={handleCopyToClipboard}
                            />
                        </div>
                    </div>
                </div>
                <div className="connect-section mt-4">
                    <h4>Connect:</h4>
                    <div className="social-images">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/fluency/96/facebook-new.png" alt="facebook-new" className="social-image" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/fluency/96/instagram-new.png" alt="instagram-new" className="social-image" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img width="96" height="96" src="https://img.icons8.com/fluency/96/twitterx--v1.png" alt="twitterx--v1" className="social-image" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Student;