import React, { useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';


const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  useEffect(() => {
       fetchTours();
  }, []);
   
  if (loading) { 
    return (
        <Loading/>
    );
  };

  //Refresh when no tours left
  if (tours.length == 0) { 
    return (
      <div className="container text-center">
        <h2 className="mt-5">No Tours left</h2>
        <button className='btn btn-primary mt-5' onClick={() => fetchTours()}>Refresh</button>
      </div>
    )
  }

  return (
    <Tours tours={tours} removeTour={removeTour}/>
    );
}

export default App;
