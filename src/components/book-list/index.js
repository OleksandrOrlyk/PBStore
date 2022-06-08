import React from "react";
import BookListItem from "../book-list-item";
import styles from "./styles.module.sass";

const BookList = (props) => {
  return (
    <ul>
      {props.books.map((item) => {
        return <li key={item.id}><BookListItem book={item} /></li>;
      })}
    </ul>
  );
};

export default BookList;
