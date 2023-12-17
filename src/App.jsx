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
  SharedLayout,
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
} from "./pages";
import Dashboard from "./pages/dashboard/Dashboard";
import Driver from "./pages/driver/Driver";
import AddDriver from "./pages/addDriver/AddDriver";
import Login from "./pages/login/Login";
import Success from "./pages/success/Success";
import CustomerTable from "./pages/customer/CustomerTable";
import OnlineSetting from "./pages/onlinesetting/OnlineSetting";
import Rating from "./pages/rating/Rating";
import Unrated from "./pages/unrated/Unrated";
import Rated from "./pages/unrated/Rated";
import Activate from "./pages/onlinesetting/Activate";
import Offline from "./pages/onlinesetting/Offline";
import OfflineR from "./pages/rating/OfflineR";
import ActiveR from "./pages/rating/ActiveR";
import CustomerAccount from "./pages/customer/CustomerAccount";
import CustomerRatin from "./pages/customer/CustomerRatin";
import ResetPassword from "./pages/resetPassword/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "reset",
    element: <ResetPassword />,
  },
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/driver",
        element: <Driver />,
      },
      {
        path: "/addDriver",
        element: <AddDriver />,
      },
      {
        path: "/add",
        element: <AddDriver />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/online",
        element: <OnlineSetting />,
      },
      {
        path: "/offline",
        element: <Offline />,
      },
      {
        path: "/unverify",
        element: <Activate />,
      },
      {
        path: "/rating",
        element: <Rating />,
      },
      {
        path: "/offlinerating",
        element: <OfflineR />,
      },
      {
        path: "/activerating",
        element: <ActiveR />,
      },
      {
        path: "/unrated",
        element: <Unrated />,
      },
      {
        path: "/rated",
        element: <Rated />,
      },
      {
        path: "/customer",
        element: <CustomerTable />,
      },
      {
        path: "/customeracc",
        element: <CustomerAccount />,
      },
      {
        path: "/customrating",
        element: <CustomerRatin />,
      },
      {
        path: "orderTracking",
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
      },
      {
        path: "scheduleOrderHistory",
        element: <ScheduleOrderHistory />,
      },
      {
        path: "profile",
        element: <SharedLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "setting",
            element: <Setting />,
          },
        ],
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
