import styled from "styled-components";

export const BodyWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
  font-family: "Varela Round", sans-serif;
  background-color: #eef2fe;
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const HeaderStyle = styled.div`
  background-color: #fff;
  padding: 1rem 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const HeaderLogo = styled.div`
  cursor: pointer;

  & a {
    color: ${(props) => props.theme.primaryColor};
    font-family: Varela Round, sans-serif;
    font-size: 25px;
    font-weight: 600;
    text-decoration: none;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 10px;
  & .selectCrypto {
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #6d7380;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    padding: 10px 12px;
    -webkit-user-select: none;
    user-select: none;
    position: relative;

    & .cryptoState {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 5px;

      & > span {
        @media (max-width: 768px) {
          display: none;
        }
      }
    }

    & .cryptoPopMenu {
      background: #fff;
      border: 1px solid #eee;
      border-radius: 3px;
      box-shadow: 0 4px 9px -8px grey;
      height: auto;
      padding: 10px;
      position: absolute;
      right: 0;
      top: 50px;
      width: 225px;

      & ul {
        width: 100%;
        padding: 0;
        margin: 0;
        & li {
          display: flex;
          align-items: center;
          padding: 8px 5px;
          width: 100%;
          transition: all 0.3s ease;
          border-radius: 5px;
          gap: 5px;

          &:hover {
            background-color: #eee;
          }
        }
      }
    }
  }
  & .selectWalet {
    border: 2px solid ${(props) => props.theme.primaryColor};
    padding: 5px 20px;
    color: ${(props) => props.theme.primaryColor};
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: 768px) {
      font-size: 1.6rem;
      border: none;
    }

    & > span {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  & .profileIcon {
    margin-left: 15px;
    font-size: 2.5rem;
    padding: 8px;
    border-radius: 50%;
    background-color: #e9e9e9;
    color: rgb(109 114 128 / 1);
    cursor: pointer;
  }
`;

export const ProfileIcon = styled.div`
  position: relative;

  & .profileMenu {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 3px;
    box-shadow: 0 4px 9px -8px grey;
    height: auto;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 50px;
    width: 180px;
    display: flex;
    flex-direction: column;

    & a {
      padding: 5px 20px;
      text-decoration: none;
      color: #6d7380;
    }
  }
`;

export const NoticeHere = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 25px 0;
  color: white;
  text-align: center;
`;

export const ReqTestlink = styled.h1`
  margin: 48px 0;

  & h1 {
    color: ${(props) => props.theme.primaryColor};
    font-size: 35px;
    font-weight: 600;
  }
  & p {
    color: ${(props) => props.theme.textColor};
    font-size: 16px;
    line-height: 25px;
  }
`;

export const TransactionContainer = styled.div`
  background-color: #fff;
  padding: 25px 20px;
  border: 1px solid #e6e6e6;
`;

export const ConnectedTo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background: #eef2fe;
  border-radius: 1px;
  padding: 10px;

  & svg {
    color: ${(props) => props.theme.primaryColor};
    margin-right: 10px;
  }
  & > p {
    margin-bottom: 0;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  margin-top: 15px;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  & > label {
    color: ${(props) => props.theme.primaryColor};
    font-weight: 600;
    font-size: 14px;
  }
  & > input {
    border: 1px solid #eee;
    border-radius: 3px;
    margin-top: 5px !important;
    outline: none;
    padding: 10px;
    width: 100%;
    font-size: 13px;
  }
  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    & > input {
      border: 1px solid #eee;
      border-radius: 3px;
      margin-top: 5px !important;
      outline: none;
      padding: 10px;
      width: 100%;
      font-size: 13px;
    }
  }
`;
export const SendRequestBtn = styled.button`
  background: ${(props) => props.theme.primaryColor};
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 15px;
  text-transform: capitalize;
  margin-top: 15px;
`;

export const TransactionHistoryContainer = styled.div`
  margin-top: 20px;

  & > p {
    font-weight: 700;
  }
`;
export const HistoryBtnTab = styled.div`
  & .active-tab {
    background: #00f;
    color: white;
  }
`;

export const HistoryBtn = styled.div`
  background: #fff;
  color: #1a1a1a;
  display: inline-block;
  border-radius: 3px;
  cursor: pointer;
  font-size: 13px;
  margin-right: 10px;
  padding: 10px 15px;
  user-select: none;
  margin-right: 10px;
`;
export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 15px;
  & td,
  th {
    border: 1px solid #e7e7e7;
    border-collapse: collapse;
    text-align: center;
  }
`;
export const SellectWallet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  & > div {
    background-color: #f5f7fd;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    & > p {
      color: ${(props) => props.theme.primaryColor};
      text-align: center;
      font-size: 18px;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FormItemm = styled.div``;
