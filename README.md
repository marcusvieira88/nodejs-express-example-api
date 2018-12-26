# Introduction

This NodeJs,ExpressJs and MongoDB backend API, this project is used as example in my blog (https://marcusvieira.tech) tutorials.

## Install

```
npm install
```

## Start

```
npm start
```
## Check if app is running

```
http://localhost:3000/
```

## Api

| Method | Resource 		                     | Description                             |
|--------|-----------------------------------|-----------------------------------------|
| GET    | /index                            | return info if app is running           |
| GET    | /users                            | return all users                        |
| POST   | /users/                           | create a new user                       |
| GET	   | /users/:id  	                     | return a user  	                       |
| PUT	   | /users/{id}                       | update a user        	                 |
| DELETE | /users/{id}                       | delete a user      	                   |

## Frameworks

The frameworks used are:

* [bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Hash passwords
* [body-parser](https://github.com/expressjs/body-parser) - Parse request Bodies
* [debug](https://github.com/visionmedia/debug) - Debug format data
* [express](https://github.com/expressjs/express) - Web framework
* [mongoose](https://github.com/Automattic/mongoose) - MongoDB model and access
* [morgan](https://github.com/expressjs/morgan) - Logger app data
