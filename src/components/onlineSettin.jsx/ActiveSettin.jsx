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
  } from '@chakra-ui/react';
  import { FaChevronLeft, FaChevronRight, FaArrowLeft } from 'react-icons/fa';
  import avatar1 from "../../assets/img/avatar1.png";
import { useNavigate } from 'react-router-dom';

const ActiveSettin = () => {

  const navigate = useNavigate();

  const handleGoBaks = () => {
    // Navigate to the previous page
    navigate(-1);
  };

  const handleOrder = () => {
    // Add logic to handle the "Order" click (if needed)
    // Once the logic is executed, navigate to the "rating" page
    navigate('/activerating');
  };
  return (
    <div style={{ position: 'relative' }}>
    {/* Arrow icon positioned at the top right corner */}
    <IconButton
    icon={<FaArrowLeft />}
    onClick={handleGoBaks}
    style={{ position: 'absolute', top: 5, right: 5, backgroundColor: 'white' }}
  />

    <TableContainer bg="white" fontSize="18px" paddingBottom="50px">
      <Table variant="simple" size="lg" paddingBottom="50px">
        <Tbody>
        <Tr borderBottom="2px solid lightgray">
            <Flex gap='70px' width="100%" marginLeft='80px'>
          <Td
            style={{ borderBottom: "2px solid #00A69C", color: "#00A69C" }}
          >
            Account
          </Td>
          <Td> Security</Td>
          </Flex>
        </Tr>

        <Tr>
          <Td colSpan={6} textAlign="center">
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              marginTop="40px"
              marginBottom="15px"
            >
              <Avatar size="lg" name="John Doe" src={avatar1} />
              <Box mt="2">DDID-247</Box>
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
            <Flex gap='70px' width="100%" marginLeft='80px' cursor='pointer'>
          <Td
            style={{ borderBottom: "2px solid #00A69C", color: "#00A69C" }}
          >
            Details
          </Td>
          <Td onClick={handleOrder}> Order</Td>
          </Flex>
        </Tr>

  <Tr width=''>
      <Flex justifyContent="" gap='150px' width="100%" marginLeft='100px'>
       
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md"><b>Name </b></Td>
            <Td fontSize="md">David Balogun</Td>
          </Flex>
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md"><b>Gender</b></Td>
            <Td fontSize="md">Male</Td>
          </Flex>
    </Flex>
      <Flex justifyContent="" gap='150px' width="100%" marginLeft='100px'>
        
        <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md"><b>Phone</b></Td>
            <Td fontSize="md">080123456789</Td>
          </Flex>
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md"><b>Email</b></Td>
            <Td fontSize="md">davidb@gmail.com</Td>
          </Flex>
    </Flex>
      <Flex justifyContent="" gap='120px' width="100%" marginLeft='100px'>
       
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md"><b>Adress</b></Td>
            <Td fontSize="md">No 1, David street  </Td>
          </Flex>
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md" marginTop=''><b>State</b></Td>
            <Td fontSize="md" color="">Lagos</Td>
          </Flex>
    </Flex>
      <Flex justifyContent="" gap='100px' width="100%" marginLeft='100px'>
       
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md"><b>Next of Kin name </b></Td>
            <Td fontSize="md">Bello Saka</Td>
          </Flex>
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md" marginTop=''><b>Phone</b></Td>
            <Td fontSize="md" color="">08012345678</Td>
          </Flex>
    </Flex>
      <Flex justifyContent="" gap='210px' width="100%" marginLeft='100px'>
       
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md"><b>Vehicle</b></Td>
            <Td fontSize="md">Truck</Td>
          </Flex>
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md" marginTop=''><b>Vehicle</b></Td>
            <Td fontSize="md" color="">KSF-234U-ER</Td>
          </Flex>
    </Flex>
      <Flex justifyContent="" gap='150px' width="100%" marginLeft='100px'>
       
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md"><b>License</b></Td>
            <Td fontSize="md">08012345678</Td>
          </Flex>
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md" marginTop=''><b>Rating</b></Td>
            <Td fontSize="md" color="">4.5</Td>
          </Flex>
    </Flex>
    
    </Tr>
        </Tbody>
      </Table>
      <Flex justifyContent="space-between" alignItems="center" marginTop="70px" direction="column">
    {/* Two buttons side by side */}
    <Flex>
      <Button colorScheme="#00A69C" bg='#00A69C' marginRight="4">Edit</Button>
      <Button colorScheme="white" color='#00A69C' border='2px solid #00A69C'>Message</Button>
    </Flex>

    {/* Larger button below them */}
    <Button size="lg" colorScheme="green" marginTop="5">
      Deactivate
    </Button>
  </Flex>
    </TableContainer>
  </div>
  )
}

export default ActiveSettin