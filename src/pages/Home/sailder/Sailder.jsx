

const Sailder = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-10 rounded-lg">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
    <img src="https://i.ibb.co/Swkfp55/pic.jpg" className="w-4/3 rounded-lg shadow-2xl" />
    <img src="https://i.ibb.co/6Bxg2SP/pic2.jpg" className="w-1/2 absolute right-5 top-1/2 rounded-lg border-white border-2 shadow-2xl" />
    </div>
    <div className='lg:w-1/2 space-y-5 p-4'>
        <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default Sailder;