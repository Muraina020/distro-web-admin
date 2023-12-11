import React from 'react';
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Flex,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import upload from "../../assets/img/upload.png";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const navigate = useNavigate();

  const handleAddDriver = () => {
    // Add logic to handle adding driver (validate fields, upload image, etc.)
    // Once the driver is successfully added, navigate to the success page
    navigate('/success');
  };
    
  return (
    <div>
    <TableContainer bg="white" fontSize="18px" paddingBottom="50px">
      <Table variant="simple" size="lg" paddingBottom="50px">
        <Tbody>
        <style>
        {`
          @media screen and (max-width: 600px) {
            /* Adjust styles for small screens here */
            .responsive-input {
              width: 200px;
            }
            .responsive-button {
              width: 300px; /* Set the width to 100% for small screens */
              margin-left: 180px;
               /* Reset margin-left for small screens */
            }
            .upload{
              margin-left: 220px
            }
            .upload-text{
              margin-left: 220px
            }

          }
        `}
      </style>
        <Tr>
            <Td>
              <Flex
                direction="row"
                alignItems="center"
                justifyContent="center"
                marginTop="10px" // Adjusted marginTop
                marginBottom="15px"
                marginLeft='120px'
              >
                <Input
                   className="responsive-input"
                   placeholder="Firstname"
                   border="2px solid gray"
                   borderRadius="4px"
                   p="2"
                   width="330px"
                   height="40px"
                   margin="0 10px 0 0"
                   cursor="pointer"
                />
                <ChevronDownIcon
                  boxSize={6}
                  color="gray.500"
                  cursor="pointer"
                  marginLeft="-40px" // Adjusted marginLeft
                />
                <Input
                 className="responsive-input"
                  placeholder="Vehicle Plate Number "
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 0 0 10px"
                  cursor='pointer'
                />
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td>
            <Flex
                direction="row"
                alignItems="center"
                justifyContent="center"
                marginTop="10px" // Adjusted marginTop
                marginBottom="15px"
                marginLeft='120px'
              >
                <Input
                 className="responsive-input"
                  placeholder="Vehicle Plate Number "
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 0 0 0px"
                  cursor='pointer'
                  marginRight='5px'
                />
                 <Input
                   className="responsive-input"
                   placeholder="Firstname"
                   border="2px solid gray"
                   borderRadius="4px"
                   p="2"
                   width="330px"
                   height="40px"
                   margin="0 10px 0 0"
                   cursor="pointer"
                />
                <ChevronDownIcon
                  boxSize={6}
                  color="gray.500"
                  cursor="pointer"
                  marginLeft="-40px" // Adjusted marginLeft
                />
              </Flex>
            </Td>
          </Tr>

          <Tr>
            <Td>
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                marginTop="10px"
                marginBottom="15px"
              >
                <div
                className='upload'
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: 'lightgray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px',
                  }}
                >
                  <img
                    src={upload}
                    alt=""
                    style={{ width: '50%', height: '50%', borderRadius: '50%' }}
                
                  />
                </div>
                <Text color="#00A69C" fontSize="lg" marginTop='10px' className='upload-text'>
                  UPLOAD DRIVER'S PICTURE
                </Text>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      
     

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="center"
        marginTop="20px"
      >
       <Button colorScheme="teal" size="lg" width="300px" onClick={handleAddDriver}>
          Add Driver
        </Button>
      </Flex>
    </TableContainer>
  </div>
  )
}

export default UploadPage