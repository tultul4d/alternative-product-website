import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QueryCard from "../QueryCard";
import { data } from "autoprefixer";


const MyQueriers = () => {
  const [queries, setQueries] = useState([]);
  const [layout, setLayout] = useState('grid-cols-1');

  useEffect(() => {
    // Fetch user's queries
    fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setQueries(data))
        .catch(error => console.error('Error fetching queries:',error));
}, []);

const handleLayoutChange = (columns) => {
    setLayout(`grid-cols-${columns}`);
  };

 const handleViewDetails = () => {

 }
       

    const handleUpdate = () => {
      //  fetch(`http://localhost:5000/product/${_id}`,
      //   {
      //     method: 'DELETE'
      //   }
      //  )
      //  .then(res => res.json())
      //  .then(data => {
      //   console.log(data);
      //  })
    };

    const handleDelete = (queryId) => {
        if (window.confirm('Are you sure you want to delete this query?')) {
            // Delete query logic
            fetch(`http://localhost:5000/product/${queryId}`, {
                method: 'DELETE'
            })
            .then(() => {
                // Update the state to remove the deleted query
                setQueries(queries.filter(query => query._id !== queryId));
            })
            .catch(error => console.error('Error deleting query:', error));
        }
    };

    return (
        <div>
          {/* banner div */}
          <div className="hero mt-5 rounded-lg" style={{backgroundImage: 'url(https://i.ibb.co/ncV2VJN/view-computer-monitor-display.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-sm rounded-lg my-10">
      <h1 className="mb-5 text-xl font-semibold">A Guide to Features, Performance, and Innovation</h1>
      <p className="mb-5">Their commitment to quality, innovation, and customer satisfaction makes them a reliable choice for many users</p>
      <Link to="/addqueries"><button className="btn btn-primary">Add Query Page</button></Link>
    </div>
  </div>
</div>
         {/* banner div end */}    
            
           
         <div className="queries-section">
         <div className="flex justify-center space-x-4 mt-5">
            <button className="btn btn-primary" onClick={() => handleLayoutChange(1)}>1 Column</button>
            <button className="btn btn-primary" onClick={() => handleLayoutChange(2)}>2 Columns</button>
            <button className="btn btn-primary" onClick={() => handleLayoutChange(3)}>3 Columns</button>
          </div>
                {queries.length > 0 ? (
                    <div className={`grid ${layout} gap-5`}>
                        {queries.map(query => (
                            <QueryCard
                                key={query._id} 
                                query={query}
                                onViewDetails={handleViewDetails}
                                onUpdate={handleUpdate}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="no-queries">
                        <p>No queries found. Click the button below to add a query.</p>
                        <button className="btn-add">Add Query</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyQueriers;