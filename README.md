![Lush Garden](https://cdn.vox-cdn.com/thumbor/5i-GNzJNl5Bmy8vQp3HdAJNGaKs=/0x0:1400x897/1200x800/filters:focal(588x336:812x560)/cdn.vox-cdn.com/uploads/chorus_image/image/65893827/secret_garden_xl.0.jpg)
# Garden Helper

### Capstone Project for Epicodus, 09.25.2020

## By Benjamin Russell

## Description

This application will allow a user to track the different types of beer on tap at a tap room. The user will be able to see a list of all taps and see the details of a specific tap. The user will also be able to edit a taps details incase something was entered incorrectly. A tap can also be deleted when that keg is empty. Each time a beer is poured the amount of beer in the keg should be decreased and no more beer should be poured after the keg reaches 0 pints left.

![App Diagram](./Garden-components.png)

## Specifications

| Behavior | Input | Output |
| -------- | ----- | ------ |
| 1. As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brand, price and alcoholContent. |  | List of all Beers on Tap List |
| 2. As a user, I want to submit a form to add a new keg to a list. | Add New Tap button | New Tap appears on list |
| 3. As a user, I want to be able to click on a keg to see its detail page. |  | Pfriem IPA details |
| 4. As a user, I want to see how many pints are left in a keg. | Pour button | 123 pints left |
| 5. As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0. | Pour button | Out of Stock |

## Setup/Installation Instructions

* Clone this repository to your project directory https://github.com/brussell36/TapRoom.git
* Run `npm install`
* Run `npm start` to start a development server to view the project.

## Known Bugs

_No known issues. Please contact me if you have any problems._

## Support and contact details

Please feel free to contact me through GitHub (username: brussell36) with any questions, ideas or concerns. 

## Technologies Used

* React.js
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
