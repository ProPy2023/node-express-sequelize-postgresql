# Node.js Express, Sequelize & PostgreSQL: CRUD Rest APIs

We will build Rest Apis that can create, retrieve, update, delete and find Tutorials by title.

The following table shows overview of the Rest APIs that will be exported:

- GET     `api/tutorials`	            get all Tutorials
- GET     `api/tutorials/:id`         get Tutorial by id
- POST    `api/tutorials`             add new Tutorial
- PUT     `api/tutorials/:id`         update Tutorial by id
- DELETE  `api/tutorials/:id`         remove Tutorial by id
- DELETE  `api/tutorials`             remove all Tutorials
- GET     `api/tutorials/published`   find all published Tutorials
- GET     `api/tutorials?title=[kw]`  find all Tutorials which title contains 'kw'



### Test the APIs
Run our Node.js application with command: `node server.js`.

Using Postman, we're gonna test all the Apis above.

- Create a new Tutorial using `POST /tutorials` Api


- Retrieve all Tutorials using `GET /tutorials` Api

![node-js-postgresql-crud-example-retrieve-all](https://dev-to-uploads.s3.amazonaws.com/i/m9razjm1njgww58er3as.png)

- Retrieve a single Tutorial by id using `GET /tutorials/:id` Api

![node-js-postgresql-crud-example-retrieve-one](https://dev-to-uploads.s3.amazonaws.com/i/0kuojvc596i5u423od2b.png)

- Update a Tutorial using `PUT /tutorials/:id` Api

![node-js-postgresql-crud-example-update](https://dev-to-uploads.s3.amazonaws.com/i/3buqfz0by0lu2z4kf3uq.png)


- Find all Tutorials which title contains 'js': `GET /tutorials?title=js`

![node-js-postgresql-crud-example-search](https://dev-to-uploads.s3.amazonaws.com/i/u2hbmz5r35o7uo09y3z5.png)

- Find all published Tutorials using `GET /tutorials/published` Api

![node-js-postgresql-crud-example-search-status](https://dev-to-uploads.s3.amazonaws.com/i/dbo753wfqibt0b93d82d.png)

- Delete a Tutorial using `DELETE /tutorials/:id` Api

![node-js-postgresql-crud-example-delete-one](https://dev-to-uploads.s3.amazonaws.com/i/pyos3wq4tchb8ixuyj1c.png)



- Delete all Tutorials using `DELETE /tutorials` Api

![node-js-postgresql-crud-example-delete-all](https://dev-to-uploads.s3.amazonaws.com/i/ga42747jorssl20ywyug.png)

Now there are no rows in `tutorials` table:
```testdb=# select * from tutorials;
 id | title | description | published | createdAt | updatedAt
----+-------+-------------+-----------+-----------+-----------
```


## Project setup
```
npm install
```

### Run
```
node server.js
```
