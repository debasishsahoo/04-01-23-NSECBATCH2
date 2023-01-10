import React from 'react';

function Back(props) {
    return (
        <>
            <div className={props.no}>
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$2.95/mo*</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Select</a>
                </div>
            </div>
        </>
    );
}

export default Back;