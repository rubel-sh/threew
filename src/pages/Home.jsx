import React, { useContext, useEffect, useState } from "react";
import {
  ConnectedTo,
  FormContainer,
  FormItem,
  HistoryBtn,
  HistoryBtnTab,
  NoticeHere,
  ReqTestlink,
  SendRequestBtn,
  TransactionContainer,
  TransactionHistoryContainer,
} from "../components/StyledComponents";
import { StatesContext } from "../context/StatesProvider";
import { AiFillWarning } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import HistoryTable from "../components/HistoryTable";
import Container from "../components/Container";
import ModalPopup from "../components/ModalPopup";

const Home = () => {
  const { selectCrypto, modal, setModal } = useContext(StatesContext);
  const [selectedTable, setSelectedTable] = useState({});
  const [toggleTab, setToggleTab] = useState(0);

  const tableData = [
    {
      id: 1,
      title: "ETH Transaction History",
      data: [
        {
          time: "12:30 AM",
          amount: "468",
          hash: "4s8er5s5fe57rjmxnfuewrurks",
        },
        {
          time: "10:40 PM",
          amount: "634",
          hash: "fghgfh546gf65h45gfh4gf4",
        },
        {
          time: "12:30 AM",
          amount: "750",
          hash: "gf6798ew7gdf7g564dfh564d6fh4",
        },
        {
          time: "03:30 AM",
          amount: "622",
          hash: "fdh545df4gh6d4f6h54df56h4654",
        },
      ],
    },
    {
      id: 2,
      title: "Testlink Transaction History",
      data: [
        {
          time: "11:00 AM",
          amount: "452",
          hash: "gdfghf5h4564h6f5d4",
        },
        {
          time: "06:40 PM",
          amount: "354",
          hash: "hgf54h564dgf6h",
        },
        {
          time: "11:55 AM",
          amount: "786",
          hash: "hs466dfs4h654",
        },
        {
          time: "06:30 AM",
          amount: "999",
          hash: "fgh56gf4h654gdf6",
        },
      ],
    },
  ];

  // Select History table we page loads
  useEffect(() => setSelectedTable(tableData[0]), []);

  const handleHistoryBtn = (btn, index) => {
    setToggleTab(index);
    setSelectedTable(btn);
  };

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
            <p>
              Your wallet is connected to
              <strong> {selectCrypto.text}</strong>, so you are requesting
              <strong> {selectCrypto.text}</strong> Link/ETH.
            </p>
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
          <TransactionHistoryContainer>
            <p>Request History</p>
            <HistoryBtnTab>
              {tableData.map((btn, index) => (
                <HistoryBtn
                  onClick={() => handleHistoryBtn(btn, index)}
                  className={`${toggleTab === index ? "active-tab" : ""}`}
                >
                  {btn.title}
                </HistoryBtn>
              ))}
            </HistoryBtnTab>
            <HistoryTable selectedTable={selectedTable} />
          </TransactionHistoryContainer>
        </TransactionContainer>
      </Container>
    </>
  );
};

export default Home;
