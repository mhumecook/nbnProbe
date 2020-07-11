# nbnProbe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

A project for me to try to take a look at node, Express, Angular, ReST.  And also to keep a eye on these people providing me with internet service.

I have a small utility on my Pi that periodically takes a look at how my internet provider is providing me.  It just records my download and upload speeds every 10 minutes and adds it to a file.

Maybe it should be added to a database.  Maybe that database should be MongoDB.

I want to have an Angular single-page-app that will show me how the service has performed over time.  I'd like to be able to graph the performance - that would be nice.  To start with, though, we'll probably just create a table.  There will have to be a filter so that I can see the performance over a particular period.

## Starting the components

### speedTest.sh

This should be started as the Pi comes up.  There is a bash script speedTest.sh that will write some simple JSON to speedtest.txt

### The Angular Server

`ng serve --open` will give you the serving you desire and open your browser to localhost:4200

### The ReST Server

`node index.js` within the appropriate directory will start your REST server on port 3030

### To Do

- I have to get all of the components playing together nicely
- Do I need to have Angular and Express in the same component, served up from the same port?
- If I have both servers in the same component, do I need to do something swanky with the routing?

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
