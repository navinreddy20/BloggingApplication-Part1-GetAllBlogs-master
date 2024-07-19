import React,{useState,useEffect} from "react";
import "./Navbar.css";
import searchButton from "../../assets/searching.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


 const toggleNav =()=>{
   setIsMenuOpen(!isMenuOpen)
 }
 const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
};

const handleSearchSubmit = (e) => {
  e.preventDefault();
  // Handle the search logic here
  console.log("Search Query: ", searchQuery);
};
  return (
    <div>
      <nav>
        <div className="logo">
          {/* <img src={logo} alt="logo" /> */}
          <h1>TELUSKO</h1>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Add Article</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <img src={searchButton} alt="search" />
              </button>
            </form>
          </li>
        </ul>
        <div className={`hamburger ${ isMenuOpen ? "hamburger-active" : ""}`} onClick={toggleNav}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
      <div className={`menubar ${isMenuOpen ? "active" : ""}`}>
        
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Add Article</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
          <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <img src={searchButton} alt="search" />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
