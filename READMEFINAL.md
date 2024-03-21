# CS333FinalProject

First install necessary dependencies in root directory:
npm install react react-dom
npm install mongoose
npm install cors
npm install react-scripts
npm install express
npm install html2canvas
npm install jspdf


HOW TO BUILD:
cd frontend
npm run build

HOW TO RUN:
cd backend 
npm start

then open new terminal

cd frontend
npm start
type "y" when it asks you if you want to run another port
go to http://localhost:3001 in browser to view


For my project I tried to think of ways to improve the To-Do app. I came up with 3 ideas that I thought would make it nicer. 

1. Improve the CSS

I felt the css for the original to-do app was very minimalistic and not very visually appealing, so I sought to add on to it by adding a pleasant background image, editing the border thickness, color, and box shadows for the border and the buttons to create a more appealing look.

2. Add the ability for the user to input a time for each list item

I thought it would be useful to be able to add times for each to-do item, to make it a more fleshed out planner app. To do this I created a new component called TodoTime in the TodoTime.jsx file. I then edited TodoInput.jsx, Todo.jsx, and CreateTodo.jsx to include the TodoTime component in the page rendering. I also edited the todos.js file in the backend to include a new field in the todo schema for "time" 

3. Add the ability for the user to download the to-do list as a PDF

I felt it would be useful to have the option to download the to-do list, in case the user wanted to print it out. To do this I edited the App.jsx file and imported the jsPDF and html2canvas libraries. I used the html2canvas libray to get a capture/essentially a screenshot of the html elements, and then used the jspdf library to generate a pdf and place the image onto the PDF with appropriate sizing/scaling. In this way the user would have the to-do list able to be stored on their computer for further use. 

Challenges:

One major obstacle I encountered during this project was the backend and frontend not communicating properly. Despite the allowed origins being set to allow requests from port 3001, and even after manually setting the ports for both frontend and backend when doing npm start to make sure they were running on 3000 and 3001 respectively, requests to the backend would not execute successfully. 

Although in my terminal I received no errors, in the network tab in google chrome I found that during the fetch request it encountered a CORS error. I disabled CORS and saved and restarted the server, however it still refused to make the requests. Eventually after much trial and error I found that it worked if I added these lines of code to the index.js file in the backend: 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow certain HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow certain headers
  next();
});

This manually sets CORS to allow requests from any origin, and allows the GET, POST, PUT, and DELETE methods. This, I found, essentially forced CORS to allow requests from the frontend, and after that my app functioned as intended. 

There were many other challenges I faced during this project but this section is getting long. In essence, I learned a lot and grew by doing this project. 


Spots for improvement:

Things I could have improved upon were setting all buttons visibility to hidden during the PDF generation phase for a better PDF look. I did this with the "download PDF" button, but this could have been expanded upon. Additionally, when you edit a todo you can click on the title component but if you want to edit the time component you have to press the TAB button. This reduces user friendliness and is an area for improvement in the future.
