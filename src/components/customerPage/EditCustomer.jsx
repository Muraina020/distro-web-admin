import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Flex,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { customFetch } from "../../utils";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditCustomer = () => {
  const [data, setData] = useState({});
  const [editedData, setEditedData] = useState({});
  const [activationMessage, setActivationMessage] = useState('');
const navigate = useNavigate();
  const { email } = useParams();
  // console.log(email);

  useEffect(() => {
    const fetchDriverProfile = async () => {
      try {
        const response = await customFetch.get(`/profiles/user?email=${email}`);
        setData(response.data);
        setEditedData(response.data);
      } catch (error) {
        console.error("Error fetching driver profile:", error);
      }
    };
    fetchDriverProfile();
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(editedData)
};

const handleSave = async () => {
  try {
    const response = await customFetch.put(`/profiles/customer/edit?email=${email}`, editedData);
    setData(response.data);
    console.log("Profile updated successfully:", response);
    setActivationMessage("Driver edited successfully.");
    setTimeout(() => {
      setActivationMessage("");
      navigate('/dashboard/customer'); 
    }, 2000);
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};


  return (
    <TableContainer bg="white" fontSize="18px" paddingBottom="50px">
    <Table variant="simple" size="lg" paddingBottom="50px">
      <Tbody>
      <Tr>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">Name:</Box>
                            <Input
                                name="name"
                                value={editedData.name}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">Gender:</Box>
                            <Input
                                name="gender"
                                value={editedData.gender || ""}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">Phone:</Box>
                            <Input
                                name="phone"
                                value={editedData.phone || ""}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">Email:</Box>
                            <Input
                                name="email"
                                value={editedData.email || ""}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">Address:</Box>
                            <Input
                                name="address"
                                value={editedData.address || ""}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">State:</Box>
                            <Input
                                name="state"
                                value={editedData.state || ""}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">Next of Kin Name:</Box>
                            <Input
                                name="nextOfKinName"
                                value={editedData.nextOfKinName || ""}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">Next of Kin Phone:</Box>
                            <Input
                                name="nextOfKinPhone"
                                value={editedData.nextOfKinPhone || ""}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">Vehicle Type:</Box>
                            <Input
                                name="vehicleType"
                                value={editedData.vehicleType || ""}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">Vehicle Plate Number:</Box>
                            <Input
                                name="vehiclePlateNumber"
                                value={editedData.vehiclePlateNumber || ""}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">Driver's Licence:</Box>
                            <Input
                                name="driversLicence"
                                value={editedData.driversLicence || ""}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                    <Td>
                        <Flex alignItems="center">
                            <Box mr="2">Average Ratings:</Box>
                            <Input
                                name="averageRatings"
                                value={editedData.averageRatings || ""}
                                onChange={handleChange}
                            />
                        </Flex>
                    </Td>
                </Tr>
      </Tbody>
    </Table>
  
    <Flex flexDirection="column" alignItems="center" marginTop="20px">
        <Flex justifyContent="center">
          <Button size="lg" colorScheme="green" onClick={handleSave}>Save</Button>
        </Flex>
        {activationMessage && <div style={{ color: "black", marginTop: "10px" }}>{activationMessage}</div>}
      </Flex>
        
  </TableContainer>
  )
}

export default EditCustomer