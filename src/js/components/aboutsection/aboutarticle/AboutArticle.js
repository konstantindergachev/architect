import React from 'react';

const Article = ({ text, subclass }) => {
  return <p className={`article article__${subclass}`}>{text}</p>;
};

export default Article;
