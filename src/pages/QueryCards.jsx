import { useLoaderData } from "react-router-dom";
import Query from "./Query";
import { useEffect, useState } from "react";




const QueryCards = () => {
  const query = useLoaderData();
  const [search, setSearch] = useState('');
  const [layout, setLayout] = useState('grid-cols-3');
  // const [filteredQueries, setFilteredQueries] = useState(allQueries);

  useEffect(() => {
    
    // Filter queries based on search input
    const result = query.filter(query => 
      query.name.toLowerCase().includes(search.toLowerCase())
    );
   console.log(result);
  }, [search,query]);

  const handleSearch = e => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  }
  
  const handleLayoutChange = (layout) => {
    setLayout(layout);
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
          <div className="mt-4">
          <button className="btn mr-2" onClick={() => handleLayoutChange('grid-cols-1')}>1 Column</button>
          <button className="btn mr-2" onClick={() => handleLayoutChange('grid-cols-2')}>2 Columns</button>
          <button className="btn" onClick={() => handleLayoutChange('grid-cols-3')}>3 Columns</button>
        </div>
          <div className={`grid ${layout} gap-5 mt-5`}>
          {
           
            query.map(qr => <Query key={qr.id} qr={qr}></Query> ) 
          }
          </div>
        </div>
    );
};
// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5
export default QueryCards;