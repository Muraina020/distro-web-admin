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
  import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";
  import { FaChevronLeft, FaChevronRight, FaArrowLeft } from "react-icons/fa";
  import avatar1 from "../../assets/img/avatar1.png";
  import { Link, useNavigate } from "react-router-dom";
  import { customFetch } from "../../utils";
  import React, { useState, useEffect } from "react";
  import { useParams } from "react-router-dom";

const SingleCustomer = () => {

    const navigate = useNavigate();
    const { email } = useParams();
    console.log(email);
  
    const [pageState, setPageState] = useState("details");
    const [data, setData] = useState([]);
    const [orderData, setOrderData] = useState([]);
  
    const fetchDriverProfile = async () => {
      try {
        const response = await customFetch.get(`/profiles/user?email=${email}`);
  
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching driver profile:", error);
        // Handle the error as needed
      }
    };
    const fetchDriverOrders = async () => {
      try {
        const response = await customFetch.get(`/customer/orders?email=${email}`);
  
        setOrderData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching driver order:", error);
        // Handle the error as needed
      }
    };
  
    useEffect(() => {
      fetchDriverProfile();
      fetchDriverOrders();
      console.log(pageState);
      console.log(orderData);
    }, [email, pageState]);
    console.log(data);
  
    const handleDetails = () => {
      setPageState("details");
    };
    const handleOrders = () => {
      setPageState("orders");
    };
    const handleGoBaks = () => {
      navigate(-1);
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
    {pageState === "details" ? (
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
                  <Box mt="2">{data?.customerId}</Box>
                  {/* <Td>
                    <div
                      className={`${
                        data?.currentStatus === "active"
                          ? "bg-green-800"
                          : data.currentStatus === "inactive"
                          ? "bg-yellow-400"
                          : "bg-yellow-400"
                      } text-white p-[5px] inline-block rounded-lg`}
                    >
                      {data?.currentStatus === "active"
                        ? "online"
                        : data.currentStatus === "inactive"
                        ? "offline"
                        : "unverified"}
                    </div>
                  </Td> */}
                </Flex>
              </Td>
            </Tr>

            <Tr borderBottom="2px solid lightgray">
              <Flex
                gap="70px"
                width="100%"
                marginLeft="80px"
                cursor="pointer"
              >
                <Td
                  style={{
                    borderBottom: "2px solid #00A69C",
                    color: "#00A69C",
                  }}
                  onClick={handleDetails}
                >
                  Details
                </Td>
                <Td onClick={handleOrders}> Order</Td>
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
                  <Td fontSize="md" color="black">
                    {data?.firstname}
                  </Td>
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
                <Flex alignItems="" borderBottom="1px solid lightgray">
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
                    <b>Date of Birth</b>
                  </Td>
                  <Td fontSize="md">
                    {" "}
                    {data?.dateofbirth ? data.dateofbirth : "N/A"}
                  </Td>
                </Flex>
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md" marginTop="">
                    <b>Date Joined</b>
                  </Td>
                  <Td fontSize="md" color="">
                    {data?.dateJoined
                      ? data.dateJoined
                      : "N/A"}
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
                  <Td fontSize="md">
                    {data?.driversLicence ? data.driversLicence : "N/A"}
                  </Td>
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

          <Button size="lg" colorScheme="red" marginTop="5">
            Deactivate
          </Button>
        </Flex>
      </TableContainer>
    ) : null}
    {pageState === "orders" ? (
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
                  <Avatar size="lg" name="John Doe" src={data?.userAvatar} />
                  <Box mt="2"> {data?.driverId}</Box>
                  <Td>
                    <div
                      className={`${
                        data?.currentStatus === "active"
                          ? "bg-green-800"
                          : data.currentStatus === "inactive"
                          ? "bg-yellow-400"
                          : "bg-yellow-400"
                      } text-white p-[5px] inline-block rounded-lg`}
                    >
                      {data?.currentStatus === "active"
                        ? "online"
                        : data.currentStatus === "inactive"
                        ? "offline"
                        : "unverified"}
                    </div>
                  </Td>
                </Flex>
              </Td>
            </Tr>

            <Tr borderBottom="2px solid lightgray">
              <Td onClick={handleDetails}> Details </Td>
              <Td
                style={{
                  borderBottom: "2px solid #00A69C",
                  color: "#00A69C",
                  textAlign: "center",
                }}
                onClick={handleOrders}
              >
                Order
              </Td>
            </Tr>

            <Tr>
              <Td style={{ borderBottom: "1px solid lightgray" }}>
                ORDER ID
              </Td>
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

            {orderData.content.length > 0 ? (
              orderData.content.map((order) => {
                console.log(order.rating);
                return (
                  <Tr key={order.id} cursor="pointer">
                    <Link to={`/dashboard/order/${order?.id}`}>
                      <Td
                        style={{
                          borderBottom: "1px solid lightgray",
                          fontWeight: "600",
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        {order?.shipmentId}
                      </Td>
                    </Link>
                    <Td
                      style={{
                        borderBottom: "1px solid lightgray",
                        textAlign: "",
                      }}
                    >
                      <div style={{ marginTop: "5px" }}>{order?.date}</div>
                    </Td>

                    <Td style={{ borderBottom: "1px solid lightgray" }}>
                      {order?.customerId}
                    </Td>

                    <Td
                      style={{
                        borderBottom: "1px solid lightgray",
                        textAlign: "center",
                        display: "flex",
                        gap: "3px",
                      }}
                      className="star"
                    >
                      {Array(5)
                        .fill("_")
                        .map((star, index) => (
                          <div
                            className={`${
                              index < order?.rating
                                ? "text-[green]"
                                : "text-slate-400"
                            }  text-xs md:text-xl`}
                            key={index}
                          >
                            {index < order?.rating ? (
                              index === Math.floor(order?.rating) &&
                              order?.rating % 1 !== 0 ? (
                                <BsStarHalf />
                              ) : (
                                <BsStarFill />
                              )
                            ) : (
                              <BsStar />
                            )}
                          </div>
                        ))}
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
                        {order?.shipmentStatus}
                      </div>
                    </Td>

                    <Td style={{ borderBottom: "1px solid lightgray" }}>
                      {order?.price}
                    </Td>
                  </Tr>
                );
              })
            ) : (
              <div className="h-[10vh] flex justify-center items-center text-sm text-center font-semibold text-slate-500 w-full">
                <div>No order for this Driver</div>
              </div>
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
    ) : null}
  </div>
  )
}

export default SingleCustomer