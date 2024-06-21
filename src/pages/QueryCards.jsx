import { useLoaderData } from "react-router-dom";
import Query from "./Query";
import { useState } from "react";




const QueryCards = () => {
  const query = useLoaderData();
  const [search, setSearch] = useState('');

  const handleSearch = e =>{
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setSearch(searchText);
  }
  console.log(query);
    return (
        <div className="">
           <div className="lg:ml-96 md:ml-96 ">
          <h2 className='ml-32 lg:text-4xl font-bold'>All Query</h2>
          <form onSubmit={handleSearch}>
            <input type="text" name="search" id="" />
            <input type="submit" value="Search" />
          </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            query.map(qr => <Query key={qr.id} qr={qr}></Query> )
          }
          </div>
        </div>
    );
};

export default QueryCards;