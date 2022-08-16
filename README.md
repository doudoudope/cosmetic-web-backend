# Team:Pink Pacific - Cosmetic Website

This project is designed for users to view and search for cosmetics, check for product descriptions ,shop and check out the items in the shopping cart. 
Team member: Yuan Liu, Shuyue Gao, Ye Zhang

## Iter 3

**Project requirements fulfilled**
1. We have 3 database tables: categories(to store the brand names of our cosmetic products), products(to store all our products information) and users(to store user information). Our website supports all 4 CRUD operations (create, read, update, delete) for each of the 3 database tables.
2. We have the home page, the explore(list all products) page, the shopping cart page, the signin/signup page and a detail page for each product.
3. For Bootstrap UI component, we used Card, ListGroup and Button for our user/admin dashboard and for the display of products on the Home, Explore pages. We also used Image to display our logo.
4. The 3rd party library for React we used is styled-components. It is used in src/components/pageComponents/Brands.jsx. The use of this library is for displaying the three brands on the home page (In the “Featured Brands section in Home page)

use of bootstrap screenshot:
![one](./screenshots/react-bootstrap-use.png)
use of 3rd party library: styled-components screenshot
![two](./screenshots/styled-components-use.png)

**Change of website from lo-fi mockups:**

We changed the logo on navbar to the left to make the navbar looks symmetric on home page. 

We also seperated the login and logout page to be two pages so it is more clear for the users. 

We added a layout section below the navbar to describe the function of the pages.

We also moved the search box on the home page down because we want the search result to be right below the search box so it is clear for the users.

We also added a best sellers section on the home page.
We combined three product pages for each brand to one shop page because we allow the users to filter products of each brand on the shop page. So there is not neccessary to make three seperate pages.

We added a adminboard and userboard. Admins can add, update, and delete brands and products. Registered users can view their shop cart.

We removed the cart dropdown menu because we felt it is not necessary since we already got a seperate cart page.

We did not implement the checkout function because this app is only a demo app and we did not have real product in stock. As we posted the app on Heroku, we want to prevent people from actually buying products from this app.

Note: the Checkout button on the cart page won't respond when pressed (It is the same in lo-fi mockups).

**Dependencies and Node version:**

Run npm install to install all the dependencies

Frontend:
node version: 18.1.0

Backend:
node version: 10.15.0

**Iter 3 Project contribution:**

Shuyue Gao created the updateBrand page, updateProduct page, manageProduct page to make sure that admin can delete brands, update products, delete products. Shuyue applied bootstrap on the cards in card.js, several buttons, Images, the cards on signin and signup pages. Shuyue also add the brand.jsx to apply the third party library styled-components. Shuyue also did lots of style changes, make sure things looks pretty, clean and symmetric. Shuyue also make the website responsiveness on different sized displays.

Ye Zhang tested the Web Application. 1. Tested all links in the webpages to make sure they were working correctly and there were no broken links. 2. Tested all the forms to make sure they were working as expected.  3. Test the site navigation to make sure the menus, buttons or links to different pages on the site were easily visible and consistent on all webpages. 4. Tested the database to make sure data integrity was maintained while creating, updating or deleting data in database. 5. Tested web security to make sure unauthorized access to secure pages should not be permitted. 

Yuan Liu implemented the shopping cart page, handled the “Add to cart” button for the products. Yuan also made sure the total number of items in the shopping cart can be shown next to the “Cart” button in the navigation bar. Then, Yuan implemented the quantity update and delete of items in the shopping cart. On the shopping cart page, Yuan made sure the total price of the items in the shopping cart can be calculated and displayed. In addition, Yuan also helped with a lot of debugging and many adjustments of css styles for the website.

<hr>

**Screenshots**
1. Home page - Featured Brands:
<br>

![1](./screenshots/Iter3-1.png)
<br>

2. Home page - Best sellers:
<br>

![2](./screenshots/Iter3-2.png)
<br>

3. Explore page:
<br>

![3](./screenshots/Iter3-3.png)
<br>

4. Shpping cart page
<br>

![4](./screenshots/Iter3-4.png)
<br>

5. User signup page:
<br>

![5](./screenshots/Iter3-5.png)
<br>

6. User signin page:
<br>

![6](./screenshots/Iter3-6.png)
<br>

7. User dashboard:
<br>

![7](./screenshots/Iter3-7.png)
<br>

8. Admin dashboard:
<br>

![8](./screenshots/Iter3-8.png)
<br>

9. Admin add category(brand) page:
<br>

![9](./screenshots/Iter3-9.png)
<br>


10. Admin add product page:
<br>

![10](./screenshots/Iter3-10.png)
<br>

11. Admin manage product page:
<br>

![11](./screenshots/Iter3-11.png)
<br>

12. Search Result Page
<br>

![12](./screenshots/Iter3-12.png)
<br>

13. Filter Result Page
<br>

![13](./screenshots/Iter3-13.png)
<br>

14. Single Item Detail Page
<br>

![14](./screenshots/Iter3-14.png)
<br>

