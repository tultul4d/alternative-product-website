

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mt-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/64mSQfJ/top-view-laptop-with-white-background.jpg" className="w-full rounded-lg" />
          <div className="absolute rounded-lg h-full flex items-center   left-0 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)] ">
            <div className='text-white space-y-7 pl-4 w-1/2 ml-12 '>
              <h2 className='lg:text-6xl text-white lg:font-bold'>Laptops</h2>
              <p>A laptop computer or notebook computer, also known as a laptop or notebook, is a small, portable personal computer </p>
              <div>
              <button className="btn btn-active btn-primary mr-5">Discover More</button>
             
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide4" className="btn btn-circle bg-slate-400 mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-slate-400">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/ncV2VJN/view-computer-monitor-display.jpg" className="w-full rounded-lg" />
          <div className="absolute h-full flex items-center   left-0 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)] ">
            <div className='text-white space-y-7 pl-4 w-1/2 ml-12 '>
              <h2 className='lg:text-6xl text-white lg:font-bold'>Television</h2>
              <p>Television, often abbreviated to TV, is a telecommunication medium used for transmitting moving images and sound. </p>
              <div>
              <button className="btn btn-active btn-primary mr-5">Discover More</button>
             
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/ncV2VJN/view-computer-monitor-display.jpg" className="w-full rounded-lg" />
          <div className="absolute h-full flex items-center   left-0 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)] ">
            <div className='text-white space-y-7 pl-4 w-1/2 ml-12 '>
              <h2 className='lg:text-6xl text-white lg:font-bold'>Television</h2>
              <p>Television, often abbreviated to TV, is a telecommunication medium used for transmitting moving images and sound. </p>
              <div>
              <button className="btn btn-active btn-primary mr-5">Discover More</button>
             
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/mXgCDtZ/man-plugging-ethernet-cable-wireless-router.jpg" className="w-full rounded-lg" />
          <div className="absolute h-full flex items-center   left-0 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)] ">
            <div className='text-white space-y-7 pl-4 w-1/2 ml-12 '>
              <h2 className='lg:text-6xl text-white lg:font-bold'>Router</h2>
              <p>A router is a physical device typically equipped with multiple ports for connecting various devices via Ethernet cables. </p>
              <div>
              <button className="btn btn-active btn-primary mr-5">Discover More</button>
             
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;
