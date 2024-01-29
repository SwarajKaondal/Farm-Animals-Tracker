import movementReducer, { IMovements } from "./movementReducer";
import loginReducer, { loginObj } from "./loginReducer";

export interface IRootReducer {
  login: loginObj;
  movements: IMovements;
}

const rootReducer = {
  movements: movementReducer,
  login: loginReducer,
};

export default rootReducer;
