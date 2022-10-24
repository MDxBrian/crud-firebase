import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/register-page/register.js";
import UserList from "./pages/users-page/user-list";
import reportWebVitals from "./reportWebVitals";
import { LoaderProvider } from "./context/LoaderContext";
import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import EditUser from "./pages/users-page/edit-user";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <LoaderProvider>
      <Loader>
        <BrowserRouter>
          <Routes>
          <Route path="/register" element={<Register />} />
            <Route element={<Navbar />}>
              <Route path="/" element={<UserList />} />
              <Route path="/user-list" element={<UserList />} />
              <Route path="/edit-user" element={<EditUser />} />
              <Route path="*" element={<UserList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Loader>
    </LoaderProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
