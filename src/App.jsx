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
  DriverChats,
  CustomerChats,
  ChatMobileDrivers,
  Error,
  OrderDetails,
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// loaders
import { loader as expressHistroyLoader } from "./pages/ExpressOrderHistory";
import { loader as scheduleHistoryLoader } from "./pages/ScheduleOrderHistory";
import OTPInput from "./components/resetPasswordPage/OTPInput";
import Reset from "./components/resetPasswordPage/Reset";
import Recovered from "./components/resetPasswordPage/Recovered";

// actions

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  // {
  //   path: "reset",
  //   element: <ResetPassword />,
  // },
  {
    path: "otp",
    element: <OTPInput />,
  },
  {
    path: "passwordreset",
    element: <Reset />,
  },

  {
    path: "recovered",
    element: <Recovered />,
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
      // {
      //   path: "dashboard/add",
      //   element: <AddDriver />,
      // },
      {
        path: "/dashboard/success",
        element: <Success />,
      },
      {
        path: "/dashboard/online",
        element: <OnlineSetting />,
      },
      {
        path: "/dashboard/offline",
        element: <Offline />,
      },
      {
        path: "/dashboard/unverify",
        element: <Activate />,
      },

      {
        path: "/dashboard/rating",
        element: <Rating />,
      },
      {
        path: "/dashboard/offlinerating",
        element: <OfflineR />,
      },
      {
        path: "/dashboard/activerating",
        element: <ActiveR />,
      },
      {
        path: "/dashboard/unrated",
        element: <Unrated />,
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
        path: "/dashboard/customeracc",
        element: <CustomerAccount />,
      },
      {
        path: "/dashboard/customrating",
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
      //  Single details  Pages
      {
        path: "/dashboard/orderTracking/:id",
        element: <OrderDetails />,
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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 10,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
