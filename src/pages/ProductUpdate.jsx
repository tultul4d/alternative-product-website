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
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
    <h3 className="text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-800">
      Update Info for {loadedProduct?.name}
    </h3>

    <form onSubmit={handleUpdate} className="space-y-6">
      <div>
        <label htmlFor="name" className="block  text-gray-700 font-semibold mb-2">
          Name:
        </label>
        <input
          type="text"
          name="name"
          defaultValue={loadedProduct?.name}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
          Date:
        </label>
        <input
          type="datetime"
          name="date"
          defaultValue={loadedProduct?.createdAt}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="brand" className="block text-gray-700 font-semibold mb-2">
          Brand:
        </label>
        <input
          type="text"
          name="brand"
          defaultValue={loadedProduct?.brand}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
          Title:
        </label>
        <input
          type="text"
          name="title"
          defaultValue={loadedProduct?.title}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-gray-700 font-semibold mb-2">
          Reason:
        </label>
        <input
          type="text"
          name="reason"
          defaultValue={loadedProduct?.reason}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mt-6 text-center">
        <input
          type="submit"
          value="Update"
          className="btn bg-slate-600 text-yellow-50 py-2 px-6 rounded-md  focus:outline-none cursor-pointer"
        />
      </div>
    </form>
  </div>
</div>

    );
};

export default ProductUpdate;