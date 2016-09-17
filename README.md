# knowsnowgl
Gatineau Park XC Trail Condition Reporting with Mapbox GL JS

Development requirements assume Node and NPM installed on your system.
To install the project's dependencies and development dependencies change to the project's root directory and run

````shell
$ npm install
````
The application requires a Mapbox access [token](https://www.mapbox.com/help/define-access-token/)

It can be set as an environment variable by 
````shell
$ export MAPBOX_TOKEN=yourMapboxToken
````
Or create a local .env file with the same NAME VALUE pairs as described [here](https://github.com/motdotla/dotenv). Be sure to include .env in your .gitignore to avoid publishing keys to Github.

You can then run
````shell
$ npm run watch
````
And any changes you make in the src files will be compiled on the fly into the /static files that the application uses.

You can then open the application at 

````shell
http://localhost:3000
````
The application requires an instance of the [knowsnowapi](https://github.com/sharkinsspatial/knowsnowapi) running in the background for local testing.

Run unit tests with
````shell
$ npm test
````

To create a production build run
````shell
$ npm run bundle:prod
````

