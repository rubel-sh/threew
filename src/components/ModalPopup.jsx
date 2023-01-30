import React, { useContext } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { StatesContext } from "../context/StatesProvider";
import { SellectWallet } from "./StyledComponents";

const ModalPopup = () => {
  const { modal, setModal } = useContext(StatesContext);
  const toggle = () => setModal(!modal);
  return (
    <Modal
      isOpen={modal}
      fade={false}
      toggle={toggle}
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <ModalHeader toggle={toggle} style={{ color: "black", border: "none" }}>
        Connect your wallet
      </ModalHeader>
      <ModalBody>
        <SellectWallet>
          <div>
            <img
              src="https://faucets1.netlify.app/static/media/MetaMask_Fox.svg.d9c41a5680a1daaae624.png"
              alt=""
              style={{ width: "90px" }}
            />
            <p>MetaMask</p>
          </div>
          <div>
            <img
              src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg"
              alt=""
              style={{ width: "90px" }}
            />
            <p>WalletConnect</p>
          </div>
        </SellectWallet>
      </ModalBody>
    </Modal>
  );
};

export default ModalPopup;
