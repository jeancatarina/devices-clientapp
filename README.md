# Device Manager

This project is a client web application built with ReactJS, TypeScript, Lerna, and a monorepo structure, to manage devices. The devices have the following properties:

- Id
- System Name
- Type
- HDD Capacity

There are only 3 possible types of devices on this app:

- Windows Workstation
- Windows Server
- Mac

The project utilizes the following libraries and tools:

- Redux Toolkit for state management
- Emotion for styling
- Chakra UI for UI components
- Lerna for managing multi-package repositories
- Yarn for package management

The project is organized into several different packages, including:

## Packages/Apps
- `backend`: The backend of the device manager
- `frontend`: The frontend of the device manager

## Packages/Libs
- `eslint`: The linting configuration for the project
- `cypress`: The end-to-end testing library for the project

## Packages/Common
- `ui`: Contains shared UI components
- `utils`: Contains shared utility functions
- `types`: Contains shared TypeScript types
- `api`: Contains shared functions that interact with the backend server

## Features
- The main view is a dashboard where users can see all devices listed.
- User can filter devices by one Type. For example, if the user selects “Windows Server” from Device Type filter, the only device displayed will be the third one.
- User can sort devices by system name. If the user selects “System Name” from Sort By, the devices should be sorted in alphabetical order according to the system name.
- User can sort devices by HDD Capacity from low to high.
- User can Add, Update or Delete devices.
- A second view or modal allows to add new devices or update an existing one.
- Create one button in the dashboard view in order to go to the Add Device Form.
- All three properties are required (System Name, Type, and HDD Capacity).
- HDD Capacity should only accept a number of gigabytes.
- Create one button at the right side of every device in the dashboard in order to edit the device properties. This button should open the Edit Device Form.
- Apply same requirements for fields as Add Device.
- Create one button at the right side of every device in the dashboard in order to delete it.

## Running the project

To run the project, navigate to the root of the project and run `yarn start`. This will start both the frontend and backend servers.

To run the tests, run `yarn test`.

To lint the code, run `yarn lint`.

## License
This project is licensed under the [MIT License](LICENSE).
