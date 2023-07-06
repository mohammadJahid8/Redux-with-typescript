import { Middleware } from "redux";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("Current state :", store.getState());
  console.log("Action :", action);
  console.log("Updated state :", store.getState());

  next(action);
};

export default logger;
