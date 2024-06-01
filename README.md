# EleutherosVibe

Welcome to EleutherosVibe, a dynamic music streaming platform where freedom in musical expression and discovery takes center stage. Our app allows users to explore a vast library of music, create playlists, and enjoy high-quality audio streaming.

## Technology Stack

### Frontend

- **React**: Our client-side is built using React, a declarative, efficient, and flexible JavaScript library for building user interfaces. React helps us maintain a fast, scalable, and simple frontend, enhancing user experience.

### Backend

- **Node.js**: As our runtime environment.
- **Express**: This is the backbone of our server, handling routes and requests with ease. It’s minimal, scalable, and flexible.
- **Nodemon**: Used in development for automatically restarting the server whenever code changes are detected. This makes development smoother and faster.

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js installed on your machine. If not, you can download and install it from [Node.js official website](https://nodejs.org/).

### Installation

Clone the repository to your local machine:

```
git clone https://github.com/knowlespaige-fs/music-app.git
cd music-app
```


## Setup

### Backend Configuration:

Navigate to the server directory:

```
cd server
```

Create a .env file in the server directory and add your Spotify API credentials:

- SPOTIFY_CLIENT_ID=your_spotify_client_id
- SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
- SPOTIFY_REDIRECT_URI=http://localhost:3000/callback

Install backend dependencies:

```
npm install
```

Start the backend server:

```
npm run dev
```

### Frontend Configuration:

Navigate to the client directory:

```
cd client
```


Create a .env file in the client directory and add your Spotify API credentials:

- REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id
- REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback


Install frontend dependencies:

```
npm install
```

Start the frontend development server:

```
npm start
```

## Accessing the Project

- Frontend: The frontend application will be running on http://localhost:3000
- Backend: The backend server will be running on http://localhost:4000


## Endpoints

### Authentication

#### Login:

Endpoint: /login

Method: POST

Description: Handles user login using Spotify's authorization code grant flow.

Request Body:
```
{
  "code": "authorization_code"
}
```

Response:
```
{
  "accessToken": "spotify_access_token",
  "refreshToken": "spotify_refresh_token",
  "expiresIn": 3600
}
```


#### Refresh Token:

Endpoint: /refresh

Method: POST

Description: Refreshes the Spotify access token using the refresh token.

Request Body:
```
{
  "refreshToken": "spotify_refresh_token"
}
```

Response:
```
{
  "accessToken": "new_spotify_access_token",
  "expiresIn": 3600
}
```


#### Music Data

##### Get Recently Played Tracks:

Endpoint: /me/player/recently-played

Method: GET

Description: Retrieves the current user's recently played tracks.

Headers:

```
{
  "Authorization": "Bearer spotify_access_token"
}
```

##### Get User's Top Artists:

Endpoint: /me/top/artists

Method: GET

Description: Retrieves the current user's top artists.

Headers:

```
{
  "Authorization": "Bearer spotify_access_token"
}
```

##### Get New Releases:

Endpoint: /browse/new-releases

Method: GET

Description: Retrieves new album releases featured in Spotify.

Headers:

```
{
  "Authorization": "Bearer spotify_access_token"
}
```