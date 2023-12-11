# InventoryIO

Mobile app built with React Native expo and uses Context Api for state management.

InventoryIO is a mobile app that allows users to list, add, edit, and delete inventory items.

## Screenshots

### Login

<img src="assets/images/screenshots/loginn.png" height="500em" alt='login' />

### Empty home & Home screen with data

<img src="assets/images/screenshots/empty home.png" height="500em" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="assets/images/screenshots/home.png" height="500em" alt='login' />

### Create inventory & Edit inventory

<img src="assets/images/screenshots/create.png" height="500em" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="assets/images/screenshots/edit.png" height="500em" alt='login' />

### Modal

<img src="assets/images/screenshots/modal.png" height="500em" />

## Run locally

To install all dependencies, you need to run the following command:

```bash

git clone https://github.com/the-aydev/InventoryIO.git
cd inventory-io

npm install
npm run start
npx run android

or

npx run ios

```

Write tests that ensure the confirmation pop up is shown when trying to delete an existing items.
Write tests to ensure users are taken to the edit screen after tapping on an existing item in the inventory list.
Write CRUD tests for your async storage operations to ensure Create, Update, Delete, and Get are all called accordingly.
