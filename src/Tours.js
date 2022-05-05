import React from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {
    return (
        <div className="container">
            <div className="title">
                <h1 className="text-center display-1">My Tours</h1>
                <div className="underline mt-4"></div>
            </div>
            <div className="tours">
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} />;
                })}
            </div>
            
        </div>
    );
};

export default Tours;