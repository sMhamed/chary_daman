# TachyApp

## Prerequisties

Before you begin, ensure you have the following software installed on your machine:

- **Node.js:** [Download and install Node.js](https://nodejs.org/)
- **Angular CLI:** Install the Angular CLI globally using npm with the following command:

```shell
   npm install -g @angular/cli@16.0.0
```

## Installation

1. Clone the repository or download the source code

```shell
   git clone <repository-url>
```
2. Navigate to the project directory using the command line:

```shell
   cd <project-directory>
```
3. Install the project dependencies:

```shell
   npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Demo
1. Login Page:
    - When you first open the application, a login page will be displayed.
    - To Log in, use the following credentials:  
    `username: operator, password: 1234`

2. Customer Selection Page:
    - After successfully logging in, you will be directed to the Customer Selection Page.
    - This page consists of two sections: Search Customer and New Customer.
    - In the Search Customer section, you can enter customer details in the search fields, then click the 'Search' button to initiate the search.
    - A dummy result table will be displayed, showing information for three customers.
    - Within the search results, click the '...'(ellipsis) icon next to a customer. 
    - Select 'New Order' to start a new Order
    - Alternatively, you can create a new customer and order using the 'New Customer' section. 
    - Enter the required customer details and click 'Add Customer and Create new Order'

3. New Order Page:
    - After making your selection of the various services, click 'Next' to proceed
    to the Installation page.

4. Installation Page:
    - Click 'Next' to proceed to the verification page.

5. Verification Page:
    - Click 'Next' to proceed to the report page

6. Report Page:
    - the final step


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
