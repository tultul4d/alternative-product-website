

const Slider = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-10 rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <div className='w-1/2 relative'>
          <img src="https://i.ibb.co/Swkfp55/pic.jpg" className="w-4/3 rounded-lg shadow-2xl" />
          <img src="https://i.ibb.co/6Bxg2SP/pic2.jpg" className="w-1/2 absolute right-5 top-1/2 rounded-lg border-white border-2 shadow-2xl" />
          </div>
          <div className='lg:w-1/2 space-y-5 p-4'>
             
            <h1 className="text-5xl font-bold">HP has diversified its product portfolio over the years.</h1>
            <p className="py-6">HP was founded on January 1, 1939, by Bill Hewlett and Dave Packard in a one-car garage in Palo Alto, California. The company initially started by producing electronic test equipment. </p>
            
            <button className="btn bg-indigo-700">All
Queries Page</button>
          </div>
        </div>
      </div>
    );
};

export default Slider;