# shopping-list-app-back-end

Link to the front end: https://github.com/hudasul/shopping-list-app-front-end

This is the back end of the shopping list app. this was done in collaboration with my partner in order to make the front end pages work.


the back end was coded using express and mongo db to store the user, item and shopping list schemas in databases.

---

##  Routes 

### Auth Routes

| Method | Endpoint     | Description        | Success Response     | Error Response         |
|--------|--------------|--------------------|----------------------|------------------------|
| POST   | `/auth/signup` | Register a new user | `201 Created` <br> `{ message: "User registered" }` | `400 Bad Request` – missing fields or duplicate |
| POST   | `/auth/login`  | Log in a user        | `200 OK` <br> `{ token: "JWT" }` | `401 Unauthorized` – invalid credentials |

---

### Item Routes

| Method | Endpoint     | Description              | Success Response          | Error Response           |
|--------|--------------|--------------------------|---------------------------|--------------------------|
| GET    | `/items/:id`    | Get a single item by ID   | `200 OK` <br> `{ item }`     | `404 Not Found` |
| PUT    | `/items/:id`    | Update an item            | `202 Accepted` <br> `{ updatedItem }` | `400 Bad Request` |
| DELETE | `/items/:id`    | Delete an item by ID      | `204 No Content`            | `404 Not Found` |

---

### Shopping List Routes

| Method | Endpoint                     | Description                          | Success Response                      | Error Response              |
|--------|------------------------------|--------------------------------------|---------------------------------------|-----------------------------|
| POST   | `/shopping-list/new`         | Create a new shopping list *(auth required)* | `201 Created` <br> `{ list }`            | `401 Unauthorized` |
| GET    | `/shopping-list/`            | Get all shopping lists *(auth required)* | `200 OK` <br> `[ lists ]`                | `401 Unauthorized` |
| GET    | `/shopping-list/:id`         | Get a single shopping list by ID     | `200 OK` <br> `{ list }`                | `404 Not Found` |
| PUT    | `/shopping-list/:id`         | Update a shopping list               | `202 Accepted` <br> `{ updatedList }`   | `400 Bad Request` |
| DELETE | `/shopping-list/:id`         | Delete a shopping list               | `204 No Content`                        | `404 Not Found` |
| POST   | `/shopping-list/:id/item`    | Add an item to a list                | `201 Created` <br> `{ item }`           | `400 Bad Request` |
| GET    | `/shopping-list/:id/item`    | Get all items in a list              | `200 OK` <br> `[ items ]`               | `404 Not Found` |

---

