<h1>Shopping list application: back end </h1>

Link to the front end: https://github.com/hudasul/shoppingList-app-front-end


This is the back end of the shopping list app. this was done in collaboration with my partner in order to make the front end pages work.


the back end was coded using express and mongo db to store the user, item and shopping list schemas in databases.
<br>


## User routes 
<table>
  <tr>
    <th>HTTP Method</th>
    <th>URL</th>
    <th>Use Case</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/auth/signup</td>
    <td>Create a new user</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/auth/login</td>
    <td>Log in </td>
  </tr>
</table>
<br>


## Shopping list routes 
<table>
  <tr>
    <th>HTTP Method</th>
    <th>URL</th>
    <th>Use Case</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/shoppingList/new</td>
    <td>Create a new shopping list</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/shoppingList/</td>
    <td>Show all shopping lists</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/shoppingList/:id</td>
    <td>Get a specific shopping list by ID</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/shoppingList/:id</td>
    <td>Update an existing shopping list</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/shoppingList/:id</td>
    <td>Delete a shopping list</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/shoppingList/:id/item</td>
    <td>Add an item to the list</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/shoppingList/:id/item</td>
    <td>show all items in the shopping list</td>
  </tr>
</table>

<br>


## Item routes 
<table>
  <tr>
    <th>HTTP Method</th>
    <th>URI</th>
    <th>Use Case</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/item/:id</td>
    <td>Shows the item</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/item/:id</td>
    <td>Updates the item</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/item/:id</td>
    <td>Deletes the item</td>
  </tr>
</table>
