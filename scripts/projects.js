var projectData = [
  {
    title:       'Online Shop',
    category:    'drinks',
    url:         'http://70.98.210.17/',
    developedOn: '2015-12-20',
    image:       'img/OnlineShop_sm.png',
    body:        '<p>Simulated Shopping Site with checkout function and order history. Uses Node Express to store products/merchandise, user\'s account information and user\'s orders.</p><p>Products\' images, information and "add to cart" are displayed when index.html page is loaded.</p><p>When "add to cart" button is clicked, a "You added \'item name\' to cart!" message is displayed and the number of item(s) in cart indicator is increased by 1.</p><p>When checkout button is clicked, user is taken to a login page. User logs in with username and password to proceed to checkout page.</p><p>Checkout page greets user by user\'s name and render table with user\'s added items.</p><p>User can update quantity and remove item(s) from table. Total prices, subtotal, tax and total will recalculate upon any changes.</p><p>If user end session, refreshed browser, or closed out broswer before submitting/completing order, user added items are stored in local storage and will be placed back into user cart when user return to site.</p><p>When submit order button is clicked, order information is posted to Node Express, user cart is reset, local storage is reset, and user\'s order number is displayed to the user.</p><p>When account button is clicked, user is taken to a login page. User logs in with username and password to proceed to user\'s account page. User\'s order history is retrieved from Node Express and displayed in a table.</p><p>Vendor page displays all items being sold by current user. On this page the user can edit or delete existing products as well as listing new ones.</p><p>Authors:</p><p>Kevin Chuang, Tim Nguyen, Tomi Inouye</p>'
  },
  {
    title:       'Vote Tracker',
    category:    'cat',
    url:         'http://70.98.210.18/',
    developedOn: '2015-11-16',
    image:       'img/VoteTracker_sm.png',
    body:        '<p>Create an app so visitors can vote on who they think is the cutest kitten ever.</p><p>When the app loads, two kitten photos are randomly selected for the visitors to vote for the cutest kitten by clicking on the photo of the kitten.</p><p>After the visitor cast their vote, the winning kitten photo will be enlarged and framed. A bar chart will be displayed showing the number of votes the two kitten have had so far.</p><p>The visitor will be asked to vote for two new randomly selected kitten photos. The chart will be updated as votes are cast.</p><p>Attribution:</p><ul><li>Images are from imgur.com.</li><li>Open Sans font from Google Fonts is used on this web page.</li><li>Chart is from ChartJS.org.</li></ul></p>www.w3schools.com, Stackoverflow, and JavaScript & JQuery by Jon Duckett are used as references when I am stuck.</p>'
  },
  {
    title:       'Donut Shop',
    category:    'food',
    url:         'http://70.98.210.19/',
    developedOn: '2015-11-01',
    image:       'img/DonutShop_sm.png',
    body:        '<p>Yummy Donuts, with franchises all over town, needs help calculating the number of donuts each location must make every day from 7:00 am to 6:00 pm, a total of 12 hours.</p><p>A table and chart are rendered to simulate donut demand for each location. Donut demand calculations are based on the minimum number of customers per hour, the maximum number of customers per hours, and the average number of donuts purchased per customer at each location. Donut demand simulation is caculated per hour and total hours (7am - 6pm, 12 hours). The total number represent the number of donuts each location must make every day. Number of customers per hour is a computer generated random number between the minimum and maximum number of customers per hour.</p><p>Attribution:</p><ul><li>Images are from Pixabay.</li><li>pen Sans font from GoogleFonts is used on this web page.</li><li>Chart is from ChartJS.org.</li></ul><p>www.w3schools.com, Stackoverflow, and JavaScript & JQuery by Jon Duckett are used as references when I am stuck.</p>'
  }
];
