## Overview of the task

The main aim of the project is to create an online user-controlled-interface were the interface is implemented as 
a single page application with React. This interface should enable a user to choose combinations of sound, svg-graphics 
and text. A selected combination is then visually shown and can be saved as a favourite. 


## Our solution

To achieve our goal, the project is built using react components and JSX and the data used is loaded in using ajax. 
Other features like html-web storage is also implemented to provide good functionality.


## React

The project is built with React components and JSX. React is a javascript library for building single-page
user interfaces. JSX on the other hand is similar in appearance to HTML. It provides a way to structure component 
rendering using syntax familiar to many developers. React components are typically written using JSX. We 
have implemented both functional components and class based components in cases were we 
needed to use states for updating a component state. 

## Ajax

With AJAX (Asynchronous JavaScript And XML), web applications can send and retrieve data from a server 
in the background without interfering with the display and behavior of the existing page. We used this technique to 
retrieve both text and pictures on our application using the `fetch()` API. Since we were building a single page 
application AJAX seemed a perfect way to deal with most of our data rendering. By taking advantage of the inbuilt 
caching system in the browsers we have ensured that the fetched picture and text stay saved on the client's browser 
and therefore no need for retrieving it multiple times from the server. We have confirmed that the media resources
are indeed cached in webbrowsers when visiting the app. On the first request of a given resource, it is loaded
with http and upon later visiting the same resource, it is loaded from cache, as expected. 


## Responsive design

Various CSS features were implemented to make the application responsive. Media queries were mostly used to change sizes 
of different components depending on the max screen size of a device. This enabled us to maintain a nice presentation of
the application on every screen size. Most components were placed around using grid layout. Grid layout was mostly preferred 
over flexbox since its easier for us to deal with although any could have worked fine.


## Styling

We went for a single color background and used custom fonts to style up our text. We used one font for all heading and 
one for the entire body text. We also used fontawesome library to style up the toggle buttons with simple arrow icons.
Together this produced a simple and easy to use application. We have  also preferred to use a slider container for 
navigating through the different combinations as an alternative to tabs. 


## Webstorage

We use webstorage to store the favorites the user has chosen. By saving the state in localStorage at the time
the user presses the save favorite button, the state + the input name is stored in localstorage. We use only
one entry for localstorage, and store the different favorites as an array, using JSON strings. When the user
chooses to view a favorite, the app loads all the favorites and finds the correct array elemnt. It is ofcourse 
possible to store the data as multiple entries in locastorage, but we made the choice not to do this as it clutters
up all the localstorage, making it not so clean if we ever need more entries. 

We also attempted to implement a history feature where the user would be able to go back and look at previously
visited combinations. While the session storage part did work, this feature still introduced a lot of weird bugs, 
and would require a large restructure of our codebase to implement it to a standard we felt was sufficient. We 
therefore decided to focus our energy elsewhere. The work on session storage may be viewed on the [sessionstorage branch](https://gitlab.stud.idi.ntnu.no/IT2810-H19/teams/team-30/prosjekt2/tree/sessionstorage). We realize that this was a requirement in the task, but since we did an 
honest attempt at implementing it and learned about the session storage API when working on the project, 
we hope whoever is grading us will take this into consideration. 

## Testing

We implemented snapshot tests for some components using jest. Jest and snapshot testing is quite easy to work
with with a simple project such as ours. We just had to write the tests, inject some valid props into the component
we wanted to test, and jest pretty much handles the rest for us. A more sophisticated problem arises if we 
should test the non-deterministic components of the app such as `MediaContainer`. In this case we would 
have to mock the non-deterministic elements of the component, something we decided to not spend time on in this project.


## Summary

Our web application can be found [here](it2810-30.idi.ntnu.no/prosjekt2/index.html).

