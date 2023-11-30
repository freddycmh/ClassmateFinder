import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import SocialCard from '../Components/SocialCard';
import '../Style/Student.css'
const Student = () => {
    const { studentData } = useParams();
    console.log(studentData)
    const data = JSON.parse(studentData);
    const socialName = data.name.replace(/\s+/g, '').toLowerCase();

    const facebookName = "@" + socialName + "fbtest";
    const instagramName = "@" + socialName + "instatest";
    const xName = "@" + socialName + "xtest";
    const gitHubName = "@" + socialName + "gittest";
    const discordName = "@" + socialName + "discordtest";
    const whatsappName = "@" + socialName + "whatsapptest"

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


                    </div>
                    <div className="col-md-8 mt-5 offset-md-1">
                        <div className="info-box">
                            <div className="info-data name">{data.name}</div>
                            <div className="info-data y-o-s">{data.yearOfStudy}</div>
                            {data.major ? (<div className="info-major-exists">

                                <div className="info-data">{data.major}</div>

                            </div>) : null}
                            <div className="position-relative">
                                <div className="info-data">
                                    <div className="info-label">BC email:</div>
                                    {data.email}
                                    <img
                                        style={{ width: '30px', height: '30px', marginRight: '20px', marginLeft: '15px' }} // Adjust the size as needed
                                        src="https://img.icons8.com/badges/48/copy.png"
                                        alt="copy"
                                        title="Copy Email"
                                        className="copy-icon" // Adjust the margins as needed
                                        onClick={handleCopyToClipboard}
                                    />
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="bio-box border-dark p-4 rounded">
                            <div className="bio-label h4 mb-3">Bio:</div>
                            <div className="bio-data">
                                <p className="lead" style={{ fontSize: '18px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="connect-section mt-4">
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
                </div> */}

                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="connect-section text-center">
                            <div className="connect-header text-black p-2 rounded">
                                <h4 className="display-6">Connect:</h4>
                            </div>
                            <div className="connect-border border border-info-subtle p-3 rounded mt-3">
                                <div className="row">
                                    <SocialCard
                                        platform="on Facebook"
                                        username={facebookName}
                                        link="https://www.facebook.com/"
                                        imglink="https://wallpapercave.com/wp/wp2638364.jpg"

                                    />
                                    <SocialCard
                                        platform="on Instagram"
                                        username={instagramName}
                                        link="https://www.instagram.com/"
                                        imglink="https://wallpapercave.com/wp/wp4667551.jpg"
                                    />
                                    <SocialCard
                                        platform="on X"
                                        username={xName}
                                        link="https://twitter.com/"
                                        imglink="https://images.hdqwalls.com/wallpapers/twitter-x-fe.jpg"
                                    />

                                    <SocialCard
                                        platform="on Git"
                                        username={gitHubName}
                                        link="https://github.com/"
                                        imglink="https://cdn.nerdschalk.com/wp-content/uploads/2021/09/git-logo-759x427.png"
                                    />

                                    <SocialCard
                                        platform="on Discord"
                                        username={discordName}
                                        link="https://discord.com/login"
                                        imglink="https://cdn.oneesports.gg/cdn-data/wp-content/uploads/2020/03/Discord-1024x576.jpg"
                                    />

                                    <SocialCard
                                        platform="on WhatsApp"
                                        username={whatsappName}
                                        link="https://web.whatsapp.com/"
                                        imglink="https://wallpapercave.com/wp/wp12684224.jpg"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Student;