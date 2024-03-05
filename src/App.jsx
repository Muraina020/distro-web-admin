import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ExpressPendingDrivers,
  HomeLayouts,
  ExpressOrderHistory,
  ScheduleOrderHistory,
  Profile,
  Setting,
  OrderExpressDelivery,
  OrderSharedLayout,
  OrderScheduleDelivery,
  ChatLayout,
  Chats,
  CustomerChats,
  ChatMobileDrivers,
  Error,
  OrderDetails,
  BlockedDrivers,
  BlockedCustomers,
} from "./pages";
import Dashboard from "./pages/dashboard/Dashboard";
import Driver from "./pages/driver/Driver";
import AddDriver from "./pages/addDriver/AddDriver";
import Login from "./pages/login/Login";
import Success from "./pages/success/Success";
import CustomerTable from "./pages/customer/CustomerTable";
import Rated from "./pages/unrated/Rated";


// loaders
import OTPInput from "./components/resetPasswordPage/OTPInput";
import Reset from "./components/resetPasswordPage/Reset";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import SingleDriver from "./components/onlineSettin.jsx/SingleDriver";
import OrderId from "./components/onlineSettin.jsx/OrderId";
import SingleCustomer from "./components/customerPage/SingleCustomer";
import EditDriver from "./components/onlineSettin.jsx/EditDriver";
// actions

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "reset",
    element: <ResetPassword/>,
  },
  {
    path: "otp",
    element: <OTPInput />,
  },
  {
    path: "passwordreset",
    element: <Reset />,
  },

 
  {
    path: "/dashboard",
    element: <HomeLayouts />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/driver",
        element: <Driver />,
      },
      {
        path: "/dashboard/blocked/customers",
        element: <BlockedCustomers />,
      },
      {
        path: "/dashboard/blocked/drivers",
        element: <BlockedDrivers />,
      },
      {
        path: "/dashboard/addDriver",
        element: <AddDriver />,
      },
      {
        path: "/dashboard/success",
        element: <Success />,
      },

      {
        path:"/dashboard/drivers/:email",
        element: <SingleDriver />,
      },
      {
        path:"/dashboard/edit/:email",
        element: <EditDriver />,
      },
      {
        path:"/dashboard/order/:orderId",
        element: <OrderId />,
      },
      
      {
        path: "/dashboard/customer",
        element: <CustomerTable />,
      },
      {
        path:"/dashboard/customers/:email",
        element: <SingleCustomer />,
      },
     
     {
        path: "/dashboard/rated",
        element: <Rated />,
      },
    
      {
        path: "/dashboard/orderTracking",
        element: <OrderSharedLayout />,
        children: [
          {
            index: true,
            element: <OrderExpressDelivery />,
          },
          {
            path: "schedule",
            element: <OrderScheduleDelivery />,
          },
        ],
      },
      //  Single details  Pages
      {
        path: "/dashboard/orderTracking/:id",
        element: <OrderDetails />,
      },
      {
        path: "assign driver",
        element: <ExpressPendingDrivers />,
      },
      {
        path: "expressOrderHistory",
        element: <ExpressOrderHistory />,
        errorElement: <Error />,
      },
      {
        path: "scheduleOrderHistory",
        element: <ScheduleOrderHistory />,
        errorElement: <Error />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/setting",
        element: <Setting />,
      },
    ],
  },

  {
    path: "/chat",
    element: <ChatLayout />,
    children: [
      {
        index: true,
        element: <Chats />,
      },
      {
        path: "customer",
        element: <CustomerChats />,
      },
    ],
  },
  {
    path: "/chat/drivers/:id",
    element: <ChatMobileDrivers />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
