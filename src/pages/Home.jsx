import React, { useContext } from "react";
import {
  ConnectedTo,
  Container,
  FormContainer,
  FormItem,
  NoticeHere,
  ReqTestlink,
  SendRequestBtn,
  TransactionContainer,
  TransactionHistoryContainer,
} from "../components/StyledComponents";
import { StatesContext } from "../context/StatesProvider";
import { AiFillWarning } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";

const Home = () => {
  const { selectCrypto } = useContext(StatesContext);
  return (
    <>
      <NoticeHere>Notice here</NoticeHere>
      <Container>
        <ReqTestlink>
          <h1>Request testnet LINK</h1>
          <p>
            Get testnet LINK for an account on one of the supported blockchain
            testnets so you can create and test your own oracle and Chainlinked
            smart contract
          </p>
        </ReqTestlink>
        <TransactionContainer>
          <ConnectedTo>
            <AiFillWarning size={20} />
            Your wallet is connected to
            <strong>{selectCrypto.text}</strong>, so you are requesting
            <strong> {selectCrypto.text}</strong> Link/ETH.
          </ConnectedTo>
          <FormContainer>
            <form onSubmit={(e) => e.preventDefault()}>
              <FormItem>
                <label htmlFor="">Wallet Address</label>
                <input type="text" placeholder="Your Wallet Address..." />
              </FormItem>
              <FormItem>
                <label htmlFor="">Request Type</label>
                <div>
                  <input
                    type="text"
                    defaultValue="20 Test Link"
                    disabled
                    placeholder="Your Wallet Address..."
                  />
                  <input
                    type="text"
                    defaultValue="0.5 ETH"
                    disabled
                    placeholder="Your Wallet Address..."
                  />
                </div>
              </FormItem>
              <FormItem>
                <ReCAPTCHA sitekey="6Lc5iTgkAAAAAF06r0RRHun94YpaIP3KBbAK8WcZ" />
              </FormItem>

              <SendRequestBtn>Send Request</SendRequestBtn>
            </form>
          </FormContainer>
          <TransactionHistoryContainer></TransactionHistoryContainer>
        </TransactionContainer>
      </Container>
    </>
  );
};

export default Home;
