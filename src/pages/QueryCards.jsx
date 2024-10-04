import { useLoaderData } from "react-router-dom";
import Query from "./Query";
import { useEffect, useState } from "react";

const QueryCards = () => {
  const query = useLoaderData(); // Assumed to be fetching all data from the server
  const [search, setSearch] = useState('');
  const [layout, setLayout] = useState('grid-cols-3');
  const [filteredQueries, setFilteredQueries] = useState(query);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Number of queries per page
  const totalPages = Math.ceil(filteredQueries.length / itemsPerPage);

  useEffect(() => {
    // Filter queries based on search input
    const result = query.filter(q => 
      q.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredQueries(result);
    setCurrentPage(1); // Reset to the first page when search changes
  }, [search, query]);

  // Handle search form submit
  const handleSearch = e => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  }
  
  // Handle layout change (1, 2, or 3 columns)
  const handleLayoutChange = (layout) => {
    setLayout(layout);
  }

  // Get the current page's data
  const currentQueries = filteredQueries.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="">
      <div className="lg:ml-96 md:ml-96 ">
        <h2 className='ml-32 lg:text-4xl font-bold mb-10'>All Queries</h2>
        <form onSubmit={handleSearch}>
          <input type="text" name="search" id="" placeholder="Search..." />
          <input type="submit" className="btn bg-slate-600 text-yellow-50" value="Search" />
        </form>
      </div>
      
      {/* Layout toggle buttons */}
      <div className="mt-4">
        <button className="btn mr-2" onClick={() => handleLayoutChange('grid-cols-1')}>1 Column</button>
        <button className="btn mr-2" onClick={() => handleLayoutChange('grid-cols-2')}>2 Columns</button>
        <button className="btn" onClick={() => handleLayoutChange('grid-cols-3')}>3 Columns</button>
      </div>

      {/* Grid of queries */}
      <div className={`grid ${layout} gap-5 mt-5`}>
        {
          currentQueries.map(qr => <Query key={qr.id} qr={qr}></Query>)
        }
      </div>

      {/* Pagination controls */}
      <div className="mt-4 mb-5 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index} 
            className={`btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QueryCards;
