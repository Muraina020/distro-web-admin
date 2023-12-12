import React, { useState } from "react";
import "./customer.css"
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
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "online" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "no order" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "online" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "no order" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "online" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "no order" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "online" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "no order" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "online" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "pending" },
  { id: "DDIC-247", name: "David Balogun", email: "davidb@gmail.com", phone: "08012345678", status: "no order" },
];

const CustomerPage = () => {
  const [data, setData] = useState(sampleData);

  const navigate = useNavigate();

  const handleOrder = () => {
    // Add logic to handle the "Order" click (if needed)
    // Once the logic is executed, navigate to the "rating" page
    navigate('/customeracc');
  };

  return (
    <div>
      <TableContainer bg="white" className="table-container-mobile" fontSize="18px" paddingBottom="30px">
        <Table variant="simple" size="lg" paddingBottom="50px">
          <Thead>
            <Tr borderBottom="2px solid lightgray">
              <Th>DRIVER ID</Th>
              <Th>NAME</Th>
              <Th className="email-head">EMAIL</Th>
              <Th isNumeric>PHONE NUMBER</Th>
              <Th>CURRENT ORDERS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index} borderBottom="2px solid lightgray" cursor='pointer' color='#696969' onClick={handleOrder}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td className="email-column">{item.email}</Td>
                <Td isNumeric>{item.phone}</Td>
                <Td>
                  <div
                    style={{
                      background: item.status === 'pending' || item.status === 'no order' ? '#868686' : '#F9BF42',
                      color: item.status === 'pending' || item.status === 'no order' ? "white" : "green",
                      textAlign: 'center',
                      padding: "5px",
                      width: "90px",
                      marginLeft: "15px",
                      borderRadius: "8px",
                    }}
                  >
                    {item.status}
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
  );
}

export default CustomerPage;
