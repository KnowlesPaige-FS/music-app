const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

require('dotenv').config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = process.env.PORT || 4000

// log in
app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    })

    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })

        spotifyApi.setAccessToken(data.body.access_token)
        spotifyApi.setRefreshToken(data.body.refresh_token)
    })
    .catch(err => {
        console.error('Error logging in: ' + err.message)
        res.status(400).send('Error logging in to Spotify');
    }) 
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
