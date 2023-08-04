import { Provider } from "react-redux";

import "./App.css";
import store from "./store";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";

export default function App() {
  return (
    <Provider store={store}>
      <Task1 />
      <Task2 />
    </Provider>
  );
}
