import { useLoaderData } from "react-router-dom";


const QueryDetails = () => {
    const qr = useLoaderData();
    console.log(qr);

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
     <h2>recommendationCount: 
     </h2>
     
   </div>
 </div>
    );
};

export default QueryDetails;