import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/blogs';

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const fetchBlogById = async (id) => {
  const response = await fetch(`http://localhost:8080/api/blogs/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  const data = await response.json();
  console.log(data);
  return data;
};

