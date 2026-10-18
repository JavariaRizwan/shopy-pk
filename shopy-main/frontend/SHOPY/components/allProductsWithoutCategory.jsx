import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../allFunctionsJS/cartFunctions";


// =================== Styled Components ===================


const Comb = styled.div`
  padding-top: 20px;
  width: 95%;
  margin: auto;
  font-family: "Montserrat", sans-serif;
  min-height: 90vh;
`;

const CardScroll = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 20px;

  .first {
    grid-column: 1 / -1;
    box-sizing: border-box;
    min-height: 45px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(241, 237, 237);
    border-radius: 5px;
    padding: 5px 10px;
  }

  .to p {
    font-size: 18px;
    letter-spacing: 0.3px;
    margin: 0;
  }

  .on {
    display: flex;
    align-items: center;
    gap: 15px;

    i {
      font-size: 20px;
      cursor: pointer;
    }
    i:hover {
      color: rgb(247, 100, 42);
      transition: 0.4s;
    }
  }

  .btn {
    width: 35%;
  }

  @media (max-width: 900px) {
    .first {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 10px;
    }
    .on { display: none; }
    .to p { font-size: 15px; line-height: 1.4; }
    .btn { width: 100%; }
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

const Cards = styled.div`
  box-sizing: border-box;
  height: 340px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 0px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: 0.2s;
  cursor: pointer;

  .main-img,
  .hover-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease;
  }
  .hover-img { opacity: 0; }

  @media (hover: hover) {
    &:hover .hover-img { opacity: 1; }
    &:hover .main-img { opacity: 0; }
  }

  p {
    color: #f2672a;
    font-weight: bold;
    font-size: 16px;
  }
  i { color: #f2672a; }

  button {
    cursor: pointer;
    border: 1px solid #f2672a;
    background: transparent;
    color: #f2672a;
    height: 30px;
    width: 95%;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: auto;
  }
  button:hover {
    background-color: #f2672a;
    color: white;
  }
  button:hover i { color: white; }

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-top: 210px;
    margin-bottom: 5px;
    height: 32px;
  }
  h3:hover { color: rgb(253, 102, 37); }

  @media (max-width: 600px) {
    height: 310px;
    padding: 0 6px;

    .main-img,
    .hover-img { height: 170px; }

    h3 {
      margin-top: 180px;
      font-size: 13px;
    }
    p { font-size: 14px; }
    button { font-size: 12px; }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-top: 210px;
    margin-bottom: 5px;
    height: 32px;
  }
  h3:hover { color: rgb(253, 102, 37); }

  @media (max-width: 600px) {
    h3 {
      margin-top: 180px;
      font-size: 13px;
    }
  }
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  white-space: nowrap;
`;

const Select = styled.select`
  flex: 1;
  min-width: 0;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const One = styled.div`
  width: 20%;
  height: 90vh;
`;


// =================== Component ===================

const CompleteProducts = () => {
  const cardScrollRef = useRef();
  const [allProducts, setAllProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/all-products`).then((res) => {
      setAllProducts(res.data);
      setProductCount(res.data.length);
    });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    const sorted = [...allProducts];
    if (value === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (value === "aToZ") {
      sorted.sort((a, b) => a.p_name.localeCompare(b.p_name));
    } else if (value === "zToA") {
      sorted.sort((a, b) => b.p_name.localeCompare(a.p_name));
    }

    setAllProducts(sorted);
  };




  return (
    <Comb>


      <CardScroll ref={cardScrollRef}>
        {/* Sorting + Product Count Header */}
        <div className="first">
          <div className="on">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-table-cells-large"></i>
          </div>

          <div className="to">
            <p>There are total {productCount} products</p>
          </div>

          <div className="btn">
            <SortContainer>
              <Label htmlFor="sort">Sort By:</Label>
              <Select id="sort" value={selectedOption} onChange={handleChange}>
                <option value="">Featured</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
                <option value="aToZ">Name A to Z</option>
                <option value="zToA">Name Z to A</option>
              </Select>
            </SortContainer>
          </div>
        </div>

        {/* Product Cards */}
        {allProducts.map((item) => (
          <Cards key={item._id}>
            <img
              src={`${import.meta.env.VITE_API_URL}/${item.p_image_1.replace(/\\/g, "/")}`}
              className="main-img"
              alt="Main"
            />
            <img
              src={`${import.meta.env.VITE_API_URL}/${(item.p_image_2 || item.p_image_1).replace(/\\/g, "/")}`}
              alt="Hover"
              className="hover-img"
            />
            <StyledNavLink to={`/productLanding/${item._id}`}>
              <h3>
                {item.p_name.length > 30 ? item.p_name.slice(0, 30) + "..." : item.p_name}
              </h3>
            </StyledNavLink>
            <p>Rs. {item.price}</p>
            <button onClick={()=>addToCart(item)}>
              <i className="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </Cards>
        ))}
      </CardScroll>


    </Comb>
  );
};

export default CompleteProducts;
