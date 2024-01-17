import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  CancelDetail,
  DeliveredDetail,
  ExpressPendingDrivers,
  HomeLayouts,
  PendingDetail,
  OnTheWayDetail,
  PickedUpDetails,
  ExpressOrderHistory,
  ScheduleOrderHistory,
  Profile,
  Setting,
  OrderExpressDelivery,
  OrderSharedLayout,
  OrderScheduleDelivery,
  ChatLayout,
  DriverChats,
  CustomerChats,
  ScheduleCancelDetail,
  SchedulePickedUpDetail,
  ScheduleOnTheWayDetail,
  ScheduleDeliveredDetail,
  SchedulePendingDetail,
  ChatMobileDrivers,
  Error,
} from "./pages";
import Dashboard from "./pages/dashboard/Dashboard";
import Driver from "./pages/driver/Driver";
import AddDriver from "./pages/addDriver/AddDriver";
import Login from "./pages/login/Login";
import Success from "./pages/success/Success";
import CustomerTable from "./pages/customer/CustomerTable";
import Rated from "./pages/unrated/Rated";
import ResetPassword from "./pages/resetPassword/ResetPassword";
// loaders
import { loader as expressHistroyLoader } from "./pages/ExpressOrderHistory";
import { loader as scheduleHistoryLoader } from "./pages/ScheduleOrderHistory";
import OTPInput from "./components/resetPasswordPage/OTPInput";
import Reset from "./components/resetPasswordPage/Reset";
import Recovered from "./components/resetPasswordPage/Recovered";
import SingleDriver from "./components/onlineSettin.jsx/SingleDriver";

import OrderId from "./components/onlineSettin.jsx/OrderId";
import SingleCustomer from "./components/customerPage/SingleCustomer";


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
    element: <OTPInput/>,
  },
  {
    path: "passwordreset",
    element: <Reset/>,
  },
 
  {
    path: "recovered",
    element: <Recovered/>,
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
        path:"/dashboard/order/:orderId",
        element: <OrderId />,
      },
     
      {
        path: "/dashboard/rated",
        element: <Rated />,
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
      // express Single details  Pages
      {
        path: "orderTracking/expressOrderPending/:id",
        element: <PendingDetail />,
      },
      {
        path: "orderTracking/expressCanceled/:id",
        element: <CancelDetail />,
      },
      {
        path: "orderTracking/expressOrderDelivered/:id",
        element: <DeliveredDetail />,
      },
      {
        path: "orderTracking/expressOrderOnTheWay/:id",
        element: <OnTheWayDetail />,
      },
      {
        path: "orderTracking/expressOrderPickedUp/:id",
        element: <PickedUpDetails />,
      },
      // Schedule Single details  Pages
      {
        path: "orderTracking/schedule/orderPending/:id",
        element: <SchedulePendingDetail />,
      },
      {
        path: "orderTracking/schedule/orderCanceled/:id",
        element: <ScheduleCancelDetail />,
      },
      {
        path: "orderTracking/schedule/OrderDelivered/:id",
        element: <ScheduleDeliveredDetail />,
      },
      {
        path: "orderTracking/schedule/OrderOnTheWay/:id",
        element: <ScheduleOnTheWayDetail />,
      },
      {
        path: "orderTracking/schedule/OrderPickedUp/:id",
        element: <SchedulePickedUpDetail />,
      },
      {
        path: "exprees_order pending_asign-drivers",
        element: <ExpressPendingDrivers />,
      },
      {
        path: "expressOrderHistory",
        element: <ExpressOrderHistory />,
        errorElement: <Error />,
        loader: expressHistroyLoader,
      },
      {
        path: "scheduleOrderHistory",
        element: <ScheduleOrderHistory />,
        errorElement: <Error />,
        loader: scheduleHistoryLoader,
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
        element: <DriverChats />,
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
