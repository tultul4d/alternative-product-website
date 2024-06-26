import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const RecommendationsForMe = () => {
    const { user } = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://product-website-server.vercel.app/commend?userId=${user.id}`)
                .then(res => res.json())
                .then(data => setRecommendations(data))
                .catch(error => console.error('Error fetching recommendations:', error));
        }
    }, [user]);

    if (!user) {
        return <div>Please log in to see your recommendations.</div>;
    }
    return (
        <div>
        <h2>Recommendations For Me</h2>
        <table className="table-auto w-full">
            <thead>
                <tr>
                    {/* <th>Query ID</th>
                    <th>Query Title</th> */}
                    {/* <th>Product Name</th> */}
                    <th>Recommender Name</th>
                    <th>Recommender Email</th>
                    <th>Reason</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {recommendations.map((rec, index) => (
                    <tr key={index}>
                        {/* <td>{rec.queryId}</td>
                        <td>{rec.queryTitle}</td> */}
                        {/* <td>{rec.productName}</td> */}
                        <td>{rec.recommenderName}</td>
                        <td>{rec.recommenderEmail}</td>
                        <td>{rec.reason}</td>
                        <td>{new Date(rec.createdAt).toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default RecommendationsForMe;