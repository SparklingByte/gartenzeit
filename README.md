# Gartenzeit

## Video Demo

https://www.youtube.com/watch?v=q9ZuNWrdI5I

## Description

Gartenzeit is a web app allows users to find other people to help with harvesting in their garden. Users can register and login to the page to create events called "harvests" that others can join. Harvests are meetup-like postings that contain information like the description of the work that has to be done, what's the reward for the helpers and where / when the harvest takes place. The homepage is the dashboard where users can see all the harvests they have joined or are hosting. Users can also discover harvests of other users, check out their profile or change their own profile and account details like email address, profile image, profile description, location and password. For more details about the features and the UI, check out the video demo.

I've created this app for CS50x as my final project during my gap year in New Zealand. I'm happy that I was able to pursue the course during my travels and I'm quite satisfied with the result, as this is my first bigger project. A big thank you to everyone that makes CS50 possible, in case you read it :)

## Used technologies

### NextJS framework

- I decided to use React but it is recommended to use a framework like NextJS
- I Can have backend and front end in the same codespace
- It's easy to get started, has many built in functionality

### NextAuth

- Easy authentication of users -> login and registering of new users
- Unfortunately, poor documentation in my opinion, I would prefer a more clear tool next time

### Prisma ORM

- Easier interaction with the database
- Easy to create database schemes and migrations
- Automatically generates types for Typescript based on database schema

### Supabase

- Only used for hosting the database (postgreSQL) & data storage for user profile images (storage bucket)
- Easy to manage data in database with web GUI

### Storybook

- For easy component development and testing (can test and view components without the need to add them to a page by using a web GUI)

### zod

- For validation of user input / data sent to API
- Easy to specify validation schemes and create error messages

### bcrypt

- For hashing / comparing passwords

### Tailwind

- For easy styling components without writing actual CSS

### react-icons

- Adding icons as react components from different icon libraries -> fast

## Project Structure

### Introduction

As Im using NextJS 14, I'm using the [App Router](https://nextjs.org/docs/app). All directories inside the `src/app` directory with an `page.tsx` or `route.tsx` file represent a URL route, for example: `app/hello/page.tsx` is accessible via `example.com/hello`. For more information about how the app router works in NextJS, visit the NextJS docs link above.

In the following section, I will describe the single files inside the `src` or the `app` directory I've created.

### `/src` Directory

#### `app` Directory

##### `(auth)/login/login-form.tsx`

- The component is a form that lets the user enter his / her email and password in order to log in
- the input data from the user is validated with `zod` to ensure, that only valid data is sent to the API
- The form will display an error or success message depending on the response of the backend that processes the login request
- I created this as an extra client side component so the rest of the login page (`page.tsx`) can be server rendered (like page title)

##### `(auth)/page.tsx`

- The page uses the `login-form.tsx` component
- the function `redirectLoggedInUser` redirects the user if he / her is already logged in, thus cannot log in again

##### `(auth)/register/registrationForm.tsx`

- client side component that lets the user create a new account by entering details (username, email, location name, password)
- the entered data by the user is validated with `zod` in order to sent it to the API to reduce work load on the backend if the data is invalid
- the user gets an error or success alert depending on the server response
- Needs a new name for better consistency in file naming

##### `(auth)/register/page.tsx`

- Uses the `registrationForm` component to display the form to the user
- redirects an already logged in user with `redirectLoggedInUser`

##### `api/auth/[...nextauth]/route.ts`

