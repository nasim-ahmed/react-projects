import React, { useState} from 'react';

const Tour = ({ id, image, info, name, price }) => {
    const [readMore, setReadMore] = useState(true);

    return (
        <div className="container">
            <div className="card">
                <img src={image} className="card-img-top" alt={name}></img>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-10">
                           <h2 className="card-title mt-4">{name}</h2>
                        </div>
                        <div className="col-sm-2">
                           <h4 className="tour-price text-center mt-4">${price}</h4>
                        </div>
                    </div>
                    
                    <p className="card-text mt-4">{readMore ? info : `${info.substring(0, 200)}...`}<button id="readMore" className="btn" onClick={() => { setReadMore(!readMore) }}>{readMore ? 'show less' : 'show more'}</button></p>
                    <div class="row">
                        <div class="col text-center">
                           <button id="not-interested" className="btn btn-primary">Not Interested</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Tour;