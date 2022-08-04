import axios from 'axios';
import { useEffect, useReducer } from 'react';
import {
  Card,
  Col,
  ListGroup,
  Row,
  Badge,
  ListGroupItem,
  Button,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logger from 'use-reducer-logger';
import Rating from '../components/Rating';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    product: [],
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAILED', payload: err.message });
      }
    };
    fetchData();
  }, [slug]);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {' '}
              <title>{product.name}</title>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              Description produit : <p>{product.description}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Prix : {product.price} €</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Prix :</Col>
                    <Col>{product.price} €</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Disponibilité :</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success"> En stock</Badge>
                      ) : (
                        <Badge bg="danger">Indisponible</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <div className="d-grid">
                      <Button variant="flush">Ajouter au panier</Button>
                    </div>
                  </ListGroupItem>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default ProductScreen;
