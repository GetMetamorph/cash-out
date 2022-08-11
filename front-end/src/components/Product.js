import axios from 'axios';
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);

    if (data.countInStock < quantity) {
      window.alert('Le produit est en rupture de stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top product-image"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title className="productTitle">{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>Prix : {product.price} €</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Indisponible
          </Button>
        ) : (
          <Button onClick={() => addCartHandler(product)}>
            Ajouter au panier
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;
