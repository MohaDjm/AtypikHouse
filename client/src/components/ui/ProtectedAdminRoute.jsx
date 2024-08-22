import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

const ProtectedAdminRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>; // Ou n'importe quel autre indicateur de chargement
  }

  console.log("Current user:", user);
  console.log("Is user admin?", user?.isAdmin);

  if (!user || !user.isAdmin) {
    // Rediriger vers la page de connexion ou une page d'erreur
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedAdminRoute;
