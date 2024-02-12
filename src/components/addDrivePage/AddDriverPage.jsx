// import React, { useState } from 'react';
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
  Text,
} from "@chakra-ui/react";
import { Avatar } from "@files-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import upload from "../../assets/img/upload.png";
import React, { useState, useEffect } from "react";
import { customFetch } from "../../utils";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import { FileInputButton, FileCard } from "@files-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import { imgDB } from "../../components/addDrivePage/firebaseimgConfig";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const AddDriverPage = () => {
  const [section, setSection] = useState("account");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [nextOfKinFirstname, setNextOfKinFirstname] = useState("");
  const [nextOfKinLastname, setNextOfKinLastname] = useState("");
  const [nextOfKinPhone, setNextOfKinPhone] = useState("");
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [data, setData] = useState([]);
  const [vehicleType, setVehicleType] = useState("");
  const navigate = useNavigate();

  const SubmitDriverDetails = async () => {
    const data = {
      firstname,
      lastname,
      email,
      phone,
      password,
      address,
      city,
      state,
      username,
      vehicleType,
      gender,
      dateOfBirth,
      nextOfKinFirstname,
      nextOfKinLastname,
      nextOfKinPhone,
      vehiclePlateNumber,
      userAvatar,
    };
    console.log(data);
    try {
      const response = await customFetch.post(
        "/profiles/addnewdriveraccount",
        data
      );
      setData(response.data);
      console.log(response);

      // navigate("/dashboard/success");
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  const handleToggleSection = (selectedSection) => {
    setSection(selectedSection);
  };

  const handleContinue = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("password not match");
      return;
    }
    if (section === "account") {
      setSection("personal");
    } else if (section === "personal") {
      setSection("upload");
    } else {
      SubmitDriverDetails();
    }
  };

  // const handleUpload = (e) =>{
  //   console.log(e.target.files[0])
  //   const imgs = ref(imgDB, `Imgs${v4()}`)
  //   uploadBytes(imgs,e.target.files[0]).then(data =>{
  //     console.log(data, "imgs")
  //     getDownloadURL(data.ref).then(val=>{
  //       // console.log(val)
  //       setUserAvatar(val)
  //     })
  //   })
  // }

  const handleUpload = async (e) => {
    try {
      const file = e.target.files[0];
      const storageRef = ref(imgDB, `Imgs${v4()}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setUserAvatar(downloadURL);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
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
            <Tr className="respond-td">
              <Flex
                direction="row"
                alignItems="center"
                justifyContent="center"
                marginTop="10px"
                marginBottom="15px"
              >
                <Th
                  className="respond-td"
                  style={{
                    borderBottom:
                      section === "account"
                        ? "2px solid teal"
                        : "2px solid gray",
                    color: section === "account" ? "teal" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => handleToggleSection("account")}
                >
                  Account information
                </Th>
                <Th
                  className="respond-td"
                  style={{
                    borderBottom:
                      section === "personal"
                        ? "2px solid teal"
                        : "2px solid gray",
                    color: section === "personal" ? "teal" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => handleToggleSection("personal")}
                >
                  Personal information
                </Th>
                <Th
                  className="respond-td"
                  style={{
                    borderBottom:
                      section === "upload"
                        ? "2px solid teal"
                        : "2px solid gray",
                    color: section === "upload" ? "teal" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => handleToggleSection("upload")}
                >
                  Upload information
                </Th>
              </Flex>
            </Tr>

            {section === "account" && (
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

                    <div className="flex flex-col">
                      {" "}
                      <Input
                        placeholder="Confirm Password"
                        border="2px solid gray"
                        borderRadius="4px"
                        p="2"
                        width="330px"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        height="40px"
                        marginTop="40px"
                        cursor="pointer"
                      />
                      <span className="text-xs text-red-500">
                        {confirmPasswordError !== null
                          ? confirmPasswordError
                          : null}
                      </span>
                    </div>
                  </Flex>
                </Td>
              </Tr>
            )}

            {section === "personal" && (
              <Tr>
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
                  <Td className="input-data">
                    <Flex
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      marginTop="10px" // Adjusted marginTop
                      marginBottom="15px"
                      marginLeft="120px"
                    >
                      <Input
                        className="responsive-input"
                        placeholder="Firstname"
                        border="2px solid gray"
                        borderRadius="4px"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
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
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
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
                      marginLeft="120px"
                    >
                      <Input
                        className="responsive-input"
                        placeholder="Phone Number"
                        border="2px solid gray"
                        borderRadius="4px"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                      marginLeft="120px"
                    >
                      <Input
                        className="responsive-input"
                        placeholder="Address"
                        border="2px solid gray"
                        borderRadius="4px"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
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
                        value={state}
                        onChange={(e) => setState(e.target.value)}
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
                      marginLeft="120px"
                    >
                      <Input
                        className="responsive-input"
                        placeholder="City"
                        border="2px solid gray"
                        borderRadius="4px"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        p="2"
                        width="330px"
                        height="40px"
                        margin="0 10px 0 0"
                        cursor="pointer"
                      />
                      <Input
                        className="responsive-input"
                        placeholder="Gender"
                        border="2px solid gray"
                        borderRadius="4px"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
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
                      marginLeft="120px"
                    >
                      <Input
                        className="responsive-input"
                        placeholder="Next of kin Firstname"
                        border="2px solid gray"
                        borderRadius="4px"
                        value={nextOfKinFirstname}
                        onChange={(e) => setNextOfKinFirstname(e.target.value)}
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
                        value={nextOfKinLastname}
                        onChange={(e) => setNextOfKinLastname(e.target.value)}
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
                      marginTop="10px"
                      marginBottom="15px"
                      marginLeft="120px"
                    >
                      <Input
                        className="responsive-input"
                        placeholder="Next of kin phone number"
                        border="2px solid gray"
                        borderRadius="4px"
                        value={nextOfKinPhone}
                        onChange={(e) => setNextOfKinPhone(e.target.value)}
                        p="2"
                        width="330px"
                        height="40px"
                        margin="0 10px 0 0"
                        cursor="pointer"
                      />
                      <Input
                        className="responsive-input"
                        placeholder="Date of birth (YYY-MM-DD)"
                        border="2px solid gray"
                        borderRadius="4px"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        p="2"
                        width="330px"
                        height="40px"
                        margin="0 0 0 10px"
                        cursor="pointer"
                      />
                    </Flex>
                  </Td>
                </Tr>
              </Tr>
            )}

            {section === "upload" && (
              <Tr display="flex" flexDirection="column">
                <Td>
                  <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    marginTop="10px" // Adjusted marginTop
                    marginBottom="15px"
                    marginLeft="120px"
                  >
                    <Input
                      className="responsive-input"
                      placeholder="Vehicle Plate Number "
                      border="2px solid gray"
                      borderRadius="4px"
                      value={vehiclePlateNumber}
                      onChange={(e) => setVehiclePlateNumber(e.target.value)}
                      p="2"
                      width="330px"
                      height="40px"
                      margin="0 0 0 0px"
                      cursor="pointer"
                      marginRight="5px"
                    />
                    <Input
                      className="responsive-input"
                      placeholder="vehicleType"
                      border="2px solid gray"
                      borderRadius="4px"
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                      p="2"
                      width="330px"
                      height="40px"
                      margin="0 10px 0 0"
                      cursor="pointer"
                    />
                  </Flex>
                </Td>

                <Td>
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    marginTop="10px"
                    marginBottom="15px"
                  >
                    <input type="file" onChange={(e) => handleUpload(e)} />
                  </Flex>
                </Td>
              </Tr>
            )}

            <Button
              className="responsive-button"
              width="340px"
              height="40px"
              marginTop="20px"
              colorScheme="teal"
              color="white"
              onClick={handleContinue}
              cursor="pointer"
              marginLeft="250px"
            >
              {section === "account" || section === "personal"
                ? "continue"
                : "Submit"}
            </Button>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AddDriverPage;
