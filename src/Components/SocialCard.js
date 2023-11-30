import React from 'react';

const SocialCard = ({ platform, username, link, imglink }) => (
    <div className="col-md-4 mb-3 whole-card">
        <a href={link} target="_blank" rel="noopener noreferrer" className="social-card-link">
            <div className="card social-card " style={{ backgroundImage: `url(${imglink})` }}>

                <div className="card-body social-card-body">
                    <div className="social-card-info-body">
                        <h5 className="social-card-title no-underline">{username}</h5>
                        <p className="social-card-text no-underline">{platform}</p>
                    </div>

                </div>
            </div>
        </a>
    </div>
);

export default SocialCard;
