# MyLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Code scaffolding

Run `ng generate component component-name --project my-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project my-lib`.
> Note: Don't forget to add `--project my-lib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build my-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build my-lib`, go to the dist folder `cd dist/my-lib` and run `npm publish`.

## Running unit tests

Run `ng test my-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## To use the library in separate project.

Assume, you have th folder structure 
  ./LibraryTest
      |
      |
      |--> LibUser
      |
      |
      |--> MyLibrary

Here *LibUser* and *MyLibrary* two seperate angular projects.
In order to use the MyLibrary component in the LibUser,

1. Compile and build all the MyLibrary projects.
2. Go to angular.json, as mentioned in the structure below, make sure the the last line ``` "preserveSymlinks": true ``` exists.

```
"projects": {
    "LibUser": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "prefix": "app",
      "schematics": {},
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/LibUser",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": [],
            "es5BrowserSupport": true,
            "preserveSymlinks": true
```

3. In the LibUser folder run, ``` npm install ../MyLibrary/dist/my-lib/ ```
4. Use the component in the library.
