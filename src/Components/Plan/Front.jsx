import React from 'react';

function Front(props) {
    return (
        <>
            <div className="card__side card__side--front-1">
                <div className="card__title card__title--1">
                    <i className="fas fa-paper-plane"></i>
                    <h4 className="card__heading">Basic</h4>
                </div>

                <div className="card__details">
                    <ul>
                        <li>1 Website</li>
                        <li>50 GB SSD Storage</li>
                        <li>Unmetered Bandwidth</li>
                        <li>Free SSL Certificate</li>
                        <li>1 Included Domain</li>
                        <li>1 Included Domain</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Front;