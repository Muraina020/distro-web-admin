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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
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
