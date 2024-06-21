import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { data } from "autoprefixer";
import RecommendRow from "./RecommendRow";


const Recommendations = () => {
    const {user} = useContext(AuthContext);
    const [recommend, setRecommend] = useState([]);


    const url = `http://localhost:5000/commend?email=${user?.email}`;
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setRecommend(data))
    }, []);

    const handleDelete = id => {
        const proceed = confirm('Are yor sure you want to delete') ;
        if(proceed){
            fetch(`http://localhost:5000/commend/${id}` , {
                method: 'DELETE'
            })  
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0) alert('delete succesfuly');
                const remaining = recommend.filter(re => re._id !==id);
                setRecommend(remaining);
            })
        }
    }
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Products Name</th>
        <th>Email</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        recommend.map(re => <RecommendRow key={re._id} re={re} handleDelete={handleDelete}></RecommendRow>)
     }
      
      
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Recommendations;