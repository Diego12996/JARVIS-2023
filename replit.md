# NTTData 2023 - Random Users Table

## Overview
A React application that fetches random user data from the RandomUser.me API and displays it in a styled Bootstrap table. Users are sorted by age and displayed with their name, email, nationality, and photo.

## Project Structure
```
src/
  App.js        - Main app component
  index.js      - React entry point
  table.js      - UsersTable component with data display
  services.js   - API service for fetching random users
public/
  index.html    - HTML template
```

## Tech Stack
- React 18
- Bootstrap 5 / Reactstrap for styling
- Axios for API requests

## External APIs
- RandomUser.me API: https://randomuser.me/api

## Running the App
The app runs on port 5000 using `npm start`.

## Deployment
Configured as a static site with build output in the `build` directory.
