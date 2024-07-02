import React from 'react';
//import {  ApolloProvider, useQuery, gql } from '@apollo/client';
//import logo from './logo.svg';
import './App.css';

// Define GraphQL query
/*const MESSAGE_QUERY = gql`
  query GetMessage {
    message
  }
`; */

function App() {
  // Use useQuery hook to fetch data
  //const { loading, error, data } = useQuery(MESSAGE_QUERY); --> Remove comment to use GraphQL
  
  //if (loading) return <p>Loading...</p>; --> Remove comment to use GraphQL
  //if (error) return <p>Error: {error.message}</p>;--> Remove comment to use GraphQL

  return (
    <div className="App">
      <header className="App-header">
        {/* Display the message fetched from the GraphQL query */}
        {/*<h1>{data.message}</h1> --> Remove comment to use GraphQL*/}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
