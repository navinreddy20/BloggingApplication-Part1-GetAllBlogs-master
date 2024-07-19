// AppProvider.js
import { createContext, useState, useEffect } from "react";
import { fetchBlogs, fetchBlogById } from "./api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [isError, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchBlogsData();
  }, []);

  const getBlogById = async (id) => {
    try {
      const blog = await fetchBlogById(id);
      setSelectedBlog(blog);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <AppContext.Provider value={{  blogs, isError, getBlogById, selectedBlog }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
