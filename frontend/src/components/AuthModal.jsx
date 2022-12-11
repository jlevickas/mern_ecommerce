import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Modal, Button, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AuthModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpenModal}>Sign In</Button>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={style}>
          <LoginForm />
          <RegisterForm />
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
