import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext";

const LongArticle = () => {
  const { id } = useParams();
  const { getBlogById, selectedBlog, isError } = useContext(AppContext);

  useEffect(() => {
    getBlogById(id);
  }, [id, getBlogById]);

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }
  if (!selectedBlog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="long-article">
      <div className="Article-Heading">
      <h1 className="poppin-Heading">{selectedBlog.blogTitle} </h1>
      <h4 className="category"> {selectedBlog.category}</h4>
      </div>
      <p className="playwrite-mx-para">{selectedBlog.content}</p>
      <p className="article-author poppin-text">By {selectedBlog.authorName}</p>
    </div>
  );
};

export default LongArticle;
