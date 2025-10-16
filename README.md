# Code Refactor

- Overview

When you run the project, you should see a webpage that displays cards with information about Star Wars characters. This data is stored in an internal sqllite database.

package.json has been strategically removed.

### Requirements

[node]: https://nodejs.org/en/download/
[yarn]: https://classic.yarnpkg.com/en/docs/install

This work uses Node v20.19.2

### Installation

```
cd backend
cp default.env .env
yarn install
yarn prisma db seed
yarn start:dev
```

This will run the backend on [http://localhost:3000](http://localhost:3000/) and will hot reload.

```
cd frontend
cp default.env .env
yarn install
yarn dev
```

This will run the frontend on [http://localhost:3000](http://localhost:3000/) too.

You will need to have both front end and back end running in order to properly access the functionality.