<hr>

## Iter 2

**Project contribution:**

Shuyue Gao created the AddCategory page and AddProduct page to make the authorized users (Admins) to submit forms with required fields (some updates on the backends to make sure every field is filled out properly with restrictions) to create brands and create products from the website/frontend. Shuyue also created the card.js to design what kinds of information of each product should appear on the card (Whether the product is in stock, view product button to direct customers to product detailed page, and add to cart button to add to cart). Shuyue also created the detailed product page to show customers detailed information about each product and the product's related products. Shuyue added showImage.js to make sure each image is showing properly and created the home page that could show the best selling products. Shuyue added the routes needed, created style.css, menu.css, search.css, showimage.css,layout.css and card.css. Shuyue add the logo on the navbar and change the design, background color for the navbar and the layout. Shuyue also added a font that is used for the entire website.

Yuan Liu created the shop page and added shop page in the menu. Yuan also implemented the filters in the shop page, including filter by brand and filter by price range, so that users can filter the products base on the brand they want to look at and the price range of the product. Those filters are located in the side bar, users can use those filters by clicking on the checkboxes. Yuan also set up the controller methods and routes on the backend so that the frontend can make a request to the backend to fetch desired products based on the filters. Yuan then set up frontend to display the fetched products on the shop page as well as implemented the “load more” botton. In addition, Yuan implemented the frontend component for search bar and created route and controller methods in the backend for the search bar. The search bar allows users to pick a desired brand and type out the search query in the search box to search for specific items. Also, Yuan added search messages to show number of results for the search. Yuan also worked on fixing some css style issues in the frontend.

Ye Zhang finished the set ups for the backend, including setting up the routes for admin and for registered users and handleded the authentication for the admin and users. For the admin, Ye created the functions for admin to add category and add products. For registered users, Ye created the functions for users to signin, signup and add products to shop cart. Ye also tested the backend apis using postman. For frontend, Ye created the page for user signin, signup, signout and handled user success and error. Saved user information to local storage. Ye also created user dashoard component and admin dashboard component. Added proper links to dashboard based on user's role. For admin, Ye setted private routes so that he/she can go to the page for adding categories and products. For users, he/she can update information and view the shopping cart. 

<hr>

**Screenshots**

1. Home page:
<br>

![one](./screenshots/home.png)
<br>

2. Shop page:
<br>

![two](./screenshots/shop.png)
<br>

3. User signup page:
<br>

![three](./screenshots/signup.png)
<br>

4. User signin page:
<br>

![four](./screenshots/signin.png)
<br>

5. User dashboard:
<br>

![five](./screenshots/user_dashboard.png)
<br>

6. Admin dashboard:
<br>

![six](./screenshots/admin_dashboard.png)

7. Admin add category page:
<br>

![six](./screenshots/admin_add_category.png)

8. Admin add product page:
<br>

![six](./screenshots/admin_add_product.png)

9. MongoDB categories:
<br>

![six](./screenshots/mongodb_categories.png)

10. MongoDB products:
<br>

![six](./screenshots/mongodb_products.png)

11. MongoDB users:
<br>

![six](./screenshots/mongodb_users.png)

<hr>

## Iter 1

**Project contribution:**

Shuyue Gao created different routes for products and category/brand, generate several methods to find, create, read, update, delete products and category/brand when admin user is logged in (created middlewares to restrict access for different roles) and connect the methods to different routes for the backend. Shuyue Gao define the products and category/brand schema, added virtual fields and methods to the schema. Shuyue Gao also deployed the project onto heroku and designed the website logo.

Yuan Liu defined the user schema, added virtual fields and methods to the schema to encrypt the password and authenticate the user. Worked on the routes and controllers for signup, signin and signout, and the validation of the input signin information. Also created middlewares to restrict access for different roles in this website: the website admin, customers who have logged in and customers who are not logged in. Yuan Liu also set up the cluster on MongoDB Atlas and made deployments on heroku.

Ye Zhang set up the backend of this project using node JS and installed the necessary dependencies. Initially connected this project to MongoDB and gitpush to group github. For frontend part, Ye Zhang created a frontend react app. Set up the structure of the frontend, including user signup page, signin page and home page. Set up 3 routes linked to signup page, signin page and home page. Added menu bar and shared the layout component to all the pages. Worked on the signup page to create a signup form and leveraged useState Hook to handle change.

<hr>

**Screenshots**

1. a display of my project backend file tree:
<br>

![one](./screenshots/screenshot1.png)
<br>

2. a display of my project frontend file tree:
<br>

![two](./screenshots/screenshot2.png)
<br>

3. heroku home page:
<br>

![three](./screenshots/heroku_home.png)
<br>

4. heroku signup page:
<br>

![four](./screenshots/heroku_signup.png)
<br>

5. backend connected to db screenshot:
<br>

![five](./screenshots/db_connected_backend.png)
<br>

6. the cluster on MongoDB Atlas:
<br>

![six](./screenshots/mongodb_atlas.png)