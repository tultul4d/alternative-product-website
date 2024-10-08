
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';

const Query = ({qr, search, handleGridChange}) => {
    const {_id,name, photo, brand, title, createdAt, reason} = qr
    const {user} = useContext(AuthContext)
    return (
       <div >
        
        
        
         <div className="card w-96 bg-base-100 shadow-xl">
         
        <div className="flex gap-5 mt-5">
   <img className="mask mask-squircle w-12 h-12" src={user?.photoURL} alt="" />
       <h2>{user?.displayName}</h2>
    
   </div>
   <figure className="px-10 pt-10">
     <img src={photo} alt="Shoes" className="rounded-xl" />
   </figure>
  
   <div className="card-body items-center text-center">
     <h2 className="card-title">{name}</h2>
     <h2 className="card-title font-mono text-slate-500">{title}</h2>
     <div className=" mt-5 gap-10 ">
       <h2 className="text-sm ">Brand Name:{brand}</h2>
       <h2 className="text-sm ">Date Posted: {createdAt}</h2>
     </div>
     {/* <h2 className=" font-mono text-sm text-slate-700 mt-5"> Alternation Reason: {reason}
     </h2> */}
     <h2 className='font-mono'>Recommendation Count: 
     </h2>
     <div className='flex justify-between'>
     <Link to={`/recommend/${_id}`}><button className='btn bg-slate-700 text-yellow-50'>Recommend</button></Link>
     <Link to={`/details/${_id}`}><button className='btn bg-slate-700 text-yellow-50 '>Query Details</button></Link>
     </div>
   </div>
 </div>
   
       </div>
   




    )
};

export default Query;