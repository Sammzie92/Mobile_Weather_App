### Weather App
This is a simple weather application built using *React Native and Expo*. The app provides current weather information and upcoming weather forecast for a given location.

## Features
- Display current weather information including temperature, feels like, and high/low temperatures.
- Show weather condition icon based on the current weather.
- Display upcoming weather forecast for the next few days.
- View population information and sunrise/sunset times for a specific city.
## Installation
To run the Weather App locally, follow these steps:

- Clone the repository:
  (`git clone <repository-url>`)

- Install the dependencies:
`cd weather-app` `npm install`

- Obtain an API key from a weather data provider. Update the `.env` file with your `API key:`

- `WEATHER_API_KEY=your-api-key`

- Start the development server:

`npm start`

This will open the Expo development tools in your browser.

Use the Expo Go app on your mobile device to scan the QR code displayed in the Expo development tools. This will launch the app on your device.
Alternatively, you can choose to run the app in an Android or iOS simulator/emulator.

## Usage
- Upon launching the app, it will request permission to access your device's location. 
Grant the permission to allow the app to fetch weather data for your current location.
- The app will display a loading spinner while fetching the weather data.
- Once the weather data is retrieved, the app will display the current weather information, upcoming weather forecast, and city details.
- You can switch between tabs to view different sections of the app, such as the current weather, upcoming weather, and city information.

 
### Dependencies
The Weather App utilizes the following dependencies:

 **React, 
  React Native,
  Expo,
  React Navigation, 
  Expo Location,
  Axios**

## License
This project is licensed under the MIT License. Feel free to modify and distribute it as per your needs.