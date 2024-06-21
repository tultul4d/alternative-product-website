import { Link } from "react-router-dom";


const QueryCard = ({query, onViewDetails, onUpdate, onDelete }) => {
    return (
        <div className="query-card mt-10">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={query.photo}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{query.name}</h2>
    <p>{query.title}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${query._id}`}><button  onClick={() => onViewDetails(query._id)} className="btn-primary bg-slate-600 text-white rounded-sm">View Details </button></Link>
    <Link to={`/update/${query._id}`}> <button onClick={() => onUpdate(query._id)} className="btn-primary bg-slate-600 text-white rounded-sm">Update</button></Link>
    <button onClick={() => onDelete(query._id)} className="btn-primary rounded-sm bg-slate-600 text-white ">Delete</button>
    </div>
  </div>
</div>
        {/* <p>{new Date(query.timestamp).toLocaleString()}</p> */}
        <div className="card-actions">
            
         
            
        </div>
    </div>
);
};

export default QueryCard;