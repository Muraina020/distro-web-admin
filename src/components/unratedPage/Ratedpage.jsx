import React from 'react';
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
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaArrowLeft } from 'react-icons/fa';
import cube from "../../assets/img/cube.png";
import man from "../../assets/img/man.png";
import { useNavigate } from 'react-router-dom';

const Ratedpage = () => {

  const navigate = useNavigate();

  const handleGoBacks = () => {
    // Navigate to the previous page
    navigate(-1);
  };
  return (
    <div style={{ position: 'relative' }}>
    {/* Arrow icon positioned at the top right corner */}
    <IconButton
        icon={<FaArrowLeft />}
        onClick={handleGoBacks}
        style={{ position: 'absolute', top: 5, left: 5, backgroundColor: 'white', color: 'gray'}}
      />

    <TableContainer bg="white" fontSize="18px" paddingBottom="50px">
      <Table variant="simple" size="lg" paddingBottom="50px">
        <Tbody>
        <Tr borderBottom="2px solid lightgray">
        <Td>
          <Flex  alignItems="center">
          <Avatar size="lg" name="John Doe" src={cube} />
            <Flex flexDirection="column" alignItems="center">
              <Td fontSize="md" marginLeft=""><b>DL-5679-435EX</b></Td>
              <Td fontSize="md" color="gray.500" marginTop="">Mon Jun 2 2023 12:38:37 </Td>
            </Flex>
            </Flex>
        </Td>
        <td>
        <Flex flexDirection="column" alignItems="center">
              <Td fontSize="md" marginTop='15px'><b>N5,600</b></Td>
              <Td fontSize="md" color="#00A69C" fontWeight='500'>Paid</Td>
            </Flex>
          </td>
      </Tr>

      <Tr>
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
              <Td fontSize="md"><b>Customer ID</b></Td>
              <Td fontSize="md">DCID-234</Td>
            </Flex>
            <Flex alignItems="" borderBottom="1px solid lightgray">
              <Td fontSize="md"><b> Name</b></Td>
              <Td fontSize="md">Bankuli Kofi</Td>
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
              <Td fontSize="md"><b>Customer Phone</b></Td>
              <Td fontSize="md">080123456789</Td>
            </Flex>
            <Flex alignItems="" borderBottom="1px solid lightgray">
              <Td fontSize="md"><b>Distance</b></Td>
              <Td fontSize="md">50km</Td>
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
              <Td fontSize="md"><b>Package Type</b></Td>
              <Td fontSize="md">Food items</Td>
            </Flex>
            <Flex alignItems="" borderBottom="1px solid lightgray">
              <Td fontSize="md" marginTop=''><b>Status</b></Td>
              <Td fontSize="md" color="#2593F0">Delivered</Td>
            </Flex>
      </Flex>
      </Tr>
       
       <Tr >
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
              <Td fontSize="md"><b>Special Instruction</b></Td>
              <Td fontSize="md">Breakable items, be careful when carrying it </Td>
            </Flex>
       </Tr>
       <Tr>
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
              <Td fontSize="md"><b>Pickup</b></Td>
              <Td fontSize="md">36 Adeola Adeleye Street, Ilupeju, Lagos</Td>
            </Flex>
       </Tr>
       <Tr>
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
              <Td fontSize="md"><b>Destination </b></Td>
              <Td fontSize="md">23 Ikorodu-Ososun Rd, ilupeju, Lagos</Td>
            </Flex>
       </Tr>
        </Tbody>
         <Tr borderBottom="2px solid lightgray">
        <Td>
          <Flex  alignItems="center">
          <Avatar size="lg" name="John Doe" src={man} />
            <Flex flexDirection="column" alignItems="center">
              <Td fontSize="md" marginLeft=""><b>DL-5679-435EX</b></Td>
              <Td fontSize="md" color="gray.500" marginTop="">Mon Jun 2 2023 12:38:37 </Td>
            </Flex>
            </Flex>
        </Td>
       
            <Td style={{ borderBottom: '1px solid lightgray' }}>
                <Flex>
                  {[1, 2, 3, 4].map((index) => (
                    <StarIcon key={index} color="#00A69C" />
                  ))}
                  <StarIcon key={5} color="lightgray" />
                </Flex>
              </Td>
      </Tr>
      <Tr >
       <Flex alignItems="" borderBottom="1px solid lightgray" marginLeft='50px'>
              <Td fontSize="md"><b>Special Instruction</b></Td>
              <Td fontSize="md">Breakable items, be careful when carrying it </Td>
            </Flex>
       </Tr>
      </Table>
     </TableContainer>
  </div>
  )
}

export default Ratedpage