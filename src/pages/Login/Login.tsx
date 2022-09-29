import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { createUser } from "../../redux/state/user";
import { getMorty } from "../../services";

export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();
  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result));
      navigate(`/${PrivateRoutes.PRIVATE}`,{replace:true});
    } catch (error) {}
  };

  return <div><button onClick={login}>Login</button></div>;
};

export default Login;
