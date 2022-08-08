import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Col, Row } from 'react-bootstrap';

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await Axios.post('/api/users/signup', {
        firstname,
        lastname,
        email,
        password,
        phoneNumber,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container">
      <Helmet>
        <title>Inscription</title>
      </Helmet>
      <h1 className="my-3">Créer un compte</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="lastname">
          <Row>
            <Col>
              <Form.Label>Nom (*)</Form.Label>
              <Form.Control
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </Col>
            <Col>
              <Form.Label>Prénom (*)</Form.Label>
              <Form.Control
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email (*)</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Mot de passe (*)</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirmer le mot de passe (*)</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Numéro de téléphone</Form.Label>
          <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} />
        </Form.Group>

        <div className="mb-3">
          <Button type="submit" className="button-form">
            Créer mon compte
          </Button>
        </div>
        <div className="mb-3">
          Déjà un compte ?{' '}
          <Link to={`/signin?redirect=${redirect}`}>Se connecter</Link>
        </div>
      </Form>
    </Container>
  );
}
