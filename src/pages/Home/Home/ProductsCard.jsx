import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const ProductsCard = ({product}) => {
    const {name, photo} = product;
    const {user} = useContext(AuthContext)
    return (
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
          <p>{user?.email}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ProductsCard;
