# My Movie Database
The goal of this project is for you to spend two to four hours building a showcase of your best work. We've laid out several incremental versions below and ask that you tackle them in this order. If you are getting close to four hours, please wrap up and send us what you have finished rather than spending additional time. We're more interested in the quality of your work than the amount you get finished.

## Version 1.0 MVP
Create a simple app that lets me enter movies in my home movie collection, store them in offline storage (txt, csv, sqllite etc.) and search through them. I want to search by Genre, Title & Actors.
## Version 1.1 Ratings
Add the ability for me to rate each movie on a scale of 1-5 in .5 increments. Display this inline when viewing the list of movies.
## Version 1.2 Sorting
Allow me to sort by Genre, Title, Actors and Rating. This would be both ASC and DESC.

# Stretch goals
I've made the decision at the start to make the next two minor version increments stretch goals for this project. While doing some research, I've noticed that the Rotten Tomatoes, and IMDB APIs are no longer publicly available. Which would make for an increase in complexity for finding a new public API, and implementing. As such, I'm going to provide more work in area's not mentioned to display full mastery of the front end by adding unit, e2e Test, and build processes for the project.

## Version 1.3 API Descriptions
Integrate with the Rotten Tomatoes, OMDb API, or similar API to bring in descriptions for each movie and make those available through the UI.
## Version 1.4 API Ratings
If I haven't rated a movie yet, show the rating from the API integration above.

## Running the project
clone repository or download code to your machine.

using `npm install` install node_modules needed for the application to run. After all dependencies have been downloaded `npm start` will build and watch files for changes as well as run application to view.

## Runing the Tests
All testing for the application can be found under the `src/app/testing` folder. There are 2 options currently `e2e` or `specs` The e2e folder houses the protractor end-to-end test that can be run against the application. Where as the specs folder houses the jasmine unit tests to run against the application.

### E2E Test
To run the e2e test run the command `npm e2e`. This will build, server and run the application, webdriver-manager and the e2e tests. Results of e2e test are output to the `_test-output` folder that isn't checked into git.

### Unit Test
To run the unit test run the command `npm test`. This will build the application and specs folder code and run the tests against PhantomJS.

## Possible Improvements
TBD
