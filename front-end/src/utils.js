//Si la response du server contient un attribut message, alors return cette donnée depuis le back end
//Sinon retourne l'erreur par défaut depuis l'objet error défini dans le screen
export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
