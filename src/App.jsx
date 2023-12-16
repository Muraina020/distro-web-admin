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

// loaders
import { loader as expressHistroyLoader } from "./pages/ExpressOrderHistory";
import { loader as scheduleHistoryLoader } from "./pages/ScheduleOrderHistory";

// actions

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
        path: "dashboard/add",
        element: <AddDriver />,
      },
      {
        path: "dashboard/success",
        element: <Success />,
      },
      {
        path: "dashboard/online",
        element: <OnlineSetting />,
      },
      {
        path: "dashboard/offline",
        element: <Offline />,
      },
      {
        path: "dashboard/unverify",
        element: <Activate />,
      },
      {
        path: "dashboard/rating",
        element: <Rating />,
      },
      {
        path: "dashboard/offlinerating",
        element: <OfflineR />,
      },
      {
        path: "dashboard/activerating",
        element: <ActiveR />,
      },
      {
        path: "dashboard/unrated",
        element: <Unrated />,
      },
      {
        path: "dashboard/rated",
        element: <Rated />,
      },
      {
        path: "/dashboard/customer",
        element: <CustomerTable />,
      },
      {
        path: "dashboard/customeracc",
        element: <CustomerAccount />,
      },
      {
        path: "dashboard/customrating",
        element: <CustomerRatin />,
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
