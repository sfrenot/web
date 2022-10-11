// CommentForm.js
import React from 'react';

const CommentForm = props => (
  <form onSubmit={props.submitNewComment}>
    <input
      type="text"
      name="author"
      placeholder="Your name…"
      value={props.author}
      onChange={props.handleChangeText}
    />
    <input
      type="text"
      name="text"
      placeholder="Say something..."
      value={props.text}
      onChange={props.handleChangeText}
    />
    <button type="submit">Submit</button>
  </form>
);

CommentForm.defaultProps = {
  text: '',
  author: '',
};

export default CommentForm;
