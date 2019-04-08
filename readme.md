# MATH-RITE

## Installation
- npm install
- npm run dev
- http://localhost:3000

## Project specifics
- When installing new npm modules, always do npm install --save so that Heroku can build properly
- npm run lint -- --fix to fix eol issues

## Development and branch management
feature/branch => develop => master

## Heroku
- When develop branch is pushed to origin, it will kick off a build on dev environment on Heroku - https://math-rite-dev.herokuapp.com/
- When master branch is pushed to origin, it will kick off a build on prod environment on Heroku - https://math-rite.herokuapp.com/
