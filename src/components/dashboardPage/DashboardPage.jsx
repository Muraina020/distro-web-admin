import React, { useEffect, useState } from "react";
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
import { customFetch } from "../../utils";

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
  const [prizeCard1, setPrizeCard1] = useState(null);
  const [prizeCard2, setPrizeCard2] = useState(null);
  const [prizeCard3, setPrizeCard3] = useState(null);
  const [prizeCard4, setPrizeCard4] = useState(null);

  const apiEndpoints = {
    card1: "https://apps-1.lampnets.com/distro/orders/sum",
    card2: "https://apps-1.lampnets.com/distro/orders/size",
    card3: "https://apps-1.lampnets.com/distro/customers/size",
    card4: "https://apps-1.lampnets.com/distro/drivers/size",
  };

  const fetchPrizeData = async (card) => {
    try {
      const response = await customFetch.get(apiEndpoints[card]);
  
      switch (card) {
        case 'card1':
          setPrizeCard1(response.data.amount);
          break;
        case 'card2':
          setPrizeCard2(response.data.total);
          break;
        case 'card3':
          setPrizeCard3(response.data.total);
          break;
        case 'card4':
          setPrizeCard4(response.data.total);
          break;
        default:
          break;
      }
  
      // console.log(response);
    } catch (error) {
      console.error(`Error fetching prize data for ${card}:`, error);
     
    }
  };
  
  useEffect(() => {
    fetchPrizeData('card1');
    fetchPrizeData('card2');
    fetchPrizeData('card3');
    fetchPrizeData('card4');
  }, []); // Fetch prize data on component mount

  const handleMoreVertClick = (card) => {
    switch (card) {
      case 'card1':
        setDropdownOpenCard1(isDropdownOpenCard1 === true ? false : true);
        break;
      case 'card2':
        setDropdownOpenCard2(isDropdownOpenCard2 === true ? false : true);
        break;
      case 'card3':
        setDropdownOpenCard3(isDropdownOpenCard3 === true ? false : true);
        break;
      case 'card4':
        setDropdownOpenCard4(isDropdownOpenCard4 === true ? false : true);
        break;
      default:
        break;
    }
  };

  const handleDailyRevenue = async () => {
    const response = await customFetch.get('https://apps-1.lampnets.com/distro/orders/sum?dateFilter=daily');
    setPrizeCard1(response.data.amount);
    setDropdownOpenCard1(false);
    setTimeDurationCard1('daily')
  }
  const handleWeeklyRevenue = async () => {
    const response = await customFetch.get('https://apps-1.lampnets.com/distro/orders/sum?dateFilter=weekly');
    setPrizeCard1(response.data.amount);
    setDropdownOpenCard1(false);
    setTimeDurationCard1('weekly')
  }
  const handleMonthlyRevenue = async () => {
    const response = await customFetch.get('https://apps-1.lampnets.com/distro/orders/sum?dateFilter=monthly');
    setPrizeCard1(response.data.amount);
    setDropdownOpenCard1(false);
    setTimeDurationCard1('monthly')
  }


  const handleDailyOrder = async () => {
    const response = await customFetch.get('https://apps-1.lampnets.com/distro/orders/size?dateFilter=daily');
    setPrizeCard2(response.data.total);
    setDropdownOpenCard2(false);
    setTimeDurationCard2('daily')
  }
  const handleWeeklyOrder = async () => {
    const response = await customFetch.get('https://apps-1.lampnets.com/distro/orders/size?dateFilter=weekly');
    setPrizeCard2(response.data.total);
    setDropdownOpenCard2(false);
    setTimeDurationCard2('weekly')
  }
  const handleMonthlyOrder = async () => {
    const response = await customFetch.get('https://apps-1.lampnets.com/distro/orders/size?dateFilter=monthly');
    setPrizeCard2(response.data.total);
    setDropdownOpenCard2(false);
    setTimeDurationCard2('monthly')
  }


  const handleDailyDriver = async () => {
    const response = await customFetch.get('/drivers/size?currentStatus=Free');
    setPrizeCard3(response.data.total);
    setDropdownOpenCard3(false);
    setTimeDurationCard3('daily')
  }
  const handleWeeklyDriver = async () => {
    const response = await customFetch.get('/drivers/size?currentStatus=Occupied');
    setPrizeCard3(response.data.total);
    setDropdownOpenCard3(false);
    setTimeDurationCard3('weekly')
  }
  const handleMonthlyDriver = async () => {
    const response = await customFetch.get('/drivers/size?currentStatus=Offline');
    setPrizeCard3(response.data.total);
    setDropdownOpenCard3(false);
    setTimeDurationCard3('monthly')
  }
  const handleDailyCustomer = async () => {
    const response = await customFetch.get('/drivers/size?currentStatus=Free');
    setPrizeCard4(response.data.total);
    setDropdownOpenCard4(false);
    setTimeDurationCard4('daily')
  }
  const handleWeeklyCustomer = async () => {
    const response = await customFetch.get('/drivers/size?currentStatus=Occupied');
    setPrizeCard4(response.data.total);
    setDropdownOpenCard4(false);
    setTimeDurationCard4('weekly')
  }
  const handleMonthlyCustomer = async () => {
    const response = await customFetch.get('/drivers/size?currentStatus=Offline');
    setPrizeCard4(response.data.total);
    setDropdownOpenCard4(false);
    setTimeDurationCard4('monthly')
  }
   
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
              <div onClick={() => handleDailyRevenue()}>Daily</div>
              <div onClick={() => handleWeeklyRevenue()}>Weekly</div>
              <div onClick={() => handleMonthlyRevenue()}>Monthly</div>
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
      <div onClick={() => handleDailyOrder()}>Daily</div>
      <div onClick={() => handleWeeklyOrder()}>Weekly</div>
      <div onClick={() => handleMonthlyOrder()}>Monthly</div>
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
      <div onClick={() => handleDailyDriver()}>Daily</div>
      <div onClick={() => handleWeeklyDriver()}>Weekly</div>
      <div onClick={() =>  handleMonthlyDriver()}>Monthly</div>
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
      <div onClick={() => handleDailyCustomer()}>Daily</div>
      <div onClick={() => handleWeeklyCustomer()}>Weekly</div>
      <div onClick={() => handleMonthlyCustomer()}>Monthly</div>
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
