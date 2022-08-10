import React, { useContext, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };

    default:
      return state;
  }
};

export default function ProfileScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [lastname, setLastname] = useState(userInfo.lastname);
  const [firstname, setFirstname] = useState(userInfo.firstname);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  const [editProfile, setEditProfile] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Les mots de passe ne sont pas identique');
      return;
    }
    try {
      console.log('TRY ok');
      const { data } = await axios.put(
        '/api/users/profile',
        {
          lastname,
          firstname,
          email,
          password,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      console.log(JSON.stringify(data));
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('Profil mis à jour');
      setEditProfile(false);
    } catch (err) {
      dispatch({
        type: 'FETCH_FAIL',
      });
      toast.error(getError(err));
    }
  };

  return (
    <div className="container small-container">
      <Helmet>
        <title>Mon profil</title>
      </Helmet>
      <h1 className="my-3">Mon profil</h1>
      <form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            disabled={editProfile ? false : true}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            disabled={editProfile ? false : true}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={editProfile ? false : true}
          />
        </Form.Group>
        {editProfile ? (
          <>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Nouveau mot de passe</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirmer le nouveau mot de passe</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
          </>
        ) : (
          <></>
        )}
        <div className="mb-3">
          {editProfile ? (
            <Button type="submit" className="button-form">
              Mettre à jour
            </Button>
          ) : (
            <Button
              type="button"
              className="button-form"
              onClick={(e) => {
                e.preventDefault();
                setEditProfile(true);
              }}
            >
              Editer mon profil
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
