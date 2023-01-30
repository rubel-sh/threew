import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";
import { FaqHeader } from "../components/StyledComponents";

const Faq = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <FaqHeader>Frequently Asked Questions</FaqHeader>
      <UncontrolledAccordion
        stayOpen
        open={open}
        toggle={toggle}
        style={{ maxWidth: "837px", margin: "0 auto" }}
      >
        <AccordionItem>
          <AccordionHeader targetId="1">
            What is a Blockchain Oracle?
          </AccordionHeader>
          <AccordionBody accordionId="1">
            A blockchain oracle is any system that services a smart contract by
            providing it with data from an off-chain source or connecting it
            with an off-chain system. Oracles enable connectivity between
            blockchains and real-world data by interfacing with external APIs
            and data feeds, allowing them to pull data for or push data from a
            smart contract.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            Why do blockchain need oracle?
          </AccordionHeader>
          <AccordionBody accordionId="2">
            Oracles enable smart contracts to interact with off-chain resources.
            Without oracles, smart contracts can only access data within a
            blockchain, severely limiting their potential applications. The
            majority of industry-changing real-world use cases for smart
            contracts require off-chain data and computation for proper
            execution and often an integration with existing payment rails to
            settle a contract. For example, a smart contract may require
            high-quality weather data from a reputable source like AccuWeather
            to trigger a transaction. It may also require the ability to pay out
            escrowed fiat currency through existing financial infrastructure,
            such as a bank checking account.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            What is the chainlink network?
          </AccordionHeader>
          <AccordionBody accordionId="3">
            The Chainlink Network refers to all of the decentralized oracle
            networks actively operating using the Chainlink protocol, including
            individual oracles, data providers running their own node, and node
            operators. By enabling smart contracts to quickly and securely
            connect to off-chain data sources using decentralized oracle
            networks, the Chainlink Network helps developers build more robust
            and diverse blockchain applications using real-world inputs and
            outputs. Additionally, as middleware between low-level blockchain
            protocols and external, off-chain data sources, the Chainlink
            Network serves as an abstraction layer for data providers to easily
            sell their existing APIs to any blockchain network.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">
            Where can I explore the performance and reliability of the Chainlink
            Network?
          </AccordionHeader>
          <AccordionBody accordionId="4">
            The Chainlink Price Feeds page provides real-time visualizations of
            each decentralized price feed that provides on-chain exchange rates
            for cryptocurrencies, stablecoins, commodities, and indices. Users
            can explore each individual price feed, which offers transparency
            around which nodes power each feed, each node’s latest response, how
            often feed updates occur, the gas price paid by each node, the users
            sponsoring each feed, and hyperlinks to on-chain
            transactions.requests, average response times, and more.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
            What is Chainlink Verifiable Random Function (VRF)?
          </AccordionHeader>
          <AccordionBody accordionId="5">
            Chainlink VRF brings secure random number generation to the
            blockchain. Chainlink VRF solves the difficult problem of providing
            an on-chain source of randomness that is publicly verifiable to be
            authentic and tamper-proof. Many smart contracts are augmenting the
            value they can create by utilizing Chainlink VRF, specifically
            applications such as gaming dApps that must prove to their users
            that their source of randomness is provably fair and resistant to
            manipulation from any external entity. Chainlink VRF enables and
            accelerates the development of smart contracts focused on blockchain
            gaming, security, layer-two protocols, and various other use cases
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
            What is Chainlink Proof of Reserve?
          </AccordionHeader>
          <AccordionBody accordionId="5">
            Chainlink Proof of Reserve provides smart contracts with the data
            required to calculate the true collateralization of any on-chain
            asset backed by off-chain reserves such as stablecoins and
            cross-chain assets. Operated by a decentralized network of oracles,
            Chainlink Proof of Reserve enables the autonomous auditing of
            collateral used within DeFi in real-time, ensuring users’ funds are
            protected from unforeseen fractional reserve practices and other
            fraudulent activity from off-chain custodians. This provides both
            the growing DeFi ecosystem and the traditional financial system a
            way to increase the transparency of operations with definitive
            on-chain proof of any asset’s true collateralization.
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </div>
  );
};

export default Faq;
