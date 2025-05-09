import React, { useContext } from 'react';
import  DataContext from '../Context/ShopContext';
import Item from '../components/Item/Item';
import "./Css/ShopCategory.css"

const ShopCategory = (props) => {
  const { allproduct,error,isLoading } = useContext(DataContext); // Get correct context
  if(isLoading){
   return (<div>Loading...</div>)

  }
  if(error){
    return <div>{`Error: ${error.message}`}</div>
  }

  return (
    <div>
       <div className='banner'>
       <img className="banners" src={props.banner} alt="banners" />
       </div>
      

      {allproduct && allproduct.length !== 0 && (
        <div className="container-fluid">
          <div className="row">
            {allproduct.map((item, i) => (
              item.category===props.category?(
              <div
                key={i}
                className="col-sm-10 col-md-6 col-lg-3 d-flex justify-content-center mb-4"
              >
                <Item  
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  category={item.category}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  
                />
                
                
              </div>)
              :null
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center ">
  <button className="btn-secondary text-dark rounded-3 px-4 py-2 my-5 ">
    Explore
  </button>
</div>


        </div>
      )}
    </div>
  );
  
};

export default ShopCategory;

