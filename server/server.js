const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI
});

// Client Credentials Flow
app.get('/client-credentials', (req, res) => {
  spotifyApi.clientCredentialsGrant()
    .then(data => {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
      spotifyApi.setAccessToken(data.body.access_token);
    })
    .catch(err => {
      res.status(400).send('Error retrieving an access token using client credentials');
    });
});

// Authorization Code Grant Flow
app.post('/login', (req, res) => {
  const code = req.body.code;
  spotifyApi.authorizationCodeGrant(code)
    .then(data => {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
      console.log('The refresh token is ' + data.body['refresh_token']);
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
      spotifyApi.setAccessToken(data.body.access_token);
      spotifyApi.setRefreshToken(data.body.refresh_token);
    })
    .catch(err => {
      res.status(400).send('Error retrieving an access token using authorization code grant');
    });
});

// Refresh Access Token
app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  spotifyApi.setRefreshToken(refreshToken);
  spotifyApi.refreshAccessToken()
    .then(data => {
      console.log('The access token has been refreshed.');
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(err => {
      res.status(400).send('Error refreshing access token');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
