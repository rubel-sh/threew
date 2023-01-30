import React, { useContext, useEffect, useState } from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderStyle,
  NavContainer,
  ProfileIcon,
} from "../../components/StyledComponents";
import { CgProfile } from "react-icons/cg";
import { FaMoneyCheck } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { StatesContext } from "../../context/StatesProvider";
import { Link } from "react-router-dom";
import Container from "../../components/Container";

const Header = () => {
  const { selectCrypto, setSelectCrypto, setModal, modal } =
    useContext(StatesContext);
  const [cryptoMenu, setCryptoMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  const cryptoLinks = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/5235/5235901.png",
      text: "Arbitrum Rinkeby",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/7016/7016508.png",
      text: "Avalanche Fuji",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/6675/6675721.png",
      text: "BNB Chain Testnet",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4125/4125334.png",
      text: "Ethereum Rinkeby",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2773/2773070.png",
      text: "Harmony Testnet",
    },
    {
      img: "https://faucets1.netlify.app/static/media/POANetworkSokol.c68c7ae45a1e51482db2.png",
      text: "POA Network Sokol",
    },
  ];

  // Select 1st link on load
  useEffect(() => setSelectCrypto(cryptoLinks[0]), []);

  const toggle = () => setModal(!modal);
  const handleCryptoMenu = (link) => {
    setSelectCrypto(link);
    setCryptoMenu(!cryptoMenu);
  };

  return (
    <HeaderStyle>
      <Container>
        <HeaderContainer>
          <HeaderLogo>
            <Link to="/">Faucets</Link>
          </HeaderLogo>

          <NavContainer>
            <div
              className="selectCrypto"
              onClick={() => setCryptoMenu(!cryptoMenu)}
            >
              <div className="cryptoState">
                <img src={selectCrypto.img} style={{ width: "20px" }} />
                <span>{selectCrypto.text}</span>
                <MdOutlineKeyboardArrowDown size={20} />
              </div>
              <div
                className="cryptoPopMenu"
                style={{ display: cryptoMenu ? "block" : "none" }}
              >
                <ul>
                  {cryptoLinks.map((link) => (
                    <li onClick={() => handleCryptoMenu(link)}>
                      <img src={link.img} style={{ width: "20px" }} />
                      <span>{link.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="selectWalet" onClick={toggle}>
              <FaMoneyCheck />
              <span>Connect Wallet</span>
            </div>
            <ProfileIcon onClick={() => setProfileMenu(!profileMenu)}>
              <CgProfile className="profileIcon" />
              <div
                className="profileMenu"
                style={{ display: profileMenu ? "flex" : "none" }}
              >
                <Link to="login" onClick={() => setProfileMenu(!profileMenu)}>
                  Login
                </Link>
                <Link to="signup" onClick={() => setProfileMenu(!profileMenu)}>
                  Signup
                </Link>
                <Link to="faq" onClick={() => setProfileMenu(!profileMenu)}>
                  FAQ
                </Link>
              </div>
            </ProfileIcon>
          </NavContainer>
        </HeaderContainer>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
