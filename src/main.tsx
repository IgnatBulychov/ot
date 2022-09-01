import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotificationsProvider } from "./components/common/notifications/notifications";
import { setupAxiosInterseptor } from "./api/api";

import { setupStore } from "./store/store";

import "./assets/styles/index.scss";

import { Provider } from "react-redux";

import IndexPage from "./pages/index";
import SignInPage from "./pages/auth/sign-in";
import SignUpPage from "./pages/auth/sign-up";

import DashboardPage from "./pages/dashboard/dashboard";
import AddPostPage from "./pages/dashboard/posts/add";
import MyPostsPage from "./pages/dashboard/posts/list";

const store = setupStore();

setupAxiosInterseptor(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NotificationsProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<IndexPage />}></Route>
            <Route path="auth/sign-in" element={<SignInPage />}></Route>
            <Route path="auth/sign-up" element={<SignUpPage />}></Route>
            <Route path="dashboard" element={<DashboardPage />}>
              <Route path="posts" element={<MyPostsPage />}></Route>
              <Route path="add" element={<AddPostPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </NotificationsProvider>
  </React.StrictMode>
);
