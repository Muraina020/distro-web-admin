import React, { useState } from "react";
import "./customer.css";
import man from "../../assets/img/man.png";
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
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { StarIcon } from "@chakra-ui/icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CustomerRating = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate to the previous page
    navigate(-1);
  };

  const handleOrder = () => {
    navigate("/dashboard/customeracc");
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
                  <Avatar size="lg" name="John Doe" src={man} />
                  <Box mt="2">DDID-247</Box>
                </Flex>
              </Td>
            </Tr>

            <Tr borderBottom="2px solid lightgray" cursor="pointer">
              <Td onClick={handleOrder}> Details</Td>
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

            <Tr>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                DL-5679-435EX
              </Td>

              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                  Mon Jun 2 2023
                  <br />
                  <span
                    style={{
                      marginTop: "10px",
                      display: "inline-block",
                      textAlign: "center",
                      marginLeft: "15px",
                    }}
                  >
                    12:38:37
                  </span>
                </div>
              </Td>

              <Td style={{ borderBottom: "1px solid lightgray" }}>DCIC-247</Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
                className="star"
              >
                ---
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
                  Pending
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>N5,600</Td>
            </Tr>
            <Tr>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                DL-5679-435EX
              </Td>
              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                  Mon Jun 2 2023
                  <br />
                  <span
                    style={{
                      marginTop: "10px",
                      display: "inline-block",
                      textAlign: "center",
                      marginLeft: "15px",
                    }}
                  >
                    12:38:37
                  </span>
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>DCIC-247</Td>
              <Td
                style={{ borderBottom: "1px solid lightgray" }}
                className="star"
              >
                <Flex>
                  {[1, 2, 3, 4].map((index) => (
                    <StarIcon key={index} color="#00A69C" />
                  ))}
                  <StarIcon key={5} color="lightgray" />
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
                  Delivered
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>N5,600</Td>
            </Tr>
            <Tr>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                DL-5679-435EX
              </Td>
              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                  Mon Jun 2 2023
                  <br />
                  <span
                    style={{
                      marginTop: "10px",
                      display: "inline-block",
                      textAlign: "center",
                      marginLeft: "15px",
                    }}
                  >
                    12:38:37
                  </span>
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>DCIC-247</Td>
              <Td
                style={{ borderBottom: "1px solid lightgray" }}
                className="star"
              >
                <Flex>
                  {[1, 2, 3, 4].map((index) => (
                    <StarIcon key={index} color="#00A69C" />
                  ))}
                  <StarIcon key={5} color="lightgray" />
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
                  Delivered
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>N5,600</Td>
            </Tr>

            <Tr>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                DL-5679-435EX
              </Td>
              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                  Mon Jun 2 2023
                  <br />
                  <span
                    style={{
                      marginTop: "10px",
                      display: "inline-block",
                      textAlign: "center",
                      marginLeft: "15px",
                    }}
                  >
                    12:38:37
                  </span>
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>DCIC-247</Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
                className="star"
              >
                ---
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
                  Delivered
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>N5,600</Td>
            </Tr>

            <Tr>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                DL-5679-435EX
              </Td>
              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                  Mon Jun 2 2023
                  <br />
                  <span
                    style={{
                      marginTop: "10px",
                      display: "inline-block",
                      textAlign: "center",
                      marginLeft: "15px",
                    }}
                  >
                    12:38:37
                  </span>
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>DCIC-247</Td>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  textAlign: "center",
                }}
                className="star"
              >
                ---
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
                  Canceled
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>N5,600</Td>
            </Tr>

            <Tr>
              <Td
                style={{
                  borderBottom: "1px solid lightgray",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                DL-5679-435EX
              </Td>
              <Td
                style={{ borderBottom: "1px solid lightgray", textAlign: "" }}
              >
                <div style={{ marginTop: "5px" }}>
                  Mon Jun 2 2023
                  <br />
                  <span
                    style={{
                      marginTop: "10px",
                      display: "inline-block",
                      textAlign: "center",
                      marginLeft: "15px",
                    }}
                  >
                    12:38:37
                  </span>
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>DCIC-247</Td>
              <Td
                style={{ borderBottom: "1px solid lightgray" }}
                className="star"
              >
                <Flex>
                  {[1, 2, 3, 4].map((index) => (
                    <StarIcon key={index} color="#00A69C" />
                  ))}
                  <StarIcon key={5} color="lightgray" />
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
                  Delivered
                </div>
              </Td>
              <Td style={{ borderBottom: "1px solid lightgray" }}>N5,600</Td>
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

export default CustomerRating;
