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

const CustomerPage = () => {
  // const [data, setData] = useState(sampleData);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); 
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    const fetchDrivers = async () => {
      setIsLoading(true)
      try {
        const response = await customFetch(
          `https://apps-1.lampnets.com/distro/customers/all?pageNo=${currentPage - 1}&pageSize=${itemsPerPage}&sortBy=id&sortDir=asc`
        );
        const driversData = response.data.content;
        setData(driversData);
        setTotalPages(Math.ceil(response.data.totalElements / itemsPerPage));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Set loading state to false after fetching data
      }
    };

    fetchDrivers();
  }, [currentPage, itemsPerPage]);

  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowClick = (email) => {
    navigate(`/dashboard/customers/${email}`);
  };
  return (
    <div>
      <TableContainer bg="white"  fontSize="18px" paddingBottom="30px">
        <Table variant="simple" size="lg" paddingBottom="50px">
          <Thead>
            <Tr borderBottom="2px solid lightgray">
              <Th>CUSTOMER ID</Th>
              <Th>NAME</Th>
              <Th className="email-head">EMAIL</Th>
              <Th isNumeric>PHONE NUMBER</Th>
              <Th>CURRENT ORDERS STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
          {isLoading ? (
              <Tr>
                <Td colSpan={5} textAlign="center" color='#00A69C' >Loading...</Td>
              </Tr>
            ) : (
              <>
            {data.map((item, index) => (
              <Tr key={index} borderBottom="2px solid lightgray" color='#696969' 
              onClick={() => handleRowClick(item?.email)}>
                <Td onClick={handleOrder} cursor='pointer'>{item?.customerId}</Td>
                <Td>{item?.name}</Td>

                <Link className="email-column" to={`/dashboard/customers/${item?.email}`}> <Td className="email-column">{item?.email}</Td>
                   </Link>
                   
                <Td isNumeric>{item?.phone}</Td>
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
                    {item?.currentOrderStatus}
                  </div>
                </Td>
              </Tr>
            ))}
            </>
            )}
          </Tbody>
        </Table>

        <Flex justifyContent="center" marginTop="10" alignItems="center">
          <FaChevronLeft onClick={() => handlePageChange(currentPage - 1)} />
          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              style={{ margin: "0 10px", color: index + 1 === currentPage ? '#00A69C' : 'black', cursor: 'pointer' }}
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
}

export default CustomerPage;
