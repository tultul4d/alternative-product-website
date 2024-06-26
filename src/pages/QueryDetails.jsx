import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const QueryDetails = () => {
    const qr = useLoaderData();
    // console.log(qr);


    const { user } = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);
    const [newRecommendation, setNewRecommendation] = useState({
        title: '',
        productName: '',
        productImage: '',
        reason: ''
    });

    // Fetch recommendations for the current query
    useEffect(() => {
        fetch(`https://product-website-server.vercel.app/commend?queryId=${qr._id}`)
            .then(res => res.json())
            .then(data => setRecommendations(data))
            .catch(error => console.error('Error fetching recommendations:', error));
    }, [qr._id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecommendation({ ...newRecommendation, [name]: value });
    };

    const handleAddRecommendation = (e) => {
        e.preventDefault();

        const recommendationData = {
            ...newRecommendation,
            queryId: qr._id,
            queryTitle: qr.title,
            productName: qr.name,
            userEmail: qr.userEmail,
            userName: qr.userName,
            recommenderEmail: user.email,
            recommenderName: user.displayName,
            createdAt: new Date().toISOString(),
        };

        // Save the recommendation in the database
        fetch('https://product-website-server.vercel.app/recommendations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recommendationData),
        })
            .then(res => res.json())
            .then(data => {
                setRecommendations([...recommendations, data]);
                // Increment the recommendation count for the query
                fetch(`https://product-website-server.vercel.app/product/${qr._id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ recommendationCount: qr.recommendationCount + 1 }),
                })
                    .then(res => res.json())
                    .then(updatedQuery => {
                        // Update the query with the new recommendation count
                        qr.recommendationCount = updatedQuery.recommendationCount;
                    })
                    .catch(error => console.error('Error updating recommendation count:', error));
            })
            .catch(error => console.error('Error adding recommendation:', error));
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="flex gap-5 mt-5">
   {/* <img className="mask mask-squircle w-12 h-12" src={user?.photoURL} alt="" />
       <h2>{user?.displayName}</h2> */}
    
   </div>
   <figure className="px-10 pt-10">
     <img src={qr.photo} alt="Shoes" className="rounded-xl" />
   </figure>
  
   <div className="card-body items-center text-center">
     <h2 className="card-title">{qr.name}</h2>
     <h2 className="card-title font-mono text-slate-500">{qr.title}</h2>
     <div className=" mt-10 gap-10 ">
       <h2 className="text-sm ">Brand Name:{qr.brand}</h2>
       <h2 className="text-sm ">Date Posted: {qr.createdAt}</h2>
     </div>
     <h2 className=" font-mono text-sm text-slate-700 mt-5"> Alternation Reason: {qr.reason}
     </h2>
     <h2>Recommendation Count: {qr.recommendationCount}</h2>
     

     {/* new  */}
     
   </div>
{/* new  */}
   <div className="mt-4">
                <h2 className="text-2xl font-bold">Add a Recommendation</h2>
                <form onSubmit={handleAddRecommendation}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Recommendation Title"
                        value={newRecommendation.title}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="productName"
                        placeholder="Recommended Product Name"
                        value={newRecommendation.productName}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="productImage"
                        placeholder="Recommended Product Image URL"
                        value={newRecommendation.productImage}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="reason"
                        placeholder="Recommendation Reason"
                        value={newRecommendation.reason}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" className="btn btn-primary mt-2">Add Recommendation</button>
                </form>
            </div>
            {/*  */}
            <div className="mt-4">
                <h2 className="text-2xl font-bold">All Recommendations</h2>
                {recommendations.length > 0 ? (
                    recommendations.map(rec => (
                        <div key={rec._id} className="card w-full bg-base-100 shadow-xl mt-2">
                            {/* <figure><img src={rec.productImage} alt="Recommended Product" /></figure> */}
                            <div className="card-body">
                                <h2 className="card-title">{rec.title}</h2>
                                {/* <p><strong>Product Name:</strong> {rec.productName}</p> */}
                                {/* <p><strong>Reason:</strong> {rec.reason}</p>
                                <p><strong>Recommender:</strong> {rec.recommenderName} ({rec.recommenderEmail})</p> */}
                                <p><strong>Date:</strong> {new Date(rec.createdAt).toLocaleString()}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No recommendations yet.</p>
                )}
            </div>
 </div>
    );
};

export default QueryDetails;