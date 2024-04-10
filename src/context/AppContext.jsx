import { createContext, useState } from "react";
// #step 1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchBlogPosts,
    handlePageChange,
  };

  //   #step 3
  async function fetchBlogPosts(page) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://codehelp-apis.vercel.app/api/get-blogs?page=$${page}`
      );
      const data = await response.json();
      setPage(data.page);
      setPosts(data.posts);
      setTotalPage(data.totalPages);
    } catch (err) {
      console.log("Error occured white fetching the api");
      setPage(1);
      setPosts([]);
      setTotalPage(null);
    }
    setLoading(false);
  }

  function handlePageChange(newpage) {
    setPage(newpage);
    fetchBlogPosts(newpage);
  }
  // #step 2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
