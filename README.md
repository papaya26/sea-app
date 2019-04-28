# Introduction

SEA, a simple email applicaction, which provide its users an ability to send Email.

# How to Install Locally

1. `Git Bash Here` - to your workspace or `Open a terminal`
2. `git clone https://github.com/papaya26/simple-email-app.git`
3. `cd simple-email-app`
4. `npm install`
5. `ng serve`

Application will run at `http://localhost:4200/`

## TECH Stack

### Angular 7

I was informed that the current tech stack to be used is MEAN stack so I would like to show how I code using Angular.

As for the version, I've just used the latest angular CLI, no particular reason why.

### Angular Material

The reason I've used Angular Material (https://material.angular.io/) is that I'm more comfortable using it rather than other component libraries I've used such as Bootstrap (https://getbootstrap.com/) and PrimeNG (https://www.primefaces.org/primeng/#/).

### Angular Flex Layout

The reason I've used Angular Flex Layout (https://github.com/angular/flex-layout) is that it's easier for me to use it rather than creating and maintaining global styles given the problem at hand. But for a larger scale application, I would use SCSS and Mixins to create reausable predefined SCSS classes and templates for reuseability.

### MobX

The reason I've used MobX(https://github.com/mobxjs/mobx) is that unlike NgRx (https://ngrx.io/), mobx is pretty much straight forward that is why it's very east transition into, easy to learn, and easy to develop.

## System Architecture

Inside the Application, these are the following folders

- config
- core
- external
- internal
- shared

Each folder is at max depth 3 in terms of folder structure. Key folders has it's own index.ts files which exports key files so that you will not have to go through each of its sub folders to be used as imports.

### Config

This folder contains system constants such as route names which is the same regardless of the environment the application is in.

### Core

This folder contains components and services which only have 1 instance for the whole application. This module is only imported to the top module (App Module). Otherwise, it will throw an error.

### External

This folder contains pages/components that can be accessed without logging in.

### Internal

This folder contains pages/components that can only be accessed if is logged in.

### Shared

This folder contains components and service which is imported through each of the other modules. This module is intended to have 1 instance per module.

## Trade-off(s)/TODO(s)

Below are the trade-offs I've made due to time contraints:

- Would have been better if proper form error handling is done instead of just disabling the submit button it the form is invalid
- Would have been better if a much neater CKEditor is used for the email contruction itself
- Would have been better if proper user management with forgot password, edit profile, etc is done instead of just user creation.
- Would have been better if a Navigation Guard is implemented in the internal routes
- WOuld have been better if unit tests is created for each components/components methods

## Notable Applications I'm proud of:

```
https://asap.globe.com.ph/login
```

## Public Profile

```
https://ph.linkedin.com/in/judd-sosa-259b18169
```
