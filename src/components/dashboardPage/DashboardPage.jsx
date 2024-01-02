import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ife from "../../assets/img/ife.png";
import date1 from "../../assets/img/date1.png";
import date2 from "../../assets/img/date2.png";
import date3 from "../../assets/img/date3.png";
import date4 from "../../assets/img/date4.png";
import date5 from "../../assets/img/date5.png";
import order1 from "../../assets/img/order1.png";
import driver1 from "../../assets/img/driver1.png";
import or from "../../assets/img/or.png";
import usr from "../../assets/img/usr.png";
import hamburg from "../../assets/img/hamburg.png";
// import customer1 from "../../assets/img/customer1.png";
import "./dashboardPage.css";
import RecentOrders from "./RecentOrders";

const DashboardPage = () => {
  return (
    <div className="bodi">
      <div className="dif">
        <div className="distro">
          <h3>Distro Statistics</h3>
          <p>Total 48.5% growth this month</p>
        </div>
        <div className="harm">
          <img src={hamburg} alt="" />
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <div className="rev-profit">
            <img src={ife} alt="" />
            <span>Total Profit</span>
            <span className="rev-profit-text">$30.5k</span>
            <span>weekly point</span>
          </div>
          <span className="dots">
            <MoreVertIcon />
          </span>
        </div>
        <div className="card">
          <div className="refund-profit">
            <img src={or} alt="" />
            <span>Total Profit</span>
            <span className="refund-profit-text">$30.5k</span>
            <span>weekly point</span>
          </div>
          <span className="dots">
            <MoreVertIcon />
          </span>
        </div>
        <div className="card">
          <div className="order-profit">
            <img src={driver1} alt="" />
            <span>Total Profit</span>
            <span className="order-profit-text">$30.5k</span>
            <span>weekly point</span>
          </div>
          <span className="dots">
            <MoreVertIcon />
          </span>
        </div>
        <div className="card">
          <div className="rev-profit">
            <img src={usr} alt="" />
            <span>Total Profit</span>
            <span className="order-profit-text">$30.5k</span>
            <span>weekly point</span>
          </div>
          <span className="dots">
            <MoreVertIcon />
          </span>
        </div>
      </div>

      <div className="recent">
        <h3>Recent Orders</h3>
        <span>Recently implemented orders</span>
      </div>

      {/* order */}

      <RecentOrders />
    </div>
  );
};

export default DashboardPage;
