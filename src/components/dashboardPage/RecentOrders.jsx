import { Link } from "react-router-dom";
import date1 from "../../assets/img/date1.png";
import date2 from "../../assets/img/date2.png";
import date3 from "../../assets/img/date3.png";
import date4 from "../../assets/img/date4.png";
import date5 from "../../assets/img/date5.png";
import { formatPrice, formateDate } from "../../utils";
import {
  UseCancelRecentOrder,
  UseDeliveredRecentOrder,
  UseOnTheWayRecentOrder,
  UsePendingRecentOrder,
  UsePickedUpRecentOrder,
} from "../../hooks/UseHooks";
import SkeletonLoader from "../ui/SkeletonLoader";

const RecentOrders = () => {
  const { data: pendingRecent, loading, error } = UsePendingRecentOrder();
  const { data: onTheWayRecent } = UseOnTheWayRecentOrder();
  const { data: cancelRecent } = UseCancelRecentOrder();
  const { data: deliveredRecent } = UseDeliveredRecentOrder();
  const { data: PickedUpRecent } = UsePickedUpRecentOrder();

  if (loading) {
    return (
      <div className="space-y-5">
        <SkeletonLoader className="w-[75%] h-28 rounded-lg " />
        <SkeletonLoader className="w-[75%] h-28 rounded-lg " />
        <SkeletonLoader className="w-[75%] h-28 rounded-lg " />
        <SkeletonLoader className="w-[75%] h-28 rounded-lg " />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[30vh] grid place-items-center">
        <h1 className="text-3xl">{error}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="one-order">
        {pendingRecent && (
          <div className="one-wrap">
            <div className="date">
              <div className="dating">
                <img src={date1} alt="" />
                <div className="sm">
                  <span className="code">{pendingRecent?.shipmentId}</span>
                  <span className="dated">
                    {formateDate(pendingRecent?.date)}
                  </span>
                </div>
              </div>
              <span className="prize">{formatPrice(pendingRecent?.price)}</span>
            </div>
            <div className="name">
              <div className="datings">
                <span className="assigned">
                  Customer Name:{" "}
                  <span className="bankuli">
                    {pendingRecent?.dropOffs[0]?.receiverName}
                  </span>
                </span>
                <span className="assigned">
                  Assigned Driver:{" "}
                  <span className="bankuli">
                    {pendingRecent?.driver.firstName}{" "}
                    {pendingRecent?.driver.lastName}
                  </span>
                </span>
              </div>
              <span className="paid">{pendingRecent?.status}</span>
            </div>
            <Link to={`orderTracking/${pendingRecent?.id}`} className="row-btn">
              Pending
            </Link>
          </div>
        )}

        {onTheWayRecent && (
          <div className="two-wrap">
            <div className="date">
              <div className="dating">
                <img src={date2} alt="" />
                <div className="sm">
                  <span className="code">
                    {!onTheWayRecent?.shipmentId
                      ? "N/A"
                      : onTheWayRecent?.shipmentId}
                  </span>
                  <span className="dated">
                    {formateDate(onTheWayRecent?.date)}
                  </span>
                </div>
              </div>
              <span className="prize">
                {formatPrice(onTheWayRecent?.price)}
              </span>
            </div>
            <div className="name">
              <div className="datings">
                <span className="assigned">
                  Costomer Name:{" "}
                  <span className="bankuli">
                    {onTheWayRecent?.dropOffs?.[0].receiverName}
                  </span>
                </span>
                <span className="assigned">
                  Assigned Driver:{" "}
                  <span className="bankuli">
                    {onTheWayRecent?.driver?.firstName}{" "}
                    {onTheWayRecent?.driver?.lastName}
                  </span>
                </span>
              </div>
              <span className="paid">{onTheWayRecent?.status}</span>
            </div>
            <Link
              to={`orderTracking/${onTheWayRecent?.id}`}
              className="two-btn"
            >
              On the way
            </Link>
          </div>
        )}

        {cancelRecent && (
          <div className="three-wrap">
            <div className="date">
              <div className="dating">
                <img src={date3} alt="" />
                <div className="sm">
                  <span className="code">
                    {" "}
                    {!cancelRecent?.shipmentId
                      ? "N/A"
                      : cancelRecent?.shipmentId}
                  </span>
                  <span className="dated">
                    {" "}
                    {formateDate(cancelRecent?.date)}
                  </span>
                </div>
              </div>
              <span className="prize">{formatPrice(cancelRecent?.price)}</span>
            </div>
            <div className="name">
              <div className="datings">
                <span className="assigned">
                  Customer Name:{" "}
                  <span className="bankuli">
                    {" "}
                    {cancelRecent?.dropOffs[0]?.receiverName}
                  </span>
                </span>
                <span className="assigned">
                  Assigned Driver:{" "}
                  <span className="bankuli">
                    {" "}
                    {cancelRecent?.driver.firstName}{" "}
                    {cancelRecent?.driver.lastName}
                  </span>
                </span>
              </div>
              <span className="paid">{cancelRecent?.status}</span>
            </div>
            <Link
              to={`orderTracking/${cancelRecent?.id}`}
              className="three-btn"
            >
              Canceled
            </Link>
          </div>
        )}

        {deliveredRecent && (
          <div className="four-wrap">
            <div className="date">
              <div className="dating">
                <img src={date4} alt="" />
                <div className="sm">
                  <span className="code">
                    {" "}
                    {!deliveredRecent?.shipmentId
                      ? "N/A"
                      : deliveredRecent?.shipmentId}
                  </span>
                  <span className="dated">
                    {" "}
                    {formateDate(deliveredRecent?.date)}
                  </span>
                </div>
              </div>
              <span className="prize">
                {formatPrice(deliveredRecent?.price)}
              </span>
            </div>
            <div className="name">
              <div className="datings">
                <span className="assigned">
                  Customer Name:{" "}
                  <span className="bankuli">
                    {" "}
                    {deliveredRecent?.dropOffs?.[0].receiverName}
                  </span>
                </span>
                <span className="assigned">
                  Assigned Driver:{" "}
                  <span className="bankuli">
                    {" "}
                    {deliveredRecent?.driver?.firstName}{" "}
                    {deliveredRecent?.driver?.lastName}
                  </span>
                </span>
              </div>
              <span className="paid">{deliveredRecent?.status}</span>
            </div>
            <Link
              to={`orderTracking/${deliveredRecent?.id}`}
              className="four-btn"
            >
              Delivered
            </Link>
          </div>
        )}

        {PickedUpRecent && (
          <div className="five-wrap">
            <div className="date">
              <div className="dating">
                <img src={date5} alt="" />
                <div className="sm">
                  <span className="code">
                    {" "}
                    {!PickedUpRecent?.shipmentId
                      ? "N/A"
                      : PickedUpRecent?.shipmentId}
                  </span>
                  <span className="dated">
                    {" "}
                    {formateDate(PickedUpRecent?.date)}
                  </span>
                </div>
              </div>
              <span className="prize">
                {" "}
                {formatPrice(PickedUpRecent?.price)}
              </span>
            </div>
            <div className="name">
              <div className="datings">
                <span className="assigned">
                  Customer Name:{" "}
                  <span className="bankuli">
                    {" "}
                    {PickedUpRecent?.dropOffs?.[0].receiverName}
                  </span>
                </span>
                <span className="assigned">
                  Assigned Driver:{" "}
                  <span className="bankuli">
                    {" "}
                    {PickedUpRecent?.driver ? (
                      <>
                        {" "}
                        {PickedUpRecent?.driver?.firstName}{" "}
                        {PickedUpRecent?.driver?.lastName}
                      </>
                    ) : (
                      "N/A"
                    )}
                  </span>
                </span>
              </div>
              <span className="paid">{PickedUpRecent?.status}</span>
            </div>
            <Link
              to={`orderTracking/${PickedUpRecent?.id}`}
              className="five-btn"
            >
              Pick up
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default RecentOrders;
