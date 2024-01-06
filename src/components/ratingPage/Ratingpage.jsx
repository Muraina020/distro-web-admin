import "./rate.css";
import avatar1 from "../../assets/img/avatar1.png";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Flex,
  Box,
  Avatar,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { StarIcon } from '@chakra-ui/icons';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { customFetch } from "../../utils";
import React, { useState, useEffect } from "react";

const OnlineRatin = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await customFetch.get(
          "/pickuporders/info/109",
          // {
          //   email: "driver001@gmail.com"
          // },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZG1pbjEiLCJpYXQiOjE3MDQ0Mzc3NzYsImV4cCI6MTcwNDUyNDE3Nn0.YoTfMLvmyRPG3qn1yWaj-syCEARw9RlGytN4ZSw_N40I0Q_btTdOYWl61VAu31mY`,
            }
          }
        );
  
       
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching drivers:", error);
        // Handle the error as needed
      }
    };
  
  
    fetchDrivers();
  }, []);
  console.log(data)

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddDriver = () => {
    navigate("/dashboard/rated");
  };
  const handleDetails = () => {
    navigate("/dashboard/offline");
  };
  const handleRating = () => {
    navigate("/dashboard/unrated");
  };
  return (
    <div style={{ position: "relative" }}>
      <IconButton
        icon={<FaArrowLeft />}
        onClick={handleGoBack}
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          backgroundColor: "white",
        }}
      />
      <TableContainer bg="white" fontSize="18px" paddingBottom="50px">
        <Table variant="simple" size="md" paddingBottom="50px" color="gray">
          <Tbody>
            <Tr borderBottom="2px solid lightgray">
              <Td
                style={{
                  borderBottom: "2px solid #00A69C",
                  color: "#00A69C",
                  width: "10px",
                }}
              >
                {" "}
                Account
              </Td>
              <Td>Security</Td>
            </Tr>
            <Tr>
              <Td colSpan={5} style={{ textAlign: "center" }}>
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  marginTop="25px"
                  marginLeft="120px"
                >
                  <Avatar size="lg" name="John Doe" src={avatar1} />
                  <Box mt="2">{data?.id}</Box>
                  <Td>
                    <div
                      style={{
                        display: "inline-block",
                        background: "green",
                        color: "white",
                        padding: "5px",
                        borderRadius: "8px",
                      }}
                    >
                      Online
                    </div>
                  </Td>
                </Flex>
              </Td>
            </Tr>

            <Tr borderBottom="2px solid lightgray">
              <Td onClick={handleDetails} >
                {" "}
                Details
              </Td>
              <Td
                style={{
                  borderBottom: "2px solid #00A69C",
                  color: "#00A69C",
                  textAlign: "center",
                }}
              >
                {" "}
                Order
              </Td>
            </Tr>

            <Tr>
              <Td style={{ borderBottom: "1px solid lightgray" }}>ORDER ID</Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>
                ORDER DATE
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>
                CUSTOMER ID
              </Td>
              <Td
                style={{ borderBottom: "1px solid lightgray" }}
                className="star"
              >
                RATINGS
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>
                ORDER STATUS
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>AMOUNT</Td>
            </Tr>

            <Tr  cursor="pointer">
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                  cursor: "pointer",
                }}
                onClick={handleRating}
              >
               {data?.shipmentId}
              </Td>

              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                  {data?.date}
                </div>
              </Td>

              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.customerId}</Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
                className="star"
              >
                {data?.ratings ? data.ratings : "----"}
              </Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "", // Change the background color to blue
                    color: "#F9BF42",
                    padding: "5px",
                    borderRadius: "8px",
                  }}
                >
                  {data?.shipmentStatus}
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.price}</Td>
            </Tr>

            <Tr >
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                }}
                onClick={handleRating}
              >
               {data?.shipmentId}
              </Td>
              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                  {data?.date}
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.customerId}</Td>
              <Td
          style={{ borderBottom: "1px solid lightgray" }}
          className="star"
        >
          <Flex>
            {[1, 2, 3, 4, 5].map((index) => (
              <StarIcon
                key={index}
                color={index <= selectedRating ? "#00A69C" : "lightgray"}
                onClick={() => setSelectedRating(index)}
              />
            ))}
          </Flex>
        </Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "",
                    color: "#2593F0",
                    padding: "5px",
                    borderRadius: "8px",
                  }}
                >
                  {data?.shipmentStatus}
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.price}</Td>
            </Tr>

            <Tr >
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                  cursor:"pointer",
                }}
                onClick={handleAddDriver} cursor="pointer"
              >
                {data?.shipmentId}
              </Td>
              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                  {data?.date}
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.customerId}</Td>
              <Td
          style={{ borderBottom: "1px solid lightgray" }}
          className="star"
        >
          <Flex>
            {[1, 2, 3, 4, 5].map((index) => (
              <StarIcon
                key={index}
                color={index <= selectedRating ? "#00A69C" : "lightgray"}
                onClick={() => setSelectedRating(index)}
              />
            ))}
          </Flex>
        </Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "", // Change the background color to blue
                    color: "#2593F0",
                    padding: "5px",
                    borderRadius: "8px",
                  }}
                >
                  {data?.shipmentStatus}
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.price}</Td>
            </Tr>

            <Tr >
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                  cursor:"pointer",
                }}
                onClick={handleRating} cursor="pointer"
              >
                {data?.shipmentId}
              </Td>
              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                  {data?.date}
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.customerId}</Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
                className="star"
              >
               {data?.ratings ? data.ratings : "----"}
              </Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "", // Change the background color to blue
                    color: "#2593F0",
                    padding: "5px",
                    borderRadius: "8px",
                  }}
                >
                {data?.shipmentStatus}
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.price}</Td>
            </Tr>

            <Tr >
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                  cursor:"pointer",
                }}
              >
                {data?.shipmentId}
              </Td>
              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                 {data?.date}
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.customerId}</Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
                className="star"
              >
              {data?.ratings ? data.ratings : "----"}
              </Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "", // Change the background color to blue
                    color: "#FF3838",
                    padding: "5px",
                    borderRadius: "8px",
                  }}
                >
                 {data?.shipmentStatus}
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.price}</Td>
            </Tr>

            <Tr >
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                }}
                onClick={handleRating} cursor="pointer"
              >
                {data?.shipmentId}
              </Td>
              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                 {data?.date}
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.customerId}</Td>
              <Td
          style={{ borderBottom: "1px solid lightgray" }}
          className="star"
        >
          <Flex>
            {[1, 2, 3, 4, 5].map((index) => (
              <StarIcon
                key={index}
                color={index <= selectedRating ? "#00A69C" : "lightgray"}
                onClick={() => setSelectedRating(index)}
              />
            ))}
          </Flex>
        </Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "", // Change the background color to blue
                    color: "#2593F0",
                    padding: "5px",
                    borderRadius: "8px",
                  }}
                >
                  {data?.shipmentStatus}
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>{data?.price}</Td>
            </Tr>
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

export default OnlineRatin;
