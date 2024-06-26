import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const Recommend = () => {
    const recommend = useLoaderData();
    const {title, name, photo,reason, queryId, queryTitle, productName, userEmail, userName } = recommend;
    const {user} = useContext(AuthContext);


    
    const handleRecommend = event =>{
        event.preventDefault();


        const form = event.target;
        const userName = form.userName.value;
        const date = form.date.value;
        const email = user?.email;
        const recommenderEmail = form.recommenderEmail.value;
        const recommenderName = form.recommenderName.value;
        
        
     // Get the current date and time
     const createdAt = new Date().toISOString()
        const order = {
            name,
            email,
            date,
            title,
            Product: photo,
            Reason: reason,
            createdAt,
            recommenderEmail,
            recommenderName,
            recommenderEmail: user?.email,
            recommenderName: user?.displayName,
            queryId,
            queryTitle,
            userEmail, // who created the query
            userName // who created the query
         
            // photo,
            // reason
        }
           // Add the current date and time
           
        // console.log(order);

        fetch('https://product-website-server.vercel.app/commend', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                alert('comment successfully')
            }
        })
        
    }

    return (
        <div>
            <h2 className="text-center font-bold text-4xl">Add A Recommendation</h2>
            {/* <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> */}
      <form onSubmit={handleRecommend} className="card-body">
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-2 gap-5 ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="userName" defaultValue={user?.displayName} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email}  className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" name="name" placeholder="Product Name" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input type="photo" name="photo" placeholder="Product Image" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Reason</span>
          </label>
          <input type="Text" name="reason" placeholder="Reason" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recommender Name</span>
                        </label>
                        <input type="text" name="recommenderName" defaultValue={user?.displayName} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recommender Email</span>
                        </label>
                        <input type="email" name="recommenderEmail" defaultValue={user?.email} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Query ID</span>
                        </label>
                        <input type="text" name="queryId" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Query Title</span>
                        </label>
                        <input type="text" name="queryTitle" defaultValue={queryTitle} className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="productName" defaultValue={productName} className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Query Creator Email</span>
                        </label>
                        <input type="text" name="userEmail" defaultValue={userEmail} className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Query Creator Name</span>
                        </label>
                        <input type="text" name="userName" defaultValue={userName} className="input input-bordered"  />
                    </div>
        </div>
        <div className="form-control mt-6">
        
          <input type="submit" value="Add Recommendation" className="btn btn-block" />
        </div>
      </form>
    </div>
//   </div>
// </div>
//         </div>
    );
};

export default Recommend;