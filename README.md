live link: https://darling-pika-43d08c.netlify.app/query

# Project Overview 

This project is a web application that allows users to post queries about products, request recommendations, and receive suggestions from other users. It includes a user authentication system, dynamic content rendering, and a database to store queries and recommendations.

# Layout
* Header
Navbar: Create a beautiful header with a navbar that includes the website name and logo.
Dynamic Sections: Based on user authentication status and route.
Footer
Content: Create a meaningful footer that includes:
Website logo and name
Copyright information
Social media links (Facebook and LinkedIn)
404 Error Page
Design: Create a custom 404 error page that displays a message for invalid routes or errors.
Button: Include a button that redirects the user to the homepage.
Navbar Design
Non-logged Users: Show the following menu:
# Home
# Queries
Log-in
Logged-in Users: Show the following menu with conditional user information:
Home
Queries
# Recommendations For Me
# My Queries
# My Recommendations
Logout
Login & Registration Systems
Login Page
Features:
Email/Password based login
Google Sign-in
Link to the registration page
Display relevant error messages
Registration Page
Features:
Email/Password form with the following fields:
Name
Email
Password
Photo URL


Default Landing Page: Includes sections with a navbar and footer layout.
Slider: Use strong images to express the website's purpose.
Banner: A tiny banner with a heading and button to navigate to the All Queries page.
Recent Queries: Show 6-8 recently added posts in a card format.
Extra Sections: Add 2 extra sections with creative and strong content.
# Add Queries (Private)
Access: Private route accessible from My Queries page.
Form Fields:
Product Name
Product Brand
Product Image URL
Query Title
Boycotting Reason Details
Add Query Button
Data Storage: Save the form data into a database collection with additional user and timestamp information.
# My Queries (Private)
Access: Private route.
Content: Display user's added queries in a card layout.
Banner: Stylish banner with heading and Add Queries button.
Buttons:
View Details
Update
Delete
Queries
Content: Display all queries in a descending order card layout.
Card Information:
Product Image
Query Title
Product Name
Brand Name
Alternation Reason
Date Posted
User Info
Recommendation Count
Recommend Button
# Query Details
Content: Display specific query details.
Query Information:
Product Image
Query Title
Product Name
Brand Name
Alternation Reason
Date Posted
Recommendation Count
User Information: Display the creator's information.
Add A Recommendation: Form to add recommendations with the following fields:
Recommendation Title
Recommended Product Name
Recommended Product Image
Recommendation Reason
Add Recommendation Button
# My Recommendations
Content: Display all recommendations made by the user in a table format.
Delete Button: Allow users to delete their recommendations with confirmation.
Recommendations For Me
Content: Display all recommendations made by others for the user's queries in a table format.
# Search functionality :
on this all query pages
# Change Layout: 
on this all query page and my query page
# Dark / Light Theme:
 in this navber


 # Pagination and Search Functionality for Queries Page 
 . Pagination Function: This function takes in data, current page number, and items per page, and returns the sliced data for that specific page.
 . Search Functionality: Added a search bar to allow users to search queries by keyword, category, or other criteria. The search results are automatically paginated using the same pagination functions.
 .Updated Design: Modified the design of the Queries Page to improve readability and user experience, including changes to text styling, button placement, and overall layout.
 
# For my project task,
I have implemented two new functionalities: pagination and search. The search functionality was already in place, and I focused on enhancing its performance. Additionally, I made some design changes to improve the overall user experience.
