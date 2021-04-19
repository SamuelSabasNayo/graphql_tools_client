/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

export class BookList extends Component {
  displayBook() {
    const data = this.props;

    if (data.data.loading) {
      return <div>Loading books...</div>;
    }
    return data.data.books.map(book => (
      <li key={book.id}>{book.name}</li>
    ));
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          { this.displayBook() }
        </ul>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookList);
