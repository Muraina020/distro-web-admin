import React, { useState } from "react";
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

const DashboardPage = () => {
  const [isDropdownOpenCard1, setDropdownOpenCard1] = useState(false);
  const [isDropdownOpenCard2, setDropdownOpenCard2] = useState(false);
  const [isDropdownOpenCard3, setDropdownOpenCard3] = useState(false);
  const [isDropdownOpenCard4, setDropdownOpenCard4] = useState(false);
  const [selectedItemCard1, setSelectedItemCard1] = useState(null);
  const [selectedItemCard2, setSelectedItemCard2] = useState(null);
  const [selectedItemCard3, setSelectedItemCard3] = useState(null);
  const [selectedItemCard4, setSelectedItemCard4] = useState(null);
  const [timeDurationCard1, setTimeDurationCard1] = useState("daily");
  const [timeDurationCard2, setTimeDurationCard2] = useState("daily");
  const [timeDurationCard3, setTimeDurationCard3] = useState("daily");
  const [timeDurationCard4, setTimeDurationCard4] = useState("daily");
  const [prizeCard1, setPrizeCard1] = useState("$30.5k"); // Default prize
  const [prizeCard2, setPrizeCard2] = useState("$30.5k");
  const [prizeCard3, setPrizeCard3] = useState("$30.5k");
  const [prizeCard4, setPrizeCard4] = useState("$30.5k");

  const handleMoreVertClick = (card) => {
    switch (card) {
      case 'card1':
        setDropdownOpenCard1(!isDropdownOpenCard1);
        setDropdownOpenCard2(false);
        setDropdownOpenCard3(false);
        setDropdownOpenCard4(false);
        break;
      case 'card2':
        setDropdownOpenCard2(!isDropdownOpenCard2);
        setDropdownOpenCard1(false);
        setDropdownOpenCard3(false);
        setDropdownOpenCard4(false);
        break;
      case 'card3':
        setDropdownOpenCard3(!isDropdownOpenCard3);
        setDropdownOpenCard1(false);
        setDropdownOpenCard2(false);
        setDropdownOpenCard4(false);
        break;
      case 'card4':
        setDropdownOpenCard4(!isDropdownOpenCard4);
        setDropdownOpenCard1(false);
        setDropdownOpenCard2(false);
        setDropdownOpenCard3(false);
        break;
      default:
        break;
    }
  };

  const handleDropdownItemClick = (item, card) => {
    // Update time duration and prize based on the selected item
    switch (item) {
      case 'Item 1':
        setDropdownOpenCard1(false);
        setDropdownOpenCard2(false);
        setDropdownOpenCard3(false);
        setDropdownOpenCard4(false);
        break;
      case 'Item 2':
        setDropdownOpenCard1(false);
        setDropdownOpenCard2(false);
        setDropdownOpenCard3(false);
        setDropdownOpenCard4(false);
        break;
      case 'Item 3':
        setDropdownOpenCard1(false);
        setDropdownOpenCard2(false);
        setDropdownOpenCard3(false);
        setDropdownOpenCard4(false);
        break;
      default:
        break;
    }

    // Update time duration and prize based on the selected item and card
    switch (card) {
      case 'card1':
        setSelectedItemCard1(item);
        setTimeDurationCard1(item === 'Item 1' ? 'daily' : item === 'Item 2' ? 'weekly' : 'monthly');
        setPrizeCard1(item === 'Item 1' ? '$30.5k' : item === 'Item 2' ? '$100' : '$150');
        break;
        case 'card2':
          setSelectedItemCard2(item);
          setTimeDurationCard2(item === 'Item 1' ? 'daily' : item === 'Item 2' ? 'weekly' : 'monthly');
          setPrizeCard2(item === 'Item 1' ? '496' : item === 'Item 2' ? '501' : '600');
          break;
      case 'card3':
        setSelectedItemCard3(item);
        setTimeDurationCard3(item === 'Item 1' ? 'daily' : item === 'Item 2' ? 'weekly' : 'monthly');
        setPrizeCard3(item === 'Item 1' ? '325' : item === 'Item 2' ? '333' : '150');
        break;
      case 'card4':
        setSelectedItemCard4(item);
        setTimeDurationCard4(item === 'Item 1' ? 'daily' : item === 'Item 2' ? 'weekly' : 'monthly');
        setPrizeCard4(item === 'Item 1' ? '262' : item === 'Item 2' ? '320' : '150');
        break;
      default:
        break;
    }
  };

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
            <span>Revenue</span>
            <span className="rev-profit-text">{prizeCard1}</span>
            <span>{`${timeDurationCard1} point`}</span>
            <span className='dots' onClick={() => handleMoreVertClick('card1')}><MoreVertIcon /></span>
          </div>
          {isDropdownOpenCard1 && (
            <div className='dropdown-box'>
              <div onClick={() => handleDropdownItemClick('Item 1', 'card1')}>Daily</div>
              <div onClick={() => handleDropdownItemClick('Item 2', 'card1')}>Weekly</div>
              <div onClick={() => handleDropdownItemClick('Item 3', 'card1')}>Monthly</div>
            </div>
          )}
        </div>
        <div className="card">
          <div className="refund-profit">
            <img src={or} alt="" />
            <span>Order</span>
            <span className="refund-profit-text">{prizeCard2}</span>
    <span>{`${timeDurationCard2} point`}</span>
    <span className='dots' onClick={() => handleMoreVertClick('card2')}><MoreVertIcon /></span>
  </div>
  {isDropdownOpenCard2 && (
    <div className='dropdown-box'>
      <div onClick={() => handleDropdownItemClick('Item 1', 'card2')}>Daily</div>
      <div onClick={() => handleDropdownItemClick('Item 2', 'card2')}>Weekly</div>
      <div onClick={() => handleDropdownItemClick('Item 3', 'card2')}>Monthly</div>
    </div>
  )}
        </div>
        <div className="card">
          <div className="order-profit">
            <img src={driver1} alt="" />
            <span>Active Driver</span>
            <span className="order-profit-text">{prizeCard3}</span>
    <span>{`${timeDurationCard3} point`}</span>
    <span className='dots' onClick={() => handleMoreVertClick('card3')}><MoreVertIcon /></span>
  </div>
  {isDropdownOpenCard3 && (
    <div className='dropdown-box'>
      <div onClick={() => handleDropdownItemClick('Item 1', 'card3')}>Daily</div>
      <div onClick={() => handleDropdownItemClick('Item 2', 'card3')}>Weekly</div>
      <div onClick={() => handleDropdownItemClick('Item 3', 'card3')}>Monthly</div>
    </div>
  )}
        </div>
        <div className="card">
          <div className="rev-profit">
            <img src={usr} alt="" />
            <span>Customer</span>
            <span className="order-profit-text">{prizeCard4}</span>
    <span>{`${timeDurationCard4} point`}</span>
    <span className='dots' onClick={() => handleMoreVertClick('card4')}><MoreVertIcon /></span>
  </div>
  {isDropdownOpenCard4 && (
    <div className='dropdown-box'>
      <div onClick={() => handleDropdownItemClick('Item 1', 'card4')}>Daily</div>
      <div onClick={() => handleDropdownItemClick('Item 2', 'card4')}>Weekly</div>
      <div onClick={() => handleDropdownItemClick('Item 3', 'card4')}>Monthly</div>
    </div>
  )}
        </div>
      </div>

      <div className="recent">
        <h3>Recent Orders</h3>
        <span>Recently implemented orders</span>
      </div>

      {/* order */}

      <div className="one-order">
        <div className="one-wrap">
          <div className="date">
            <div className="dating">
              <img src={date1} alt="" />
              <div className="sm">
                <span className="code">DL-5679-435EX</span>
                <span className="dated">Mon Jun 2 2023 12:38:37</span>
              </div>
            </div>
            <span className="prize">N5,600</span>
          </div>
          <div className="name">
            <div className="datings">
              <span className="assigned">
                Costomer Name: <span className="bankuli">Bankuli Kofi</span>
              </span>
              <span className="assigned">
                Assigned Driver: <span className="bankuli">John Jonson</span>
              </span>
            </div>
            <span className="paid">paid</span>
          </div>
          <button className="row-btn">Pending</button>
        </div>

        <div className="two-wrap">
          <div className="date">
            <div className="dating">
              <img src={date2} alt="" />
              <div className="sm">
                <span className="code">DL-5679-435EX</span>
                <span className="dated">Mon Jun 2 2023 12:38:37</span>
              </div>
            </div>
            <span className="prize">N5,600</span>
          </div>
          <div className="name">
            <div className="datings">
              <span className="assigned">
                Costomer Name: <span className="bankuli">Bankuli Kofi</span>
              </span>
              <span className="assigned">
                Assigned Driver: <span className="bankuli">John Jonson</span>
              </span>
            </div>
            <span className="paid">paid</span>
          </div>
          <button className="two-btn">On the way</button>
        </div>

        <div className="three-wrap">
          <div className="date">
            <div className="dating">
              <img src={date3} alt="" />
              <div className="sm">
                <span className="code">DL-5679-435EX</span>
                <span className="dated">Mon Jun 2 2023 12:38:37</span>
              </div>
            </div>
            <span className="prize">N5,600</span>
          </div>
          <div className="name">
            <div className="datings">
              <span className="assigned">
                Costomer Name: <span className="bankuli">Bankuli Kofi</span>
              </span>
              <span className="assigned">
                Assigned Driver: <span className="bankuli">John Jonson</span>
              </span>
            </div>
            <span className="paid">paid</span>
          </div>
          <button className="three-btn">Canceled</button>
        </div>

        <div className="four-wrap">
          <div className="date">
            <div className="dating">
              <img src={date4} alt="" />
              <div className="sm">
                <span className="code">DL-5679-435EX</span>
                <span className="dated">Mon Jun 2 2023 12:38:37</span>
              </div>
            </div>
            <span className="prize">N5,600</span>
          </div>
          <div className="name">
            <div className="datings">
              <span className="assigned">
                Costomer Name: <span className="bankuli">Bankuli Kofi</span>
              </span>
              <span className="assigned">
                Assigned Driver: <span className="bankuli">John Jonson</span>
              </span>
            </div>
            <span className="paid">paid</span>
          </div>
          <button className="four-btn">Delivered</button>
        </div>

        <div className="five-wrap">
          <div className="date">
            <div className="dating">
              <img src={date5} alt="" />
              <div className="sm">
                <span className="code">DL-5679-435EX</span>
                <span className="dated">Mon Jun 2 2023 12:38:37</span>
              </div>
            </div>
            <span className="prize">N5,600</span>
          </div>
          <div className="name">
            <div className="datings">
              <span className="assigned">
                Costomer Name: <span className="bankuli">Bankuli Kofi</span>
              </span>
              <span className="assigned">
                Assigned Driver: <span className="bankuli">John Jonson</span>
              </span>
            </div>
            <span className="paid">paid</span>
          </div>
          <button className="five-btn">Pick up</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
