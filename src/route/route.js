import { createBrowserRouter } from "react-router-dom";
import Login from "../auth/aboutUser/Login";
import SignUp from "../auth/aboutUser/SignUp";
import Main from "../layout/main/Main";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/index";
import PrivateRoute from "./privateRoute";
import About from "../pages/about/About";
import DestinationDetails from "../pages/Destination/DestinationDetails";
import TravelBookingForm from "../pages/home/banner/TravelBookingForm";
import BookingHistory from "../pages/booking/bookingHistory";
import Destination from "../pages/Destination/Destination";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    {
      path: "/booking",
          element: (
            <PrivateRoute>
              <TravelBookingForm/>
            </PrivateRoute>
          ),

    },
     {
        path: "/destination",
        element: <Destination />,
      },
      {
            path: "/destinationDetails/:id",
            element: <DestinationDetails />,
           
          },
      {
        path: "/about",
        element:<About/>,
        // loader: () => /"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);