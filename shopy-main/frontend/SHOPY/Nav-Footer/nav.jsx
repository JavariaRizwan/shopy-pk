
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../l.jpg";
import axios from "axios"
import {useCartQuantity} from "../allFunctionsJS/cartFunctions";

const Wrapper = styled.div`
  color: rgb(41, 40, 40);
  font-family: "Montserrat", sans-serif;
  `;

// const Promo = styled.div`
//   display: flex;
//   width: 95%;
//   font-size: 14px;
//   height: 40px;
//   font-weight: 500;
//   line-height: 20px;
//   margin: auto;
//   justify-content: space-between;
// `;

const Promo = styled.div`
  display: flex;
  width: 95%;
  font-size: 14px;
  min-height: 40px;
  font-weight: 500;
  line-height: 20px;
  margin: auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 12px;
    p { display: none; }
  }
`;


const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 25px;
  padding: 0;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 8px 0;
  }
`;


const StyledNavLink = styled(NavLink)`
color:rgb(69, 69, 68);
text-decoration:none;
  &:hover {
    color: rgb(247, 100, 42);
    transition: 0.4s;
  }
    sup{
    position:relative;
    top:0;
    right:0;
    color:red;
    margin-left:3px;
    font-size:10px;
    }
`;

const Two = styled.div`
  width: 95%;
  margin: auto;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 1100px) {
    padding: 8px 0;
  }
`;

const Image = styled.img`
  height: 50px;
  width: 250px;
  object-fit: contain;

  @media (max-width: 1100px) { width: 180px; height: 45px; }
  @media (max-width: 600px)  { width: 130px; height: 38px; }
`;

const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  max-width: 100%;
  height: 42px;
  border: 1px solid gray;
  border-radius: 7px;

  &:focus-within {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 1100px) {
    order: 3;
    width: 100%;
  }
`;


const In = styled.input`
  flex: 1;
  min-width: 0;
  height: 40px;
  font-size: 17px;
  color: gray;
  margin-left: 15px;
  padding: 0px 10px;
  outline: none;
  border: none;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-left: 5px;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  text-align: center;

  p { margin: 0; }
  .bold { font-weight: 600; }
  i { font-size: 18px; }

  @media (max-width: 600px) {
    gap: 10px;
    font-size: 13px;
    .bold {
      max-width: 70px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const I = styled.i`
  cursor: pointer;
`;

const Search = styled.div`
  width: 40px;
  cursor: pointer;
  font-size: 18px;

  i {
    font-size: 18px;
  }
`;

const HR = styled.hr`
  margin-top: 10px;
`;


const Nav = () => {
const navigate=useNavigate();

  const [searchInput, setSearchInput]=useState("");

const handleSearch=()=>{
  if (searchInput.trim() !==""){
    navigate(`/search-tags/${searchInput.trim()}`);
  }
}

const handleKeySearch=(e)=>{
  if(e.key==="Enter"){
    handleSearch();
  }
}

  const [cartQty, setCartQty]=useState(0);

  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });
  const isLoggedIn = user && user._id && user.isVerified;

// 1. This runs only once on mount, for listening to storage changes
useEffect(() => {
  const handleStorageChange = () => {
    const updatedUser = localStorage.getItem("user");
    setUser(updatedUser ? JSON.parse(updatedUser) : null);
  };

  window.addEventListener("storage", handleStorageChange);

  return () => window.removeEventListener("storage", handleStorageChange);
}, []);


const fetchCartQuantity = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/cartItems/${user._id}`);
    const totalQty = res.data.reduce((acc, item) => acc + item.quantity, 0);
    setCartQty(totalQty);
  } catch (err) {
    console.error("Error fetching cart quantity:", err);
  }
};

useEffect(() => {
  if (user) fetchCartQuantity();
}, [user]); // runs on login

  return (
    <>
      <Wrapper>
        <Promo className="top">
          <p>🎉 Get up to 50% off new season styles — limited time only!</p>
          <List>
        
            <li>
              <StyledNavLink to="/help-center">Help Center</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/track-order">Track Order</StyledNavLink>
            </li>
          </List>
        </Promo>
        <hr />

        <Two className="two">
          <span>
            <NavLink to="/"><Image src={logo} alt="logo" /></NavLink>
          </span>

          <Input className="input">
            <In type="text" className="search"
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            onKeyDown={handleKeySearch}
            placeholder="Search for Products..." />
            <Search className="ico">
              <I className="fa-solid fa-magnifying-glass" onClick={handleSearch}></I>
            </Search>
          </Input>

          <Icons>
            {  isLoggedIn ?
              (<NavLink to={`/user_profile/${user._id}`} className="bold">{user.fullName}</NavLink>)
              :
              (<StyledNavLink to="/login">Login</StyledNavLink>)              
}
            <p>|</p>

            { user &&
              user.isVerified ?
           (<StyledNavLink to="/logout">Logout</StyledNavLink>)
              :
            (<StyledNavLink to="/register">Register</StyledNavLink>)
            
}
            <I className="fa-solid fa-heart"></I>
            <StyledNavLink to="/cart">
            <I className="fa-solid fa-cart-shopping"><sup>{isLoggedIn && cartQty > 0 ? cartQty : null}
</sup></I>
 </StyledNavLink>
          </Icons>
        </Two>
        <HR />
      </Wrapper>
      
     


     
    </>
  );
};

export default Nav;
