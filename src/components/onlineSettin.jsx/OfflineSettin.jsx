import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Avatar,
  Box,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight, FaArrowLeft } from "react-icons/fa";
import avatar1 from "../../assets/img/avatar1.png";
import { useNavigate } from "react-router-dom";
import { customFetch } from "../../utils";
import React, { useState, useEffect } from "react";

const OfflineSettin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await customFetch.post(
          "/drivers/profile",
          {
            email: "driver001@gmail.com"
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJBZG1pbjEiLCJpYXQiOjE3MDQ0Mzc3NzYsImV4cCI6MTcwNDUyNDE3Nn0.YoTfMLvmyRPG3qn1yWaj-syCEARw9RlGytN4ZSw_N40I0Q_btTdOYWl61VAu31mY`,
            }
          }
        );
  
        // const driversData = response.data.content;
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


  const handleGoBaks = () => {
    // Navigate to the previous page
    navigate(-1);
  };

  const handleOrder = () => {
    navigate("/dashboard/offlinerating");
  };
  return (
    <div style={{ position: "relative" }}>
      <IconButton
        icon={<FaArrowLeft />}
        onClick={handleGoBaks}
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          backgroundColor: "white",
        }}
      />

      <TableContainer bg="white" fontSize="18px" paddingBottom="50px">
        <Table variant="simple" size="lg" paddingBottom="50px">
          <Tbody>
            <Tr borderBottom="2px solid lightgray">
              <Flex gap="70px" width="100%" marginLeft="80px">
                <Td
                  style={{
                    borderBottom: "2px solid #00A69C",
                    color: "#00A69C",
                  }}
                >
                  Account
                </Td>
                <Td> Security</Td>
              </Flex>
            </Tr>

            <Tr>
              <Td colSpan={4} textAlign="center">
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  marginTop="40px"
                  marginBottom="15px"
                  marginLeft="100px"
                >
                  <Avatar size="lg" name="John Doe" src={data?.userAvatar} />
                  <Box mt="2">{data?.driverId}</Box>
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
                      online
                    </div>
                  </Td>
                </Flex>
              </Td>
            </Tr>

            <Tr borderBottom="2px solid lightgray">
              <Flex gap="70px" width="100%" marginLeft="80px" cursor="pointer">
                <Td
                  style={{
                    borderBottom: "2px solid #00A69C",
                    color: "#00A69C",
                  }}
                >
                  Details
                </Td>
                <Td onClick={handleOrder}> Order</Td>
              </Flex>
            </Tr>

            <Tr width="">
              <Flex
                justifyContent=""
                gap="150px"
                width="100%"
                marginLeft="100px"
                css={`
                  @media (max-width: 768px) {
                    gap: 0px;
                    width: ;
                    margin-left: 0px;
                  }
                `}
              >
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md">
                    <b>Name </b>
                  </Td>
                  <Td fontSize="md" color='black'>{data?.name}</Td>
                </Flex>
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md">
                    <b>Gender</b>
                  </Td>
                  <Td fontSize="md">{data?.gender ? data.gender : "N/A"}</Td>
                </Flex>
              </Flex>
              <Flex
                justifyContent=""
                gap="150px"
                width="100%"
                marginLeft="100px"
                css={`
                  @media (max-width: 768px) {
                    gap: 0px;
                    width: ;
                    margin-left: 0px;
                  }
                `}
              >
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md">
                    <b>Phone</b>
                  </Td>
                  <Td fontSize="md">{data?.phone}</Td>
                </Flex>
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md">
                    <b>Email</b>
                  </Td>
                  <Td fontSize="md">{data?.email}</Td>
                </Flex>
              </Flex>
              <Flex
                justifyContent=""
                gap="150px"
                width="100%"
                marginLeft="100px"
                css={`
                  @media (max-width: 768px) {
                    gap: 0px;
                    width: ;
                    margin-left: 0px;
                  }
                `}
              >
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md">
                    <b>Adress</b>
                  </Td>
                  <Td fontSize="md">{data?.address ? data.address : "N/A"} </Td>
                </Flex>
                <Flex alignItems="" borderBottom="1px solid lightgray" marginLeft='40px'>
                  <Td fontSize="md" marginTop="">
                    <b>State</b>
                  </Td>
                  <Td fontSize="md" color="" >
                  {data?.state ? data.state : "N/A"}
                  </Td>
                </Flex>
              </Flex>
              <Flex
                justifyContent=""
                gap="150px"
                width="100%"
                marginLeft="100px"
                css={`
                  @media (max-width: 768px) {
                    gap: 0px;
                    width: ;
                    margin-left: 0px;
                  }
                `}
              >
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md">
                    <b>Next of Kin name </b>
                  </Td>
                  <Td fontSize="md">{data?.nextOfKinName}</Td>
                </Flex>
                <Flex alignItems="" borderBottom="1px solid lightgray" >
                  <Td fontSize="md">
                    <b>Phone</b>
                  </Td>
                  <Td fontSize="md" color="">
                  {data?.nextOfKinPhone ? data.nextOfKinPhone : "N/A"}
                  </Td>
                </Flex>
              </Flex>
              <Flex
                justifyContent=""
                gap="150px"
                width="100%"
                marginLeft="100px"
                css={`
                  @media (max-width: 768px) {
                    gap: 0px;
                    width: ;
                    margin-left: 0px;
                  }
                `}
              >
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md">
                    <b>Vehicle</b>
                  </Td>
                  <Td fontSize="md"> {data?.vehicleType ? data.vehicleType : "N/A"}</Td>
                </Flex>
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md" marginTop="">
                    <b>Vehicle Plate No</b>
                  </Td>
                  <Td fontSize="md" color="">
                  {data?.vehiclePlateNumber ? data.vehiclePlateNumber : "N/A"}
                  </Td>
                </Flex>
              </Flex>
              <Flex
                justifyContent=""
                gap="150px"
                width="100%"
                marginLeft="100px"
                css={`
                  @media (max-width: 768px) {
                    gap: 0px;
                    width: ;
                    margin-left: 0px;
                  }
                `}
              >
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md">
                    <b>License</b>
                  </Td>
                  <Td fontSize="md"> {data?.driversLicence ? data.driversLicence : "N/A"}</Td>
                </Flex>
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md" marginTop="">
                    <b>Rating</b>
                  </Td>
                  <Td fontSize="md" color="">
                    {data?.averageRatings}
                  </Td>
                </Flex>
              </Flex>
            </Tr>
          </Tbody>
        </Table>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginTop="70px"
          direction="column"
        >
          {/* Two buttons side by side */}
          <Flex>
            <Button colorScheme="#00A69C" bg="#00A69C" marginRight="4">
              Edit
            </Button>
            <Button
              colorScheme="white"
              color="#00A69C"
              border="2px solid #00A69C"
            >
              Message
            </Button>
          </Flex>

          {/* Larger button below them */}
          <Button size="lg" colorScheme="red" marginTop="5">
            Deactivate
          </Button>
        </Flex>
      </TableContainer>
    </div>
  );
};

export default OfflineSettin;
