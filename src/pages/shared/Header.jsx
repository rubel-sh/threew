import React from "react";
import {
  Container,
  HeaderContainer,
  HeaderLogo,
  HeaderStyle,
  NavContainer,
} from "../../components/StyledComponents";
import { CgProfile } from "react-icons/cg";
import { FaMoneyCheck } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <HeaderContainer>
          <HeaderLogo>Faucets</HeaderLogo>
          <NavContainer>
            <div className="selectCrypto">
              <div className="cryptoState">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5235/5235901.png"
                  style={{ width: "20px" }}
                />
                <span>Ethereum Kovan</span>
                <MdOutlineKeyboardArrowDown size={20} />
              </div>
              <div className="cryptoPopMenu">
                <ul>
                  <li>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5235/5235901.png"
                      style={{ width: "20px" }}
                    />
                    <span>Arbitrum Rinkeby</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="selectWalet">
              <FaMoneyCheck />
              <span>Connect Wallet</span>
            </div>
            <div>
              <CgProfile className="profileIcon" />
            </div>
          </NavContainer>
        </HeaderContainer>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
