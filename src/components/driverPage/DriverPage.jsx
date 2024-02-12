import React, { useState, useEffect } from "react";

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
import { Link, useNavigate } from "react-router-dom";
import { customFetch } from "../../utils";

const DriverPage = () => {
  const [data, setData] = useState([]);
  const [activeHeader, setActiveHeader] = useState("ACTIVE");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); 
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDrivers = async () => {
      let endpoint;
      if (activeHeader === "ACTIVE") {
        endpoint = `/drivers/active/all?pageNo=${currentPage - 1}&pageSize=${itemsPerPage}`;
      } else if (activeHeader === "INACTIVE") {
        endpoint = `/drivers/offline/all?pageNo=${currentPage - 1}&pageSize=${itemsPerPage}`;
      } else if (activeHeader === "UNIFIED") {
        endpoint = `/drivers/unverified/all?pageNo=${currentPage - 1}&pageSize=${itemsPerPage}`;
      }

      try {
        const response = await customFetch(endpoint);
        const driversData = response.data.content;
        setData(driversData);
        setTotalPages(Math.ceil(response.data.totalElements / itemsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDrivers(activeHeader);
  }, [activeHeader, currentPage, itemsPerPage]);

  const handleHeaderClick = (header) => {
    setActiveHeader(header);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <TableContainer
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
                  
                    <Td>{item?.driverId}</Td>
                    <Td>{item?.fullName ? item.fullName : "N/A"}</Td>
                   <Link to={`/dashboard/drivers/${item?.email}`}>
                     <Td className="email-column">{item?.email}</Td>
                   </Link>
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
                    <Td>{item?.driverId}</Td>
                    <Td>{item?.fullName ? item.fullName : "N/A"}</Td>
                    <Link to={`/dashboard/drivers/${item?.email}`}>
                     <Td className="email-column">{item?.email}</Td>
                   </Link>
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
                    <Td>{item?.driverId}</Td>
                    <Td>{item?.fullName ? item.fullName : "N/A"}</Td>
                    <Link to={`/dashboard/drivers/${item?.email}`}>
                     <Td className="email-column">{item?.email}</Td>
                   </Link>
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

        {/* <Flex justifyContent="center" marginTop="10" alignItems="center">
          <FaChevronLeft />
          <span style={{ margin: "0 10px", color: "#00A69C" }}>1</span>
          <span style={{ margin: "0 10px" }}>2</span>
          <span style={{ margin: "0 10px" }}>3</span>
          <span style={{ margin: "0 10px" }}>4</span>
          <span style={{ margin: "0 10px" }}>5</span>
          <FaChevronRight />
        </Flex> */}

<Flex justifyContent="center" marginTop="10" alignItems="center">
            <FaChevronLeft onClick={() => handlePageChange(currentPage - 1)} />
            {[...Array(totalPages)].map((_, index) => (
              <span
                key={index}
                style={{
                  margin: "0 10px",
                  color: index + 1 === currentPage ? "#00A69C" : "black",
                  cursor: "pointer",
                }}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </span>
            ))}
            <FaChevronRight onClick={() => handlePageChange(currentPage + 1)} />
          </Flex>
      </TableContainer>
    </div>
  );
};

export default DriverPage;
