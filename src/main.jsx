import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import "./index.css";
import "./styles/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./screens/PageNotFound.jsx";
import UserDashboardLayout from "./screens/user/UserDashboardLayout.jsx";
import AdminLoginScreen from "./screens/admin/AdminLoginScreen.jsx";
import AdminDashboardLayout from "./screens/admin/AdminDashboardLayout.jsx";
import UserDashboardMainScreen from "./screens/user/UserDashboardMainScreen.jsx";
import UserProfileScreen from "./screens/user/UserProfileScreen.jsx";
import UserBookings from "./screens/user/UserBookings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/user-dashboard",
    element: <UserDashboardLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <UserDashboardMainScreen />,
      },
      {
        path: "user-profile",
        element: <UserProfileScreen />,
      },
      {
        path: "bookings",
        element: <UserBookings />,
      },
    ],
  },
  {
    path: "/admin-login",
    element: <AdminLoginScreen />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboardLayout />,
    errorElement: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
            borderRadius: 2,

            colorBgContainer: "#f6ffed",
            borderRadiusLG: 4,
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
