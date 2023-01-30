import auth0 from "auth0-js";
export const auth = new auth0.WebAuth({
  domain: "dev-z06y5y5yzqc2cv7c.us.auth0.com",
  clientID: "JSBuO6vMnkX1u164w6dVBsW6ljF2ioVU",
  scope: "openid email profile",
});
