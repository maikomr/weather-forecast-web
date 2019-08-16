This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Required environment variables

`REACT_APP_OPEN_WEATHER_API_KEY`

For this you'll need to sign up for an account at https://openweathermap.org/ and grab an API key.

## Required software

- NodeJS v8.x
- npm v6.x

## Steps to run

In the project directory, run the following commands:

### `yarn install`

### `yarn start`

Then open your preferred web browser at http://localhost:3000

## Running unit tests

### `yarn test`

## Observations and Considerations

- [openweathermap.org](https://openweathermap.org) API only accepts an APP_ID as a query parameter, I'm storing it in the client app which is clearly a security concern but because of the simplicity and purpose of the project I'm going to leave it that way. If this were a "real world" project I'd create a proxy server that should encapsulate all the secrets needed for third party APIs.
- FYI: best API from [openweathermap.org](https://openweathermap.org)  for the problem this project solves is the [16 day weather forecast API](https://openweathermap.org/forecast16) but it's not part of openweathermap's free tier. So I'm using the [5 days weather forecast](https://openweathermap.org/forecast5) which is not that accurate because the data returned for a single day is collected every 3 hours.
