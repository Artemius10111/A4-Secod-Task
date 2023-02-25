import { Middleware } from "redux";

export const AuthMiddleware: Middleware = api => next => action => {
    console.log("auth");
    if (localStorage.getItem("isAuth") === null) {
        localStorage.setItem("isAuth", "false");
    }
    return next(action);
  };