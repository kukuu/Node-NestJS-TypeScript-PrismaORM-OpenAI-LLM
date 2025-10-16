# RUNBOOK - Code Refactor

## Analysis of Current Codebase

The current code has:

  - A form with TanStack Form for state management

  - Form fields defined but not rendered in the JSX

  - An empty onSubmit function that only logs to console

  - No actual API call to create a character

## Initial Key Fixes Made During Installation:

  - Added comprehensive error logging with console.log at each step

  - Added response status checking to catch HTTP errors

  - Added retry button in error state

  - Removed API key header since backend likely doesn't need it

  - Added character count in the title

  - Added empty state when no characters are available

  - Set up the environment: Added enhanced logging, to main.tsx to enable CORS, and also  included optimising the templates to read visual logs. Added RETRY and TEST CONNECTION buttons in the frontend page.tsx for enhanced error handling.I have patched the ports. Allowing 3002 for the backend and 3000/3001 for the frontend.

## Key Changes made to CreateDialog.tsx: 


- Added Form Fields: Implemented all the form fields (name, height, mass, hairColour, skinColour, eyeColour, gender) using TanStack Form's form.Field components.

- Enhanced onSubmit Function:

  - Added API call to http://localhost:3002/api/characters  (backend endpoint)

  - Added loading state management

  - Added error handling

  - Added callback to parent component when character is created

  - Added Props Interface: Added onCharacterCreated callback prop to notify parent components when a new character is created.

- Improved UX:

  - Loading states on submit button

  - Form reset on close/success

  - Proper form validation with required fields

  - Error messaging


   
## Features

- Error Handling
 ![Error Handling](https://github.com/kukuu/Applied/blob/main/coding-challenge/docs/improved-error-handling-logs.png)

- API Response

  ![API Response](https://github.com/kukuu/Applied/blob/main/coding-challenge/docs/localhost-3002-characters-api.png)

- Application

 ![Application](https://github.com/kukuu/Applied/blob/main/coding-challenge/docs/results.png)

 ## Enabling POST Request
 The core backend modification involved adding a POST endpoint at /characters in the AppController to handle character creation requests. This endpoint accepts character data through the request body and delegates processing to the CharactersService. Simultaneously, the CharactersService was enhanced with a create method that utilizes the existing DatabaseService to persist character records to the database via Prisma's create operation, ensuring data integrity and proper integration with the existing data layer.

On the frontend, the CreateDialog component was substantially completed by implementing the form's onSubmit handler. This handler was configured to make a POST request to the new backend endpoint, transmitting the form data as JSON. The UI was fully built out by rendering all necessary form fields (name, height, mass, hairColour, skinColour, eyeColour, gender) using TanStack Form's Field components, providing users with a complete interface for data input.

The integration was finalized by adding comprehensive state management for loading indicators and user feedback, along with robust error handling for failed API calls. The form was properly wired to trigger submission through the TanStack Form's handleSubmit method, and successful character creation triggers a callback to refresh the parent component's character list. The temporary removal of the API key header resolved the initial authentication barrier, allowing the frontend-backend communication to function correctly in the development environment.

- Added POST Card

 ![POST Card](https://github.com/kukuu/Applied/blob/main/coding-challenge/docs/POST-Card.png)
