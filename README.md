# mvp2

A dynamic MVP recipe recommendation application based on user's available ingredient inputs.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Git clone the following URL to a folder: https://github.com/bbyee/mvp2.git


### Installing

Once the file has been cloned to a local folder, cd into the folder and npm install.

If you want to be able to make use of the api please go to spoonacular.com make an account. Then, retrieve the API key and replace the current inactive API key in api.js. Otherwise, comment out the APIkey import and relevant variables inside of Form.jsx, and RecipeEntry.jsx

If you have nodemon in your environment you can run the following npm scripts to launch the program:

npm run react-dev
npm run server-dev

otherwise:

npm run react-dev
node server/index.js



## Deployment

To deploy this application with an AWS EC2 instance:

1. Go to https://aws.amazon.com/

2. Launch a new EC2 instance
 ..For AMI, choose Ubuntu Server 18.04 and select the t2 microservice instance type.
 ..Use the default Configuration Details and Storage options.
 ..Add any Tags you want (optional).
 ..Add HTTP and HTTPS protocol types with default port settings.
 ..Review and launch instance.
 
3. Connect to the EC2 instance and run the ssh command for it in your command line.

4. Git clone the repo into the instance in your command line. 

5. Run npm run prod-start

6. Use your AWS Public DNS key to view the application in your browser.
 

## Built With

* React - Front-end Framework
* spoonacular - API 


## Authors

* **Brittany Yee** 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

