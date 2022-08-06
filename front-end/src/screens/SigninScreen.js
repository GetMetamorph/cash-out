import { Button, Container, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  //Vérifie si le redirect est dans l'url, si oui appliquer le redirect sinon retour a la home page
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className="small-container">
      <Helmet>
        <title>Se connecter</title>
      </Helmet>
      <h1 className="my-3">Connexion</h1>

      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label> Email </Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label> Mot de passe </Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Se connecter</Button>
        </div>
        <div className="mb-3">
          Pas de compte ?{' '}
          <Link to={`/signup?redirect=${redirect}`}>S'inscrire</Link>
        </div>
      </Form>
    </Container>
  );
}
