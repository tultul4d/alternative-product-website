import { Link } from "react-router-dom";


const QueryCard = ({query, onViewDetails, onUpdate, onDelete }) => {
    return (
        <div className="query-card">
        <h4>{query.title}</h4>
        <p>{query.description}</p>
        <img src={query.photo
} alt="" />
        <p>{new Date(query.timestamp).toLocaleString()}</p>
        <div className="card-actions">
            <Link to="/details"><button onClick={() => onViewDetails(query._id)} className="btn-primary">View Details</button></Link>
           <Link to={`/update/${query._id}`}> <button onClick={() => onUpdate(query._id)} className="btn-primary">Update</button></Link>
            <button onClick={() => onDelete(query._id)} className="btn-primary">Delete</button>
        </div>
    </div>
);
};

export default QueryCard;