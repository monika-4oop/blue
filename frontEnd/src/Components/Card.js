import {React,useState} from "react";
import "./card.css";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";


export const Card = ({item}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const[name, setName]= useState([]);
  const[location, setLocation]= useState([]) ;
  const searchname=(e)=>{
      console.log("name", e.target.value);
      
  }
  const searchlocation=(e)=>{
      console.log("name", e.target.value);
      
  }
  const submitHandler= (e)=>{
      console.log("handle")
  }
  return (
    <>

    <div className="card">
      <div className="name">
        <div className="main__details">
          <img src="https:www.w3schools.com/howto/img_avatar.png" alt="" />
          <p>{item.name}</p>
        </div>

        <div className="type">
          <p>{item.domestic}</p>
        </div>
      </div>

      <div className="address">{item.location}</div>
      <hr />
      <div className="contacts">
        <button id="btn" onClick={onOpen}>
          View Contact
        </button>
        <div className="common">
          <strong>Experience</strong>
          <p>{item.exp}</p>
        </div>
        <div className="common">
          <strong>Gender</strong>
          <p>{item.gender}</p>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registration</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="div">
              <input type="text" placeholder="Name" name="" id="" required />
              <input type="text" placeholder="Phone" name="" id="" required />
              <input type="email" placeholder="Email (optional)" />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={5} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    </>
  );
};
