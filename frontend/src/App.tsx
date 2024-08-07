import React from 'react';
//import {  ApolloProvider, useQuery, gql } from '@apollo/client';
//import logo from './logo.svg';
import './App.css';
import { ChakraBaseProvider } from './chakra-provider';
import WithSubnavigation from './components/Navbar';

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
      <ChakraBaseProvider>
        <WithSubnavigation />
      <header className="App-header">
        {/* Display the message fetched from the GraphQL query */}
        {/*<h1>{data.message}</h1> --> Remove comment to use GraphQL*/}
       
      </header>
      </ChakraBaseProvider>
    </div>
  );
}

export default App;
