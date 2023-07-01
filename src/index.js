import React from "react";
import ReactDOM from 'react-dom/client'
// import App from "./counter/App";
import App from "./todoList/App";
import { Provider } from "react-redux/es/exports";
// import store from "./counter/store";
import store from "./todoList/store";

const container=document.getElementById('root')
const root=ReactDOM.createRoot(container)
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)