- Contains the configuration for the authentication by NextAuth
- I decided to use the credentials login method to support the most common login method and to implement my own login and registration logic
- Contains the logic for logging in a user by comparing the hashed password he / she provided with the hashed password in the database
- the `[...nextauth]` route handles all NextAuth specific routes [REST API | NextAuth.js](https://next-auth.js.org/getting-started/rest-api)

##### `api/auth/changePassword/route.ts`

- provides an `HTTP POST` API route for changing the password of the current user
- Gets the current logged in user and receives the old and the new password the user provided in order to change his / her password
- checks if the old password is correct and validates the new password with `zod `
- hashes the password with `bcrypt` and stores it into the database
- sends an response to the client to signal error or success

##### `api/auth/register`

- route with `POST` method for registering a new user
- validates the data of the request, checks if the email or the username is already taken and hashes the password with `bcrypt` in order to store it into the database
- sends an response to the client about error or success

##### `api/harvests/route.ts`

- `GET` handler
  - responds with all harvests stored inside the database (need optimization, as its inperformant to query ALL harvests)
- `POST` handler
  - requires the user to be logged in to create a new harvest
  - validates data from the request
  - stores new harvest into the database
  - sends response with error or success message

##### `api/harvests/[harvestId]/route.ts`

- `GET` handler
  - check if the param `harvestId` is valid
  - queries data from harvest with `harvestId` from database (table `Harvest`)
  - responds with data to client
- `DELETE` handler
  - checks if the user is logged in
  - checks if the current user is the host of the harvest
  - deletes the harvest from the database (table `Harvest`)
  - responds with error or success message

##### `api/harvest/[harvestId]/participations/route.ts`

- `GET` handler
  - gets `harvestId` from params
  - queries all participations for the harvest with `harvestId` from the table `Harvest`
  - responds with the queried data
- `POST` handler
  - checks if user is logged in
  - check if user is not host of harvest -> would not be able to join own harvest
  - checks if the harvest is not already over
  - create a new participation for the harvest and the user in the `UserHarvestParticipation` table in the database
- `DELETE` handler
  - checks if user is participating in the harvest with `harvestId`
  - deletes the participation

##### `api/me/image/route.ts`

- `POST` handler
  - route for updating the user profile image
  - getting currently logged in user
  - validating the image file sent with the request
  - storing into the storage bucket with `supabase`
  - storing new image path into database (`User` table)
- `DELETE` handler
  - route for deleting the profile image of the logged in user
  - getting the current image path of profile image
  - deleting the image with the path from storage bucket
  - deleting the entry in database from table `User`

##### `api/user/[userId]/route.ts`

- `GET` handler
  - gets the `userId` from params
  - queries the database for the user with `userId`
  - responds with data from user or error if not found
- `PATCH` handler
  - route to update user information
  - checks if `userId` is `id` of the logged in user
  - checks if the request body contains new email, description or password
  - validates data
  - updates data in database in `User` table

##### `context/NextAuthProvider.tsx`

- component that provides the session context to get the `session` object

##### `discover/page.tsx`

- Fetches all harvests from the database and renders a list of `HarvestCard` components
- Only displays harvests of other users and harvests that the user has not joined yet

##### `harvest/[harvestId]/page.tsx`

- serves a dynamic page that displays all information about a harvest on a easy to understand UI
- The information is fetched server side with `prisma` from the database for the harvest with `harvestId`
- if the harvest is not found, the user will be redirected to a not-found page
- checking if the user is the host of the harvest or if not, what the participation status of the user and passing to the `JoinHarvestButton` component
- decided to query the database just once and to include all participations and then filtering and mapping over the participation status to get the status of the current user (`userHarvestParticipationStatus`) -> reducing calls to database

##### `harvest/[harvestId]/harvest-join-button.tsx`

- component that takes the `harvest`, `userId` and `participation` to change the appearance of the button, for example, if the user joined the harvests, it shows an 'Leave the Harvest' text and changes color
- calls the API to add the user to participations or remove him / her (the async functions `handleJoinHarvest`, `handleLeaveHarvest`)
- shows an error alert if the API response was unsuccessful
- as the button changes its loading state to `false` after the response of the API but the data is fetched and updated by the page (`harvest/[harvestId]/page.tsx`), there is a delay before the button switches the updated text between 'Join Harvest' or 'Leave Harvest' -> fix in a later update

##### `harvest/[harvestId]/settings/page.tsx`

- Dynamic page that shows settings for a harvest (currently just deleting the harvest)
- fetches server side information about harvest and host with `prisma`
- checks if logged in user is host of harvest
- Renders the `DeleteHarvestButton` component

##### `harvest/[harvestId]/settings/delete-harvest-button.tsx`

- component that calls the API to delete a harvest from the database
- shows an error message if not successful
- redirects user to homepage after deletion successful

##### `harvest/[harvestId]/create/page.tsx`

- Server side component that renders the `HarvestCreateForm` component

##### `harvest/create/HarvestCreateForm.tsx`

- renders an form for entering details for a harvest like title, description, reward, produce, location and datetime of start
- validates all information before submitting to API with `zod` and shows error message at the according input field
- submits the data to the API
- shows an error message if response is error
- redirects user to created harvest after success

##### `harvest/not-found/page.tsx`

- static page that renders an error message that the harvest was not found

##### `me/harvests/hosted/page.tsx` & `me/harvests/joined/page.tsx`

- Renders a list of `HarvestCards` for all hosted or joined harvests of the currently logged in user

##### `me/settings/page.tsx`

- server side page that renders sections with `ChangeImageForm`, `ChangeEmailForm`, `ChangePasswordForm`, `ChangeDescriptionForm` and `LogoutButton` components to change the according user data

##### `me/settings/change-description-form.tsx`, `me/settings/change-email-form.tsx`, `me/settings/change-password-form.tsx`

- renders a form to change user profile description
- validates input with `zod`
- sends data to API
- shows error / success message

##### `me/settings/change-image-form.tsx`

- renders form with `input` field with `type='file'`
- validates size and format of the selected image
- sends the image as `multipart/form-data` to API
- shows error / success message

##### `me/settings/logout-button.tsx`

- renders a button that logs the user out with the `nextAuth` function `signOut`

##### `me/page.tsx`

- renders a `UserProfileLayout` component to display information about the current user like image, username, location and description

##### `user/[username]/page.tsx`

- redirects to not-found page if `username` was not found
- dynamic page that renders a `UserProfileLayout` component to display information about the according user with `username` like image, username, location and description

##### `user/not-found/page.tsx`

- static page that renders a error message that the user was not found

##### `globals.css`

- importing the fonts [Outfit](https://fonts.google.com/specimen/Outfit?query=outfit) and [Rammetto One](https://fonts.google.com/specimen/Rammetto+One?query=rammetto) from Google Fonts
- adding the Tailwind directives `base`, `components` and `utilities`
- defining the root font size

##### `layout.tsx`

- layout that is automatically added to every page
- adds the `NavigationBar` and `NextAuthProvider` (context) component to every page

##### `not-found.tsx`

- Static page that is displayed if a page was not found (`404`)

##### `page.tsx`

- Server-side rendered page that fetches information about the user from the database and harvests that the currently logged in user joined and hosts
- is the homepage of the application
- welcomes the user
- renders `HarvestCard` components for joined and hosted harvests

##### `middleware.ts`

- Using the NextAuth middleware in NextJS to secure pages with a login

#### `components`

There are subdirectories in the `components` directory, but for simplifying the listing on this file, just the according filenames have been listed. For every component, I've also created a storybook stories file.

##### `Button.tsx`

- accepts props for `text`, `color`, `disabled state`, `isLoading` state, `showIcon` flag and `onClick` handler
- applies different styling according to `color`
- renders a button

##### `InputField.tsx`

- renders a input field
- takes the props `label`, `mutliline`, `color`, `errorMessage`, `disabled`, `required`
- I decided to have a built-in error message that is shown if `errorMessage` is provided to show an error with the input of a input field
- if `multiline` is `true`, a `textarea` is rendered instead of `input`

##### `UserProfileLayout.tsx`

- contains multiple components to render all elements of the profile page of a user, including a `UserCard` component and a `TextBox` component

##### `Typography.tsx`

- exports the components `Heading`, `Subheading` and `Paragraph`
- render specific HTML headings or paragraphs with the right styling so it's not required to rewrite the class names every time

##### `AlertBox.tsx`

- renders a alert box
- takes the props `status`, `title`, `message`
- conditionally changes the color depending on the `status`

##### `AuthorCard.tsx`

- renders the profile image of user and username with the text 'Hosted by'
- links to the user profile page

##### `CalloutBox.tsx`

- takes the props `title`, `description`, `children`
- renders a callout box with the according props

##### `Chip.tsx`

- renders a small chip / tag
- takes the props `text`, `color`, `icon`, `onClick`

##### `LogoBar.tsx`

- Renders a small bar with background and the text 'Gartenzeit'

##### `PageTitle.tsx`

- renders a title (and subtitle) for the use as the page title
- takes the props `title` and `subtitle

##### `SectionTitle.tsx`

- renders a title for a section with a subheading / helper text and a link to expand or view another page
- takes the props `title`, `helperText`, `linkText`, `linkPathname`

##### `StatusIndicator.tsx`

- renders a component takes displays a status with a small colored dot next to it
- takes the props `color` and `text`

##### `TextCard.tsx`

- renders an `<article>` that contains a heading and a text
- takes the props `title`, `text` and `children`

##### `UserWelcomeCard.tsx`

- Renders a welcome message with the username and the profile image of the user, that links to the user profile page
- takes the props `username` and `userProfileImage`

##### `UserCard.tsx`

- Renders the profile picture of a user, the location and the username
- takes the props `user`

##### `HarvestCard.tsx`

- takes an `harvest`, `host`, `participantsAmount`, `isHost`, `participationStatus` as props and renders most important information about a harvest in a card
- conditionally displays a `StatusIndicator` if the user has joined a harvest
- conditionally displays a color with the datetime if the harvest will begin that very day or is already over

##### `ParticipantsCount.tsx`

- Renders a person icon with the number of participants
- takes the props `amount`

##### `ActionMenuItem.tsx`

- renders an icon with a text as a navigation item
- takes the props `text`, `icon`, `iconPosition`, `onOpen`

##### `NavigationBar.tsx`

- renders navigation items in a container
- checks the current `pathname` with the `usePathname` hook to highlight the right item if a users visits a page
- links to Home, Create Harvest and Discover

##### `TopActionMenu.tsx`

- renders a container with a back and / or settings item (`ActionMenuItem`)
- takes the props `hasBackItem`, `hasSettingsItem`, `settingsPathname`

#### `lib`

##### `prismaClient.ts`

- creates a new `PrismaClient` and exports it
- if in development mode, client is stored globally to avoid multiple clients
- the client is used to interact with the database through prisma

##### `schemas.tsx`

- contains all validation schemas to validate data with `zod`

##### `supabaseClient.tsx`

- creates a new supabase client
- if in development mode, client is stored globally to avoid multiple clients
- used to interact with bucket storage to store user images

##### `utils.tsx`

- exports a `redirectLoggedInUser` function that takes a `route` as arguments and gets the `session` with `getServerSession`
- redirects the user to the `route` if the user is logged in

### Other files in the root directory

#### `prisma/schema.prisma`

- contains the database schema
- prisma creates migrations from the schema and applies them to the database

## What I would like to improve

### Code quality & project structure

- more consistency in naming files / components, use of types / schemas and code structure in general
- abstracting often used functions to reuse them
- using global variables / constantes to don't have to keep track of the same value in multiple places
- reducing database calls to optimize the performance

### Features

- Maps functionality to search locations
- filtering & searching harvests by name, location, produce etc.
- Ability to follow other members to see if they host a harvest
- Making the UI more responsive to enable easier use with desktop screens
- Implementing notfications so users can see if harvests they joined were updates, users joined their harvests etc.
- Approval system to approve / deny participants for a harvest
- editing harvests

## What would I change if I would start from the beginning?

- Not using NextJS but a seperate backend (ExpressJS or Flask) and a self-hosted database, because the high level of abstraction in NextJS and supabase partly make it difficult to understand the underlying technology
