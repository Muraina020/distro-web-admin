// import React from 'react';
// import { IconButton, Avatar, Table, Tbody, Tr, Td, Flex, TableContainer } from '@chakra-ui/react';
// import { FaArrowLeft } from 'react-icons/fa';

// export const SearchResult = ({ result }) => {
//   const data = result[0]; // Assuming there's only one item in the result array
//   const { category, customerEmail, customerId, date, deliveryType, distance, driver, dropOffs, id, itemName, noRestrictedItem, paymentStatus, price, quantity, rating, scheduledDate, scheduledTime, senderAddress, senderName, senderPhoneNo, shipmentId, shipmentStatus, shipmentValue, shipmentVehicle, specialInstruction, statNo, status, weight } = result;

//   return (
//     <div>
//       <div style={{ position: "relative", overflowX: "auto", maxWidth: "100%" }}>
//         <IconButton
//           icon={<FaArrowLeft />}
//           style={{
//             position: "absolute",
//             top: 5,
//             left: 5,
//             backgroundColor: "white",
//             color: "gray",
//           }}
//         />
//         <TableContainer bg="white" fontSize="18px" paddingBottom="50px" overflowX="auto">
//           <Table variant="simple" size="lg" paddingBottom="50px">
//             <Tbody>
//               <Tr borderBottom="2px solid lightgray">
//                 <Td>
//                   <Flex alignItems="center">
//                     <Avatar size="lg" name="John Doe" src={data?.driver?.image} />
//                     <Flex flexDirection="column" alignItems="center">
//                       <Td fontSize="md">
//                         <b>{data?.shipmentId}</b>
//                       </Td>
//                       <Td fontSize="md" color="gray.500">
//                         {data?.date}
//                       </Td>
//                     </Flex>
//                   </Flex>
//                 </Td>
//                 <Td>
//                   <Flex flexDirection="column" alignItems="center">
//                     <Td fontSize="md" marginTop="15px">
//                       <b>{data?.price}</b>
//                     </Td>
//                     <Td fontSize="md" color="#00A69C" fontWeight="600">
//                       {data?.paymentStatus}
//                     </Td>
//                   </Flex>
//                 </Td>
//               </Tr>

//               <Tr>
//                 <Flex justifyContent="" gap="250px" width="300px" marginLeft="0px">
//                   <Flex alignItems="" borderBottom="1px solid lightgray">
//                     <Td fontSize="md">
//                       <b>Customer ID</b>
//                     </Td>
//                     <Td fontSize="md">{data?.customerId}</Td>
//                   </Flex>
//                   <Flex alignItems="" borderBottom="1px solid lightgray">
//                     <Td fontSize="md">
//                       <b>Name</b>
//                     </Td>
//                     <Td fontSize="md">{data?.senderName}</Td>
//                   </Flex>
//                 </Flex>

//                 <Flex justifyContent="" gap="200px" width="300px" marginLeft="0px">
//                   <Flex alignItems="" borderBottom="1px solid lightgray">
//                     <Td fontSize="md">
//                       <b>Customer Phone</b>
//                     </Td>
//                     <Td fontSize="md">{data?.senderPhoneNo}</Td>
//                   </Flex>
//                   <Flex alignItems="" borderBottom="1px solid lightgray">
//                     <Td fontSize="md">
//                       <b>Distance</b>
//                     </Td>
//                     <Td fontSize="md">{data?.distance}</Td>
//                   </Flex>
//                 </Flex>

//                 <Flex justifyContent="" gap="250px" width="300px" marginLeft="0px">
//                   <Flex alignItems="" borderBottom="1px solid lightgray">
//                     <Td fontSize="md">
//                       <b>Package Type</b>
//                     </Td>
//                     <Td fontSize="md">{data?.itemName}</Td>
//                   </Flex>
//                   <Flex alignItems="" borderBottom="1px solid lightgray">
//                     <Td fontSize="md" marginTop="">
//                       <b>Status</b>
//                     </Td>
//                     <Td fontSize="md" color="#F9BF42">
//                       {data?.status}
//                     </Td>
//                   </Flex>
//                 </Flex>
//               </Tr>

//               <Tr>
//                 <Flex justifyContent="" gap="150px" width="300px" marginLeft="0px" borderBottom="1px solid lightgray">
//                   <Td fontSize="md">
//                     <b>Special Instruction</b>
//                   </Td>
//                   <Td fontSize="md">
//                     {data?.specialInstruction ? data.specialInstruction : "N/A"}
//                   </Td>
//                 </Flex>
//               </Tr>
//               <Tr>
//                 <Flex justifyContent="" gap="150px" width="300px" marginLeft="0px" borderBottom="1px solid lightgray">
//                   <Td fontSize="md">
//                     <b>Pickup</b>
//                   </Td>
//                   <Td fontSize="md">{data?.senderAddress}</Td>
//                 </Flex>
//               </Tr>
//               <Tr>
//                 <Flex justifyContent="" gap="250px" width="300px" marginLeft="0px" borderBottom="1px solid lightgray">
//                   <Td fontSize="md">
//                     <b>Destination </b>
//                   </Td>
//                   <Td fontSize="md">{data?.destinationAddress}</Td>
//                 </Flex>
//               </Tr>
//             </Tbody>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// };

// export default SearchResult;
