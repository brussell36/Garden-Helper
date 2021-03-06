![Lush Garden](https://cdn.vox-cdn.com/thumbor/5i-GNzJNl5Bmy8vQp3HdAJNGaKs=/0x0:1400x897/1200x800/filters:focal(588x336:812x560)/cdn.vox-cdn.com/uploads/chorus_image/image/65893827/secret_garden_xl.0.jpg)

# Garden Helper

### Capstone Project for Epicodus, 09.25.2020

## By Benjamin Russell

## Description

This application will allow a user to filter a database with information about their type of garden. The user will be then be able to see a list of plants that fit their specifications. The user will be able to choose from the list of plants the ones they want most and save them to their own page. A plant can be deleted if the user decides they do not want it saved to their page any longer. 

## Component Diagram

![App Diagram](./Garden-components.png)

## Capstone Proposal

Name: Benjamin Russell

Title: Garden Design Helper

Description: Take info from a user that will help them decide the best plants for their type of garden. Will filter based on type of soil or how much they want to water and what can survive in their hardiness zone. 

Use Case: The main users are people who are new to gardening looking for plants that will fit the style of yard they would like to cultivate. They will filter the plants from the API with form inputs, choosing whether they would like plants that need a lot of water or little to none. Plants that are tolerant of shade or like full sun and plants that need well drained soil or plants that are more tolerant of high levels of clay in the soil.

Minimum Viable Product:
 
* Take user inputs and return plants that match
* Properly filter Api call 
* Show images of plants to user  

Technology for MVP:

* React.js Frontend
* C# API custom build

Stretch Goals:

* Allow a user to make an account to save plants they like 
* Allow users to comment on the plants they have saved 
* Allow users to upload images of the plants in their gardens 
* Implement search capability to search for other users or specific plants a user would like to add

Additional Technology for Stretch Goals:

* Firebase for NoSQL database, User Authentication, and Hosting
* TBD

Additional Information: This is my original team week idea, but now I have so many more tools to really make this project the way I originally imagined it. I will make sure not to use any of the code that we used for the first team week.

## Research

* Read Firebase documentation on seeding database with information so I can use it in a similar way to the API I was thinking of making.
* Read about Material Design, do a few tutorials.
* Read React Material Design documentation.
* Look into beautiful templates for my projects material design. 
* Get a little overwhelmed by everything that a template entails.
* Spend time seeding my Cloud Firestore database so the user can query it.
* Research issues realted to Firebase hosting.
* Plan my presentation for Thursday 8/08/2020.
* Add several more data points to database.

## Specifications

| Behavior | Input | Output |
| -------- | ----- | ------ |
| 1. As a user, I want to create a user profile. | Email: fakeemail@gmail.com Password: ********** | Welcome (New User)! |
| 2. As a user, I want to have my own profile page where I can save the plants I like. |  | List of saved plants |
| 3. As a user, I want to be able to query an API with a filtered list of plants based on my type of garden. | Sun: All day, Water: Drought Tolerant, Soil: Well Drained | Succulents and Cacti |
| 4. As a user, I want to see the details of each plant. | Lavender | All of Lavender's details  |
| 5. As a user, I want to be able to click a button to save plants to my profile. | Add Plant | Appear on Profile page |

## Setup/Installation Instructions

* Clone this repository to your project directory https://github.com/brussell36/Garden-Helper.git
* Go to [Firebase](https://firebase.google.com/) and create a new project.
* You will need to create a .env file at the top level of the project.
* When you create your project in Firebase you will get a script tag that holds a firebaseConfig variable.
* In the .env file paste 
`REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
REACT_APP_FIREBASE_DATABASE_URL = "https://YOUR-PROJECT-NAME.firebaseio.com"
REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"`
with all the strings changed to reflect what is in your firebaseConfig variable.
* Run `npm install`
* Run `npm start` to start a development server to view the project.

## Known Bugs

_No known issues. Please contact me if you have any problems._

## Support and contact details

Please feel free to contact me through GitHub (username: brussell36) with any questions, ideas or concerns. 

## Technologies Used

* React.js
* Firebase
* Webpack
* Visual Studio Code 
* Git and Git BASH 
* JSX
* HTML
* BootStrap
* CSS

### License

*This site is licensed under the MIT license.*

Copyright (c) 2020 **_Benjamin Russell_**
