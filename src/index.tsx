import ReactDOM from "react-dom";
import './index.css';
import { App } from "./components/app/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/store";

ReactDOM.render(
    <BrowserRouter basename="/Space-burgers">
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.querySelector("#root")
);