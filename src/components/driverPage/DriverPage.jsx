import React, { useState, useEffect } from "react";
import "./driverPage.css";
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
import { customFetch } from "../../utils";

const DriverPage = () => {
  const [data, setData] = useState([]);
  const [activeHeader, setActiveHeader] = useState("ACTIVE");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDrivers = async () => {
      let endpoint;
      if (activeHeader === "ACTIVE") {
        endpoint = "/drivers/active/all";
      } else if (activeHeader === "INACTIVE") {
        endpoint = "/drivers/offline/all";
      } else if (activeHeader === "UNIFIED") {
        endpoint = "/drivers/unverified/all";
      }

      const response = await customFetch(endpoint, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZG1pbjEiLCJpYXQiOjE3MDQ0OTMwMjIsImV4cCI6MTcwNDU3OTQyMn0.VYr9ZWJrgWws3WQQo1BTQ09ek2lQSTHZXGfLOm11RE9jxKl_UAkKdxOuUQoC-_66`,
        },
      });

      const driversData = response.data.content;
      setData(driversData);
    };

    fetchDrivers(activeHeader);
  }, [activeHeader]);

  const handleHeaderClick = (header) => {
    setActiveHeader(header);
  };

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
      <TableContainer
        className="table-container-mobile"
        bg="white"
        fontSize="18px"
        paddingBottom="30px"
      >
        <Table variant="simple" size="md" paddingBottom="50px">
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
                    activeHeader === "ACTIVE"
                      ? "2px solid #00A69C"
                      : "2px solid lightgray",
                  color: activeHeader === "ACTIVE" ? "#00A69C" : "black",
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
                  color: activeHeader === "INACTIVE" ? "#00A69C" : "black",
                  cursor: "pointer",
                }}
              >
                INACTIVE
              </Th>
              <Th
                onClick={() => handleHeaderClick("UNIFIED")}
                style={{
                  borderBottom:
                    activeHeader === "UNIFIED"
                      ? "2px solid #00A69C"
                      : "2px solid lightgray",
                  color: activeHeader === "UNIFIED" ? "#00A69C" : "black",
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
            {activeHeader === "ACTIVE" && (
              <>
                {data.map((item, index) => (
                  <Tr
                    key={index}
                    borderBottom="2px solid lightgray"
                    style={{ color: "#696969", cursor: "pointer" }}
                  >
                    <Td  onClick={() => handleRowClick(item.status)}>{item?.driverId}</Td>
                    <Td>{item?.fullName ? item.fullName : "N/A"}</Td>
                    <Td className="email-column">{item?.email}</Td>
                    <Td isNumeric>{item?.phoneNumber}</Td>
                    <Td>
                      <div
                        style={{
                          display: "inline-block",
                          backgroundColor: "green",
                          color: "white",
                          padding: "5px",
                          borderRadius: "8px",
                        }}
                      >
                        {item?.currentStatus}
                      </div>
                    </Td>
                  </Tr>
                ))}
              </>
            )}

            {activeHeader === "INACTIVE" && (
              <>
                {data.map((item, index) => (
                  <Tr
                    key={index}
                    borderBottom="2px solid lightgray"
                    style={{ color: "#696969", cursor: "pointer" }}
                  >
                    <Td  onClick={() => handleRowClick(item.status)}>{item?.driverId}</Td>
                    <Td>{item?.fullName ? item.fullName : "N/A"}</Td>
                    <Td className="email-column">{item?.email}</Td>
                    <Td isNumeric>{item?.phoneNumber}</Td>
                    <Td>
                      <div
                        style={{
                          display: "inline-block",
                          backgroundColor: "#F9BF42",
                          color: "white",
                          padding: "5px",
                          borderRadius: "8px",
                        }}
                      >
                        {item?.currentStatus}
                      </div>
                    </Td>
                  </Tr>
                ))}
              </>
            )}

            {activeHeader === "UNIFIED" && (
              <>
                {data.map((item, index) => (
                  <Tr
                    key={index}
                    borderBottom="2px solid lightgray"
                    style={{ color: "#696969", cursor: "pointer" }}
                  >
                    <Td  onClick={() => handleRowClick(item.status)}>{item?.driverId}</Td>
                    <Td>{item?.fullName ? item.fullName : "N/A"}</Td>
                    <Td className="email-column">{item?.email}</Td>
                    <Td isNumeric>{item?.phoneNumber}</Td>
                    <Td>
                      <div
                        style={{
                          display: "inline-block",
                          backgroundColor: "#F9BF42",
                          color: "white",
                          padding: "5px",
                          borderRadius: "8px",
                        }}
                      >
                        {item?.currentStatus}
                      </div>
                    </Td>
                  </Tr>
                ))}
              </>
            )}
          </Tbody>
        </Table>

        <Flex justifyContent="center" marginTop="10" alignItems="center">
          <FaChevronLeft />
          <span style={{ margin: "0 10px", color: "#00A69C" }}>1</span>
          <span style={{ margin: "0 10px" }}>2</span>
          <span style={{ margin: "0 10px" }}>3</span>
          <span style={{ margin: "0 10px" }}>4</span>
          <span style={{ margin: "0 10px" }}>5</span>
          <FaChevronRight />
        </Flex>
      </TableContainer>
    </div>
  );
};

export default DriverPage;
