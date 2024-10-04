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
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
        <div className="flex gap-5 mt-5 bg-slate-100 p-4 rounded-t-lg">
          {/* <img className="mask mask-squircle w-12 h-12" src={user?.photoURL} alt="" />
          <h2>{user?.displayName}</h2> */}
        </div>
      
        <figure className="px-10 pt-10">
          <img src={qr.photo} alt="Product" className="rounded-xl" />
        </figure>
      
        <div className="card-body items-center text-center">
          <h2 className="card-title">{qr.name}</h2>
          <h2 className="card-title font-mono text-slate-500">{qr.title}</h2>
          <div className="mt-4 space-y-2">
            <h2 className="text-sm">Brand Name: {qr.brand}</h2>
            <h2 className="text-sm">Date Posted: {new Date(qr.createdAt).toLocaleDateString()}</h2>
          </div>
          <h2 className="font-mono text-sm text-slate-700 mt-5">Alteration Reason: {qr.reason}</h2>
          <h2 className="font-bold">Recommendation Count: {qr.recommendationCount}</h2>
        </div>
      
        <div className="mt-8 p-5 bg-slate-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-5">Add A Recommendation</h2>
          <form onSubmit={handleAddRecommendation} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Recommendation Title"
              value={newRecommendation.title}
              onChange={handleInputChange}
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="productName"
              placeholder="Recommended Product Name"
              value={newRecommendation.productName}
              onChange={handleInputChange}
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="productImage"
              placeholder="Recommended Product Image URL"
              value={newRecommendation.productImage}
              onChange={handleInputChange}
              required
              className="input input-bordered w-full"
            />
            <textarea
              name="reason"
              placeholder="Recommendation Reason"
              value={newRecommendation.reason}
              onChange={handleInputChange}
              required
              className="textarea textarea-bordered w-full"
            />
            <button type="submit" className="btn btn-primary w-full mt-2">Add Recommendation</button>
          </form>
        </div>
      
        <div className="mt-8 mb-5">
          <h2 className="text-2xl font-bold text-center">All Recommendations</h2>
          {recommendations.length > 0 ? (
            recommendations.map(rec => (
              <div key={rec._id} className="card w-full bg-base-100 shadow-md mt-2">
                <div className="card-body">
                  <h2 className="card-title">{rec.title}</h2>
                  <p className="text-sm"><strong>Product Name:</strong> {rec.productName}</p>
                  <p className="text-sm"><strong>Reason:</strong> {rec.reason}</p>
                  <p className="text-sm"><strong>Recommender:</strong> {rec.recommenderName} ({rec.recommenderEmail})</p>
                  <p className="text-sm"><strong>Date:</strong> {new Date(rec.createdAt).toLocaleString()}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No recommendations yet.</p>
          )}
        </div>
      </div>
      
    );
};

export default QueryDetails;