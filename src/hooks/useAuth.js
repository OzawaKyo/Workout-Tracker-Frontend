const useAuth = () => {
    return !!localStorage.getItem("token"); // Vérifie si un token est présent
  };
  
  export default useAuth;
  