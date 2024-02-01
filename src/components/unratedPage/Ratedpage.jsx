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
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaArrowLeft } from "react-icons/fa";
import cube from "../../assets/img/cube.png";
import man from "../../assets/img/man.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { customFetch } from "../../utils";

const Ratedpage = () => {
  const mobileTrWidth = useBreakpointValue({ base: "400px", md: "100%" });
  const mobileWidth = useBreakpointValue({ base: "400px", md: "100%" });

  // const [data, setData] = useState([]);
  const [data, setData] = useState({});


  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await customFetch.get("/pickuporders/info/109");

      
        setData(response.data);
      // console.log(response.data);
      // console.log(response.data.dropOffs);
      console.log(response.data.dropOffs[0].receiverAddress);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      }
    };

    fetchDrivers();
  }, []);
  // console.log(data);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div style={{ position: "relative", overflowX: "auto", maxWidth: "100%" }}>
      <IconButton
        icon={<FaArrowLeft />}
        onClick={handleGoBack}
        style={{
          position: "absolute",
          top: 5,
          left: 5,
          backgroundColor: "white",
          color: "gray",
        }}
      />

      <TableContainer
        bg="white"
        fontSize="18px"
        paddingBottom="50px"
        overflowX="auto"
      >
        <Table
          variant="simple"
          size="lg"
          paddingBottom="50px"
          width={mobileWidth}
          maxWidth={{ base: "400px", md: "100%" }}
        >
          <Tbody>
            <Tr borderBottom="2px solid lightgray" width={mobileTrWidth}>
              <Td>
                <Flex alignItems="center">
                  <Avatar size="lg" name="John Doe" src={data?.userAvatar} />
                  <Flex flexDirection="column" alignItems="center">
                    <Td fontSize="md" marginLeft="">
                      <b>{data?.shipmentId}</b>
                    </Td>
                    <Td fontSize="md" color="gray.500" marginTop="">
                      {data?.date}{" "}
                    </Td>
                  </Flex>
                </Flex>
              </Td>
              <td>
                <Flex flexDirection="column" alignItems="center">
                  <Td fontSize="md" marginTop="15px">
                    <b>{data?.price}</b>
                  </Td>
                  <Td fontSize="md" color="#00A69C" fontWeight="600">
                    {data?.paymentStatus}
                  </Td>
                </Flex>
              </td>
            </Tr>

            <Tr>
              <Flex
                justifyContent=""
                gap="250px"
                width="300px"
                marginLeft="0px"
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
                    <b>Customer ID</b>
                  </Td>
                  <Td fontSize="md">{data?.customerId}</Td>
                </Flex>
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md">
                    <b>Name</b>
                  </Td>
                  <Td fontSize="md">{data?.senderName}</Td>
                </Flex>
              </Flex>

              <Flex
                justifyContent=""
                gap="200px"
                width="300px"
                marginLeft="0px"
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
                    <b>Customer Phone</b>
                  </Td>
                  <Td fontSize="md">{data?.senderPhoneNo}</Td>
                </Flex>
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md">
                    <b>Distance</b>
                  </Td>
                  <Td fontSize="md">{data?.distance}</Td>
                </Flex>
              </Flex>

              <Flex
                justifyContent=""
                gap="250px"
                width="300px"
                marginLeft="0px"
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
                    <b>Package Type</b>
                  </Td>
                  <Td fontSize="md">{data?.itemName}</Td>
                </Flex>
                <Flex alignItems="" borderBottom="1px solid lightgray">
                  <Td fontSize="md" marginTop="">
                    <b>Status</b>
                  </Td>
                  <Td fontSize="md" color="#F9BF42">
                    {data?.status}
                  </Td>
                </Flex>
              </Flex>
            </Tr>

            <Tr>
              <Flex
                justifyContent=""
                gap="150px"
                width="300px"
                marginLeft="0px"
                borderBottom="1px solid lightgray"
                css={`
                  @media (max-width: 768px) {
                    gap: 0px;
                    width: ;
                    margin-left: 0px;
                  }
                `}
              >
                <Td fontSize="md">
                  <b>Special Instruction</b>
                </Td>
                <Td fontSize="md">{data?.specialInstruction} </Td>
              </Flex>
            </Tr>
            <Tr>
              <Flex
                justifyContent=""
                gap="150px"
                width="300px"
                marginLeft="0px"
                borderBottom="1px solid lightgray"
                css={`
                  @media (max-width: 768px) {
                    gap: 0px;
                    width: ;
                    margin-left: 0px;
                  }
                `}
              >
                <Td fontSize="md">
                  <b>Pickup</b>
                </Td>
                <Td fontSize="md">{data?.senderAddress}</Td>
              </Flex>
            </Tr>
            <Tr>
              <Flex
                justifyContent=""
                gap="250px"
                width="300px"
                marginLeft="0px"
                borderBottom="1px solid lightgray"
                css={`
                  @media (max-width: 768px) {
                    gap: 0px;
                    width: ;
                    margin-left: 0px;
                  }
                `}
              >
                <Td fontSize="md">
                  <b>Destination </b>
                </Td>
                <Td fontSize="md">
  {data?.dropOffs && data.dropOffs.length > 0
    ? data.dropOffs[0].receiverAddress
    : "N/A"}
</Td>

              </Flex>
            </Tr>
          </Tbody>
          <Tr borderBottom="2px solid lightgray">
            <Td>
              <Flex alignItems="center">
                <Avatar size="lg" name="John Doe" src={data?.userAvatar} />
                <Flex flexDirection="column" alignItems="center">
                  <Td fontSize="md" marginLeft="">
                    <b>{data?.shipmentId}</b>
                  </Td>
                  <Td fontSize="md" color="gray.500" marginTop="">
                    {data?.date}{" "}
                  </Td>
                </Flex>
              </Flex>
            </Td>

            <Td style={{ borderBottom: "1px solid lightgray" }}>
              <Flex>
                {[1, 2, 3, 4].map((index) => (
                  <StarIcon key={index} color="#00A69C" />
                ))}
                <StarIcon key={5} color="lightgray" />
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Flex
              alignItems=""
              borderBottom="1px solid lightgray"
              marginLeft="50px"
            >
              <Td fontSize="md">
                <b>Special Instruction</b>
              </Td>
              <Td fontSize="md">{data?.specialInstruction} </Td>
            </Flex>
          </Tr>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Ratedpage;
