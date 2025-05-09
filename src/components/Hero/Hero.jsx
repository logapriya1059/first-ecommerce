// import React from 'react'
// import heroImage from "/Assets/background.avif"




// const Hero = () => {
//   return (
//     <div>
//       <div className='bg-image  p-5 '
//         style={{
//           backgroundImage: `url(${heroImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           // minWidth: "80%",
//           // minHeight: "100vh"
//           width:"100%",
//           height:"auto"
//         }} >
//           <div className="container">
//             <div className="row py-5">
//               <div className="col-md-8">
//               <div className="left-alignment ">
//           <h3 className="lead">NEW ARRIVALS ONLY</h3>
//           <div >
//             <div >
//               <p className="display-1">new   👋🏼</p>
//               {/* <img src={handIcon} alt="" /> */}
//             </div>
//             <p className="display-1">collections</p>
//             <p className="display-1">for everyone</p>
//             <p className="lead">Your one-stop shop for everything fashion  </p>
//             <div >
//               <div className="display-6 fw-small">Latest Collection</div>
//               <button className="btn btn-success mt-5 btn-lg">Shop Now</button>


//             </div>


//           </div>

//         </div>


//               </div>
//             </div>

//           </div>






       

//       </div>
//     </div>
//   )
// }

// export default Hero
import React from 'react';
import heroImage from '/Assets/background.avif';

const Hero = () => {
  return (
    <div>
      <div
        className="p-5 d-flex align-items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '100vh', // Make it take full screen height
        }}
      >
        <div className="container">
          <div className="row py-5">
            <div className="col-md-8">
              <div className="left-alignment text-dark">
                <h3 className="lead">NEW ARRIVALS ONLY</h3>
                <div>
                  <p className="display-1">new 👋🏼</p>
                  <p className="display-1">collections</p>
                  <p className="display-1">for everyone</p>
                  <p className="lead">
                    Your one-stop shop for everything fashion
                  </p>
                  <div>
                    <div className="display-6">Latest Collection</div>
                    <button className="btn btn-success mt-5 btn-lg">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
