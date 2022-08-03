import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import logger from 'use-reducer-logger';
import axios from 'axios';

//import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  //For Use Reducer
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    products: [],
    error: '',
  });

  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAILED', payload: err.message });
      }
      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Produits du moment</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>{product.price}</strong>€
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
