import React, { useState } from 'react';
import {
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Input,
  Button,
} from '@chakra-ui/react';

import { ChevronDownIcon } from "@chakra-ui/icons";
import UploadPage from './UploadPage';

const AddDriverPage = () => {
    const [section, setSection] = useState('account');
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);

  const handleToggleSection = (selectedSection) => {
    setSection(selectedSection);
  };

  const handleContinue = () => {
    if (section === 'account') {
      setSection('personal');
    } else if (section === 'personal') {
      setSection('upload'); // Change section to 'upload' after personal information
    }
    // Add other conditions as needed for additional sections
  };

  return (
    <div>
      <TableContainer bg="white" fontSize="18px" paddingBottom="50px">
        <Table variant="simple" size="lg" paddingBottom="50px">
          <Tbody>
          <style>
        {`
          @media screen and (max-width: 600px) {
            .respond-td {
              width: 100%; 
              font-size: 13px;
              
            }
          }
        `}
      </style>
            <Tr  className='respond-td'>
              <Flex
                direction="row"
                alignItems="center"
                justifyContent="center"
                marginTop="10px"
                marginBottom="15px"
              >
                <Th
                className='respond-td'
                  style={{
                    borderBottom: section === 'account' ? "2px solid teal" : "2px solid gray",
                    color: section === 'account' ? "teal" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => handleToggleSection('account')}
                >
                  Account information
                </Th>
                <Th
                 className='respond-td'
                  style={{
                    borderBottom: section === 'personal' ? "2px solid teal" : "2px solid gray",
                    color: section === 'personal' ? "teal" : "gray",
                    cursor: "pointer"
                  }}
                  onClick={() => handleToggleSection('personal')}
                >
                  Personal information
                </Th>
                <Th
                 className='respond-td'
                  style={{
                    borderBottom: section === 'upload' ? "2px solid teal" : "2px solid gray",
                    color: section === 'upload' ? "teal" : "gray",
                    cursor: "pointer"
                  }}
                  onClick={() => handleToggleSection('upload')}
                >
                  Upload information
                </Th>
              </Flex>
            </Tr>

            {section === 'account' && (
              <Tr>
                <Td colSpan={6} textAlign="center">
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    marginTop="40px"
                    marginBottom="15px"
                  >
                    {/* ... (your account information form fields) */}
                    <Input
                      placeholder="Username"
                      border="2px solid gray"
                      borderRadius="4px"
                      p="2"
                      width="330px"
                      height="40px"
                      marginTop="40px"
                      cursor="pointer"
                    />
                    <Input
                      placeholder="Password"
                      border="2px solid gray"
                      borderRadius="4px"
                      p="2"
                      width="330px"
                      height="40px"
                      marginTop="40px"
                      cursor="pointer"
                    />
                    <Input
                      placeholder="Confirm Password"
                      border="2px solid gray"
                      borderRadius="4px"
                      p="2"
                      width="330px"
                      height="40px"
                      marginTop="40px"
                      cursor="pointer"
                    />
                    {/* Continue button */}
                    <Button
                      width="340px"
                      height="40px"
                      marginTop="20px"
                      colorScheme="teal"
                      color="white"
                      onClick={handleContinue}
                      cursor="pointer"
                      marginBottom='100px'
                    >
                      Continue
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            )}

            {section === 'personal' && (
              <Tr >
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
            .input-data{
              margin-right: 150px
            }
          }
        `}
      </style>
               
          <Tr justifyContent="center" alignItems="center">
            <Td className='input-data'>
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
                <Input
                 className="responsive-input"
                  placeholder="Lastname"
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 0 0 10px"
                  cursor="pointer"
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
                  placeholder="Select Gender"
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 15px 0 0px"
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
                  placeholder="Marital Status"
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 0 0 20px"
                  cursor="pointer"
                />
                <ChevronDownIcon
                  boxSize={6}
                  color="gray.500"
                  cursor="pointer"
                  marginLeft="-28px" // Adjusted marginLeft
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
                  placeholder="Phone Number"
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 10px 0 0"
                  cursor="pointer"
                />
                <Input
                 className="responsive-input"
                  placeholder="Email"
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 0 0 10px"
                  cursor="pointer"
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
                  placeholder="Address"
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 10px 0 0"
                  cursor="pointer"
                />
                <Input
                 className="responsive-input"
                  placeholder="State"
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 0 0 10px"
                  cursor="pointer"
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
                  placeholder="Next of kin Firstname"
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 10px 0 0"
                  cursor="pointer"
                />
                <Input
                 className="responsive-input"
                  placeholder="Next of kin Lastname"
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 0 0 10px"
                  cursor="pointer"
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
                  placeholder="Next of kin  phone number"
                  border="2px solid gray"
                  borderRadius="4px"
                  p="2"
                  width="330px"
                  height="40px"
                  margin="0 10px 0 -335px"
                  cursor="pointer"
                />
              </Flex>
            </Td>
          </Tr>
          <Button
        className="responsive-button"
        width="340px"
        height="40px"
        marginTop="20px"
        colorScheme="teal"
        color="white"
        onClick={handleContinue}
        cursor="pointer"
        marginLeft="350px"
      >
            {showPersonalInfo ? "Continue" : "Continue"}
          </Button>

              </Tr>
            )}

            {section === 'upload' && (
              <Tr>
               <UploadPage/>
               
              </Tr>
            )}

            {/* ... (other sections) */}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AddDriverPage