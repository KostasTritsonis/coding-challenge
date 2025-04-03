# Code Challenge

## A brief explanation 
Our goal is to create a web app for google's github repositories.

We start by fetching the data inside a useEffect so we don't refetch the data infite.

We create a component card and style it,while we run the data with the use of map() and pass the repositories to the card as props. After the proccess of the card we create new components for the filtering-sorting.

We implement the logic for the filtering-sorting components with the sort() and filter() functions. 

In this phase we want to have the data in a global scope, so we use the redux library. We initialize the store and slice and we wrap the app with a provider.

## Instructions to run the app locally.

We run the commands:

npm install

npm run dev
