import { data } from "autoprefixer";
import { useLoaderData } from "react-router-dom";


const ProductUpdate = () => {
    const loadedProduct = useLoaderData();
    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        console.log(name, date);
        const updated = {name, date}
        
        fetch(`http://localhost:5000/product/${loadedProduct._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
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
                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default ProductUpdate;