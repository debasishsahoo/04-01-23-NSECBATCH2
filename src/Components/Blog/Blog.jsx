import React from 'react';
import './Blog.css'
function Blog(props) {


    return (
        <>

            <div className="fond"> <span className="s1">blog </span><span className="s2">card</span></div>
            <div className="card">
                <div className="thumbnail"><img className="left" src={props.blogimg} /></div>
                <div className="right">
                    <h1>{props.headline}</h1>
                    <div className="author"><img src={props.authorImg} />
                        <h2>{props.author}</h2>
                    </div>
                    <div className="separator"></div>
                    <p>Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...</p>
                </div>
                <h5>12</h5>
                <h6>JANUARY</h6>
                <ul>
                    <li><i className="fa fa-eye fa-2x"></i></li>
                    <li><i className="fa fa-heart-o fa-2x"></i></li>
                    <li><i className="fa fa-envelope-o fa-2x"></i></li>
                    <li><i className="fa fa-share-alt fa-2x"></i></li>
                </ul>
                <div className="fab"><i className="fa fa-arrow-down fa-3x"> </i></div>
            </div>
        </>
    );
}

export default Blog;