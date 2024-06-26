
import { useEffect } from "react";
import { useState } from "react";
import ProductsCard from "../ProductsCard";




const Products = () => {

    const [products, setProduct] = useState([]);
    

    useEffect( () =>{
         fetch('https://product-website-server.vercel.app/product')
         .then(res => res.json())
         .then(data => setProduct(data))
         .catch(error => console.error('error fetching',error))
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-3xl">Best Products</h3>
                <p>product{products.length}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <ProductsCard key={product._id}
                    product={product}
                    ></ProductsCard>)
                }
        
            </div>
        </div>
    );
};

export default Products;