import React, { useState } from "react";
import "./auth.scss";
import { Link, useHref, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import configAPI from "../utils/configAPI";
import { setUser } from "../redux/slice/userSlice";

export const Auth = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backUp = useSelector((state) => state.app.page);

  const [errorLogin, setErrorLogIn] = useState(false)
  const [succesLogin, setSuccesLogin] = useState(false)
  
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const formSumbit = async (e) => {
    e.preventDefault();
      try {
        const response = await axios.post(
          configAPI.serverAuthURL + "/login",
          formData
        );
        if (response.status == 200) {
          console.log(response.data);
          const user = response.data
          dispatch(setUser(user))
          setSuccesLogin(true)
          setErrorLogIn(false)
          setTimeout(() => {
            navigate('/catalog/all')
          }, 600);
          
        }
      } catch(err) {
        console.log(err);
        setErrorLogIn(true)
        setSuccesLogin(false)
      } 
  };
  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="wrapper-login">
      <div className="auth-container">
        <div className="section-left">
          <h1 className="title">Вход в личный кабинет</h1>

          <form className="auth-form" onSubmit={formSumbit}>
            <input
              className="input"
              name="login"
              type="text"
              value={formData.login}
              onChange={formChange}
              placeholder="Логин"
            />
            <input
              className="input"
              name="password"
              type="password"
              value={formData.password}
              onChange={formChange}
              placeholder="Пароль"
            />
            <div className="btn-group">
              <button className="login" type="sumbit">
                Войти в кабинет
              </button>
              <button
                onClick={() => navigate("/registration")}
                className="reg"
                type="sumbit"
              >
                Регистрация
              </button>
            </div>
            {succesLogin && <div className="succses"><p className="message">Вход выполнен успешно</p></div>}
            {errorLogin && <div className="error"><p className="message">Неверный логин или пароль</p></div>}
          </form>
        </div>
        <div className="section-right">
          <Link to={backUp || "/"}>
            <div className="button-close">
              <img src="/src/assets/Image/Ellipse7.svg" alt="" />
              <img
                className="svg"
                src="/src/assets/Image/close-line.svg"
                alt=""
              />
            </div>
          </Link>
          <img
            className="svg-bottom"
            src="/src/assets/Image/EllipseCircle.png"
            alt=""
          />
        </div>
        
      </div>
     
    </div>
  );
};
