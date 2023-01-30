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

export const Container = styled.div`
  max-width: 1290px;
  margin-inline: auto;
`;

export const HeaderStyle = styled.div`
  background-color: #fff;
  padding: 1rem 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
