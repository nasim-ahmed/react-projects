import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour}) => {
    return (
        <div className="container">
            <div className="title">
                <h1 className="text-center display-1">Explore Places</h1>
                <div className="underline mt-4"></div>
            </div>
            <div className="tours">
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}/>;
                })}
            </div>
        </div>
    );
};

export default Tours;