import React, { useContext } from 'react';
import './Popular.css';
import Item from '../Item/Item';
import DataContext from '../../Context/ShopContext';

const Popular = () => {
  const { allproduct, error, isLoading } = useContext(DataContext);

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
        <h4>Error: {error.message || 'Something went wrong.'}</h4>
      </div>
    );
  }

  const womenProducts = Array.isArray(allproduct)
    ? allproduct.filter(item => item.category === 'women').slice(0, 4)
    : [];

  return (
    <div className="popular">
      <h1 className="display-6 fw-medium text-center mt-5">POPULAR IN WOMEN</h1>
      <hr className="hr" />

      {womenProducts.length !== 0 && (
        <div className="container-fluid">
          <div className="row">
            {womenProducts.map((item, i) => (
              <div key={i} className="col-sm-10 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
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
      )}
    </div>
  );
};

export default Popular;


