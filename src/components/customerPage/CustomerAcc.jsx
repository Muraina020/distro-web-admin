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
  import man from "../../assets/img/man.png";
import { useNavigate } from 'react-router-dom';

const CustomerAcc = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
      // Navigate to the previous page
      navigate(-1);
    };

    const handleOrder = () => {
      // Add logic to handle the "Order" click (if needed)
      // Once the logic is executed, navigate to the "rating" page
      navigate('/customrating');
    };
  return (
    <div style={{ position: 'relative' }}>
    {/* Arrow icon positioned at the top right corner */}
    <IconButton
    icon={<FaArrowLeft />}
    onClick={handleGoBack}
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
              <Avatar size="lg" name="John Doe" src={man} />
              <Box mt="2">DDID-247</Box>
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
            <Td fontSize="md"><b>Username</b></Td>
            <Td fontSize="md">Balogun</Td>
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
            <Td fontSize="md"><b>Mast Active</b></Td>
            <Td fontSize="md">i5 minutes</Td>
          </Flex>
          <Flex alignItems="" borderBottom="1px solid lightgray">
            <Td fontSize="md" marginTop=''><b>Date Joined</b></Td>
            <Td fontSize="md" color="">4/7/2021</Td>
          </Flex>
    </Flex>
      
    </Tr>
        </Tbody>
      </Table>
      <Flex justifyContent="space-between" alignItems="center" marginTop="70px" direction="column">
    {/* Two buttons side by side */}
    <Flex>
      <Button colorScheme="white" color='#00A69C' border='2px solid #00A69C' marginTop='3px'>Message</Button>
      <Button size="lg" colorScheme="red" marginLeft='10px'>
      Deactivate
    </Button>
    </Flex>

    {/* Larger button below them */}
    
  </Flex>
    </TableContainer>
  </div>
  )
}

export default CustomerAcc