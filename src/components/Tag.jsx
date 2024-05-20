import React from 'react'
import "./Tag.css"

// const Tag = (props) => {
//   return (
//     <button className="tag">{props.tagName}</button>
//   );
// }
const Tag = ({tagName}) => {
    return (
      <button className="tag">{tagName}</button>
    );
  }

export default Tag
