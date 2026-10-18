
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";


const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const One = styled.div`
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  height: 50px;
  padding: 0px 40px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: auto;
  animation: ${slideUp} 0.5s ease-out;
  position: relative;

  p {
    margin: 0;
    margin-left: auto;
    flex: 0 0 auto;
    white-space: nowrap;
    font-size: 14px;
    color: #333;
  }

  @media (max-width: 900px) {
    width: 95%;
    padding: 0 10px;
    p { display: none; }
  }
`;

const Scroller = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar { display: none; }
`;

const Link = styled(NavLink)`
  flex: 0 0 auto;
  white-space: nowrap;
  background: transparent;
  cursor: pointer;
  border: none;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 0.5px;
  color: rgb(59, 58, 58);
  margin-left: 15px;

  &:hover {
    color: rgb(245, 98, 40);
    transition: 0.4s;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  max-height: 70vh;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  display: ${({ $show }) => ($show ? "block" : "none")};
  animation: ${slideUp} 0.3s ease-out;
  z-index: 100;
  text-align: left;

  a {
    text-align: center;
    display: block;
    line-height: 3;
    color: #333;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      background-color: #f5f5f5;
      color: #f2672a;
    }
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button.attrs({ className: "main-category-btn" })`
  padding: 0px 5px;
  font-size: 16px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgb(234, 234, 234);
    transition: 0.4s;
  }
`;


const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // useEffect(() => {
  //   const getCategories = async () => {
  //     try {
  //       const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/category`);
  //       console.log(response.data);
  //       setCategories(response.data.categories);
  //     } catch (error) {
  //       toast.error("Error fetching Categories " + error.message);
  //     }
  //   };
  //   getCategories();
  // }, []);

  useEffect(() => {
  const getCategories = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/category`);
      console.log("category response:", response.data);

      const data = response.data;
      if (Array.isArray(data)) {
        setCategories(data);                 // API returns a plain array
      } else if (Array.isArray(data?.categories)) {
        setCategories(data.categories);      // API returns { categories: [...] }
      } else {
        setCategories([]);                   // HTML / error / anything else
        console.error("Unexpected category response:", data);
      }
    } catch (error) {
      setCategories([]);
      toast.error("Error fetching Categories " + error.message);
    }
  };
  getCategories();
}, []);

  return (
<One>
  <DropdownWrapper
    onMouseEnter={() => setShowDropdown(true)}
    onMouseLeave={() => setShowDropdown(false)}
  >
    <Button className="main-category-btn" onClick={() => setShowDropdown(true)}>
      SHOP BY CATEGORIES <i className="fa-solid fa-caret-down"></i>
    </Button>

    <Dropdown $show={showDropdown}>
      {categories.map((cat) => (
        <NavLink
          key={cat._id}
          to={`/products_per_category/${cat._id}`}
          onClick={() => setShowDropdown(false)}
        >
          {cat.c_name}
        </NavLink>
      ))}
    </Dropdown>
  </DropdownWrapper>

  <Scroller>
    <Link to="/all-products">Home</Link>
    {categories.map((cat) => (
      <Link key={cat._id} to={`/products_per_category/${cat._id}`}>
        {cat.c_name}
      </Link>
    ))}
  </Scroller>

  <p>Free International Delivery</p>
</One>
  );
};

export default Categories;
