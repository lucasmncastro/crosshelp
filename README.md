# Crosshelp

## Setup

To install the application you need setup and install some libraries using the
package management tool of Ruby and Node.

We are developing the app using these versions:

- Node: 8.2.1
- Ruby: 2.3.1
- MySQL: 5.7.17

Assuming that you already have Ruby, Node and MySQL, run these commands on the
terminal...

Inside the frontend directory:

`$ npm install`

Inside the backend directory:

`$ bundle install`

Now, if everything goes fine, you already have the dependencies of Rails and
Angular app.

The next step is create the database. The project is configured to the user 
"root" with blank password. If you have other credential, please consider to 
change config/database.yml before run the next commands.

```
$ rake db:create
$ rake db:migrate
$ rake db:seed
```

These commands will create the database of test and development, create all the
tables and seed the database with some example data.


## Starting

Inside the backend directory:

`$ rails s`

Inside the frontend directory:

`$ ng serve`

Open the browser in: http://localhost:4200/

Access the system with these users:

- Administrator: alex@email.com 
- Agent: karla@email.com 
- Customer:
  - andrey@email.com
  - andy@email.com
  - bryan@email.com

All have the same password: 12345678 


## Tests

Inside the backend directory:

`$ rspec`

Inside the frontend directory:

`$ node test`


## License

This is a open source under the terms of the MIT License.
