import React from 'react'
import "./NewCollection.css"
import Item from '../Item/Item'
import DataContext from '../../Context/ShopContext'
import { useContext } from 'react'
// import useFetch2 from '../CustomHook/Usefetch2'


const NewCollection = () => {
    
    
        // let { collection, error, isLoading } = useFetch2("http://localhost:5000/collection");
        
        let { allproduct, error, isLoading } = useContext(DataContext);
        const getRandomProducts = (products, count) => {
          // Shuffle the array using sort and Math.random
          const shuffled = [...products].sort(() => 0.5 - Math.random());
          return shuffled.slice(0, count);
        };
        const randomProducts = getRandomProducts(allproduct, 12);

        
        if (isLoading) {
          return (
            <div className="text-center my-5">
              <h1>Loading...</h1>
            </div>
          );
        }
      
        if (error) {
          return (
            <div className="text-center my-5 text-danger">
              <h4>Error: {error.message || "Something went wrong."}</h4>
            </div>
          );
        }
  return (
    <div className="popular">
      <h1 className="display-6 fw-medium text-center mt-5">NEW COLLECTIONS</h1>
      <hr className='hr' />
      {randomProducts.length!==0 &&

      <div className='container-fluid '>
        <div className='row'>
          {randomProducts.map((item, i) => (
            <div key={i} className=' col-sm-10 col-md-6 col-lg-3 d-flex justify-content-center mb-4'>
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                category={item.category}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ))}
          
        </div>
      </div>
    }
      
    </div>
    
  )

}

export default NewCollection