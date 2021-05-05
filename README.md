# deputy-test
## Summary ##
Functional test for Deputy

## Description ##
This test required a means of determining all subordinates underneath a specific user, based on their ID, and the two JavaScript objects in place (one for users and roles). The "roles" object is heirarchial and refers to reporting-to roles through the "parent" property which refers to the "id" property of their 1-up. The "users" object contains information on the role that they have through a "role" property which acts as a link to the roleID set as the Id property in the "roles" object.

The task as per the attached PDF in this repo, is to write a function that can, given a user's ID, provide a list of ALL subordinates (in the form of a list of objects), not just first-level.

## Assumptions ##
- Based on initial examples of the output, that the expected object returned would be an array of user objects matching the criteria. (First hint: using _filter_)
- Given that it would include a recursive algorithm somewhere within the function, I would be faced with dealing with multiple IDs later down the track (Second hint: using _includes_, which is relatively new)

## Installation ##
- Download and extract the repo into your respective folder
- **cd** into the respective folder
- Update/install **npm** with `npm install`
- When the installation has finished, install Jest.js with `npm i jest --save-dev`
- To execute the tests currently in the `__tests__` folder, use `npm test`


