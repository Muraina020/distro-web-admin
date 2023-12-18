import React, { useState, useEffect } from "react";
import "./driverPage.css"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const sampleData = [
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "offline" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "offline" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "offline" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "offline" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "offline" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "offline" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "offline" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "offline" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "offline" },
  // ... (other data)
];

   
  

const DriverPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Add displayStatus and backgroundColor properties to each item in the sampleData
    const initialData = sampleData.map((item) => ({
      ...item,
      displayStatus: "online", // Set all items to have "online" text
      backgroundColor: "#46B04C", // Set the background color accordingly
    }));
  
    setData(initialData);
  }, []); // 

  const [activeHeader, setActiveHeader] = useState("ACTIVE");
  
  const handleHeaderClick = (header) => {
    setActiveHeader(header);
  
    // Modify data based on the clicked header
    let modifiedData = sampleData.map((item) => {
      if (header === "ACTIVE") {
        return { ...item, displayStatus: "online", backgroundColor: "#46B04C" };
      } else if ((header === "INACTIVE" || header === "UNIFIED") && item.status !== "online") {
        return { ...item, displayStatus: "offline", backgroundColor: "#F9BF42" };
      } else {
        return { ...item, displayStatus: item.status, backgroundColor: "#46B04C" };
      }
    });
  
    setData(modifiedData);
  };

  const navigate = useNavigate();

  const handleRowClick = (status) => {
    if (activeHeader === "ACTIVE") {
      navigate('/dashboard/online');
    } else if (activeHeader === "INACTIVE") {
      navigate('/dashboard/offline');
    } else if (activeHeader === "UNIFIED") {
      navigate('/dashboard/unverify');
    }
  };
  
  return (
    <div>
    <TableContainer className="table-container-mobile" bg="white" fontSize="18px" paddingBottom="30px">
      <Table variant="simple" size="lg" paddingBottom="50px">
        <Thead>
        <Tr
  borderBottom="2px solid lightgray"
  justifyContent="center"
  alignItems="center"
>
  <Th
    onClick={() => handleHeaderClick("ACTIVE")}
    style={{
      borderBottom:
        activeHeader === "ACTIVE" ? "2px solid #00A69C" : "2px solid lightgray",
      color: activeHeader === "ACTIVE" ? "#00A69C" : "black", // Change color when active
      cursor: "pointer",
    }}
  >
    ACTIVE DRIVERS
  </Th>
  <Th
    colSpan={2}
    textAlign="center"
    onClick={() => handleHeaderClick("INACTIVE")}
    style={{
      borderBottom:
        activeHeader === "INACTIVE"
          ? "2px solid #00A69C"
          : "2px solid lightgray",
      color: activeHeader === "INACTIVE" ? "#00A69C" : "black", // Change color when active
      cursor: "pointer",
    }}
  >
    INACTIVE
  </Th>
  <Th
    onClick={() => handleHeaderClick("UNIFIED")}
    style={{
      borderBottom:
        activeHeader === "UNIFIED" ? "2px solid #00A69C" : "2px solid lightgray",
      color: activeHeader === "UNIFIED" ? "#00A69C" : "black", // Change color when active
      cursor: "pointer",
    }}
  >
    UNVERIFIED
  </Th>
</Tr>

        </Thead>
        <Thead>
          <Tr borderBottom="2px solid lightgray">
            <Th>DRIVER ID</Th>
            <Th>NAME</Th>
            <Th className="email-head">EMAIL</Th>
            <Th isNumeric>PHONE NUMBER</Th>
            <Th>STATUS</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr  key={index} borderBottom="2px solid lightgray" style={{ color: '#696969', cursor: 'pointer' }}  onClick={() => handleRowClick(item.status)}>
              <Td >{item.id}</Td>
              <Td >{item.name}</Td>
              <Td className="email-column">{item.email}</Td>
              <Td isNumeric>{item.phone}</Td>
              <Td>
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: item.backgroundColor,
                    color: "white",
                    padding: "5px",
                    borderRadius: "8px",
                  }}
                >
                  {item.displayStatus}
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Flex justifyContent="center" marginTop="10" alignItems="center">
        <FaChevronLeft />
        <span style={{ margin: "0 10px", color: '#00A69C'}}>1</span>
        <span style={{ margin: "0 10px" }}>2</span>
        <span style={{ margin: "0 10px" }}>3</span>
        <span style={{ margin: "0 10px" }}>4</span>
        <span style={{ margin: "0 10px" }}>5</span>
        <FaChevronRight />
      </Flex>
    </TableContainer>
  </div>
  )
}

export default DriverPage