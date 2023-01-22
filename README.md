# Weekly Planner
<aside><strong>This is the 2nd challenge of the Compass.uol Trainee Program!:computer::books:</strong></aside>

###### Description
<p>
The project consists of an planner which the main goal is to help the user to organize their week and their tasks, also at what time they happen. 
To facilitate the visualization of the users's appointments, each task and its respective time will present the same color of its respective day of the week. 
If a certain time presents more than one task, it will be crossed out of the planner.
</p>

<aside><strong>Link to Figma:</strong> https://www.figma.com/file/bFCO644LzxRZTqyGSLcgzI/Weekly-Planner?node-id=0%3A1&t=YLhqjrmdlyozww2K-1</aside>

## :heavy_exclamation_mark: Mandatory Requirements
<ul>
<li>
Using ReactJS.
</li>
<li>
Layout according to Figma, respecting all of Figma's layout colors and sizes.
</li>
<li>
Do not utilize libraries.
</li>
</ul>

## Development Setup
`git clone https://github.com/isefsh/planner-weekly.git`

<p>After running the git clone command, install the dependencies:</p>

`npm install` <br/>
`npm install react-router-dom` <br/>
`npm -i axios` <br/>
`npm styled-components` <br/>

<p>To run the application use:</p>

`npm run dev`

## :wrench: Features
<ul>
<li>
<strong>On Register Page</strong>: Validation of inputs on Register and Login pages - Registered user saved on localStorage - Protected Routes.
</li>
<li>
<strong>On Login Page</strong>: User can log in using their full name or e-mail - Protected Routes.
</li>
<li>
<strong>On Dashboard Page</strong>: Real Time Clock - Weather API - Logout button - Tasks filtered by day of the week - Delete button excludes the tasks that are showing on planner - It is possible to delete a specific card - Conflicting tasks are crossed out by a line and present a different color.
</li>
</ul>

## :bomb: Issues
<ol>
<li>On Login Page, there's a delay on input's icon animations.</li>
<li>There's no error message on Weather's component if the inserted city doesn't exists.</li>
<li>The line used to cross conflicting tasks doesn't fully follows the Figma layout.</li>
<li>The time displayed on card is incorrectly formated.</li>
<li>The planner doesn't have a scroll on overflow.</li>
</ol>

## :hammer_and_wrench: Future implementations
<ol>
<li>On Register Page I would like to implement a way to show which input has an error.</li>
<li>Using Typescript instead of Javascript</li>
<li>Writing cleaner code</li>
</ol>

## Technologies
<div style="display:flex;">
  <a><img src='https://logospng.org/download/javascript/logo-javascript-1024.png' alt='Javascript' width='40' height='40'></a>
  <a><img src='https://icon-library.com/images/react-icon/react-icon-29.jpg' alt='ReactJS' width='40' height='40'></a>
  <a><img src='https://miro.medium.com/max/480/1*Iohnw2aOQ5EBghVoqKA7VA.png' alt='Styled Components' width='40' height='40'></a>
</div>