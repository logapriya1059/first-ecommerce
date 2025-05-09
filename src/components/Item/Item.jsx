import React from 'react'
import "./Item.css"

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item(props) {
  // const navigate = useNavigate();
  // const handleGoCategory = () => {
  //   navigate("/product")

  // }




  return (

    <Link to={`/product/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Card
      style={{ width: '18rem' }}
      className=" card shadow-lg shadow-sm rounded-4 border-0 overflow-hidden"

      key={props.id}
    >

      <Card.Img
         onClick={window.scrollTo(0,0)}
        variant="top"
        src={props.image}
        style={{
          height: "250px",           // Keeps uniform card size
          width: '100%',
          objectFit: 'contain',      // Shows full image, no cropping
          padding: '10px',           // Optional: adds spacing around image
          backgroundColor: '#f8f9fa',// Light background behind transparent images
          borderBottom: '1px solid #eee',
          borderRadius: '1rem 1rem 0 0' // Optional: rounded top edges

        }}
      />


      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="fw-bold fs-5 text-dark">{props.name}</Card.Title>
        <Card.Text className="text-uppercase text-success fw-semibold small mb-2">
          {props.category}
        </Card.Text>

        <div className="mb-3">
          <Card.Text className="mb-0">
            <span className="fw-semibold text-dark">Price: </span>
            <span className="text-primary">${props.new_price}</span>
          </Card.Text>
          {props.old_price && (
            <Card.Text className="text-decoration-line-through text-muted small">
              ${props.old_price}
            </Card.Text>
          )}
        </div>

        {/* <Button variant="dark" className="mt-auto w-100 " onClick={handleGoCategory}>
          Go ShopCategory

        </Button> */}
      </Card.Body>
    </Card>
    </Link>


  );
}

export default Item;



