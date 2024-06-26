// import { data } from "autoprefixer";
import { useLoaderData } from "react-router-dom";


const ProductUpdate = () => {
    const loadedProduct = useLoaderData();
    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const brand = form.brand.value;
        const title = form.title.value;
        const reason = form.reason.value;
        // console.log(name, date);
        const updated = {name, date,brand, title,reason}
        
        fetch(`https://product-website-server.vercel.app/product/${loadedProduct._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)

        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
        })


    }
    return (
        <div>
            <h3>Update infomm {loadedProduct.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name"  defaultValue={loadedProduct?.name}/>
                <br />
                <input type="datetime" name="date" defaultValue={loadedProduct?.createdAt} id="" />
                <br />
                <input type="text" name="brand" defaultValue={loadedProduct?.brand} id="" />
                <br />
                <input type="text" name="title" defaultValue={loadedProduct?.title} id="" />
                <br />
                <input type="text" name="reason" defaultValue={loadedProduct?.reason} id="" />
                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default ProductUpdate;