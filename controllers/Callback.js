const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
const ENDPOINT = process.env.ENDPOINT;
const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const authCode = req.body.authorizationCode;
    console.log(77, authCode);
    const code = await axios({
      url: "https://accounts.google.com/o/oauth2/token",
      method: "post",
      data: {
        client_id:
          "995308487899-per62pq6i9q2uu4iodotcpg06ohrt613.apps.googleusercontent.com",
        client_secret: "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",
        code: authCode,
        redirect_uri: `http://localhost:3000/login`,
        grant_type: "authorization_code",
      },
    });
    const accessToken = code.data.access_token;

    const userData = await axios({
      url: "https://www.googleapis.com/oauth2/v3/userinfo",
      method: "get",
      params: {
        access_token: accessToken,
        scope: "https://www.googleapis.com/auth/userinfo.email",
      },
    });
    console.log(33, userData);
    res
      .cookie("accessToken", accessToken)
      .status(200)
      .send({ data: userData.data });
  } catch (error) {
    console.log(error);
  }

  //   const accessToken = code.data.access_token;
  //   console.log(22, accessToken);
};
