import Swal from 'sweetalert2'


const AddQueries = () => {
    const handleAddProduct = event =>{
        event.preventDefault();


        const form = event.target;
        // const userName = form.userName.value;
        // const email = form.email.value;
        // const userName = user.displayName;
        // const email = form.email.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const title = form.title.value;
        const reason = form.reason.value;

          // Add the current date and time
          const createdAt = new Date(Date.now());
        

        const newProduct = {  name, brand, photo, title, reason, createdAt}
        console.log(newProduct);


        // send data to the server

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'proudet added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-red-200 p-24 :">
            <h2 className="text-3xl font-extrabold">Add Products</h2>
            <form onSubmit={handleAddProduct}>
                {/* from row */}
                <div className="md:flex">
                {/* <div className="form-control md:w-1/2">
                        <label className="label-text">User Name</label>
                        <label className="input-group">
                            <input type="text" name="userName" placeholder="User name" className="input input-bordered w-full" required />
                        </label>
                    </div> */}
                    {/* <div className="form-control md:w-1/2 ml-4">
                        <label className="label-text">Email</label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
                        </label>
                   </div> */}
                    
                <div className="form-control md:w-1/2">
                    <label className="label-text">product name</label>
                    <label className="input-group">
                     
                        <input type="text" name="name" placeholder="product name" className="input input-bordered w-full" />
                    </label>


                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label-text">product brand</label>
                    <label className="input-group">
                     
                        <input type="text" name="brand" placeholder="product brand" className="input input-bordered w-full" />
                    </label>


                </div>
                </div>
                {/* from row */}
                <div className="md:flex">
                    
                <div className="form-control md:w-1/2">
                    <label className="label-text">product image-url</label>
                    <label className="input-group">
                     
                        <input type="text" name="photo" placeholder="product name" className="input input-bordered w-full" />
                    </label>


                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label-text">title</label>
                    <label className="input-group">
                     
                        <input type="text" name="title" placeholder="title" className="input input-bordered w-full" />
                    </label>
                    


                </div>
                </div>

                {/* from row */}
                <div className="md:flex">
                    
                <div className="form-control md:w-1/2">
                    <label className="label-text">boycotting reason</label>
                    <label className="input-group">
                     
                        <input type="text" name="reason" placeholder="boycotting reason" className="input input-bordered w-full" />
                    </label>


                </div>
                
                </div>
                

                <input type="submit" value="add proudct " className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddQueries;
