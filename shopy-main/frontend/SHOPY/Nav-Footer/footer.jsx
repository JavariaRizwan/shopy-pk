import styled from "styled-components";

import { Foot } from "./foot";

import { NavLink } from "react-router-dom";


const All = styled.div`
  font-family: "Montserrat", sans-serif;
  margin-top: 40px;
  padding-bottom: 30px;
  background-color: rgb(245, 243, 243);
  border-bottom: 1px solid rgb(190, 188, 188);
`;

const Wrap = styled.div`
  width: 90%;
  color: rgb(54, 52, 52);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    & > *:last-child { grid-column: 1 / -1; }
  }
`;

const Flex = styled.div`
  padding: 30px 0 10px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  p { font-size: 12px; margin: 0 0 10px; }
  h1 { font-size: 18px; margin: 8px 0 6px; font-weight: 500; }
  i { font-size: 30px; color: rgb(68, 66, 66); }
  i:hover {
    transition: 0.4s;
    color: rgb(247, 100, 42);
    transform: translateY(-10px);
  }

  @media (max-width: 600px) {
    padding-top: 15px;
    h1 { font-size: 15px; }
    i { font-size: 26px; }
  }
`;

const Mine = styled.div`
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1.3fr;
  gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-size: 25px;
    color: rgb(247, 100, 42);
    font-weight: 500;
  }
  h1, h2 {
    font-size: 20px;
    letter-spacing: 0.4px;
    color: rgb(72, 72, 71);
    margin: 0;
  }
  p { font-size: 14px; margin: 0; }
  a { text-decoration: none; color: rgb(72, 72, 71); }
  a:hover { color: rgb(247, 100, 42); transition: 0.3s; }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 20px;
    letter-spacing: 0.4px;
    color: rgb(72, 72, 71);
    margin: 0 0 5px;
  }
  input[type="text"] {
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    padding: 10px;
    outline: none;
    letter-spacing: 0.5px;
  }
  button {
    width: 100px;
    cursor: pointer;
    background-color: rgb(239, 28, 70);
    color: white;
    font-weight: 600;
    padding: 7px;
    border: 1px solid rgb(239, 28, 70);
    letter-spacing: 0.5px;
    border-radius: 5px;
  }
  button:hover {
    color: rgb(239, 28, 70);
    background-color: white;
    transition: 0.3s;
  }
  p {
    font-weight: 300;
    color: rgb(72, 72, 71);
    margin: 0;
  }
  .combine {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
`;



const StyledLink = styled(NavLink)`
  font-weight: 300;
  color: rgb(72, 72, 71);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;




const Footer = () => {
  return (
    <>
      <All>
        <Wrap>
          
          <Flex>
            <i className="fa-solid fa-truck-fast"></i>
            <h1>Free Shipping</h1>
            <p>For all Orders Over $100</p>
          </Flex>

          <Flex>
            <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
            <h1>30 Days Returns</h1>
            <p>For an Exchange Product</p>
          </Flex>

          <Flex>
            <i className="fa-solid fa-money-check-dollar"></i>
            <h1>Secured Payment</h1>
            <p>Payment Cards Accepted</p>
          </Flex>

          <Flex>
            <i className="fa-solid fa-gifts"></i>
            <h1>Special Gifts</h1>
            <p>Our First Product Order</p>
          </Flex>

          <Flex>
            <i className="fa-solid fa-headphones"></i>
            <h1>Support 24/7</h1>
            <p>Contact us Anytime</p>
          </Flex>
        </Wrap>
        
        <hr />
        <br />
        <br />

        <Mine>
          <Contact>
            <h1>Contact</h1>
            <p>Classyshop - Mega Super Store 507-Union Trade Centre France</p>

            <a href="mailto:example@example.com">Send Email for your queries</a>
            <span>(+92) 41-543-210</span>
            <h2>Get Help and Professional Chat</h2>
          </Contact>

          <Contacts>
            <h1>Products</h1>
            <StyledLink>Price Drops</StyledLink>
            <StyledLink>New Sales</StyledLink>
            <StyledLink>Best Product</StyledLink>
            <StyledLink>Best Sellers</StyledLink>
            <StyledLink to="/contact-us">Contact Us</StyledLink>
            <StyledLink>Stores</StyledLink>
          </Contacts>

          <Contacts>
            <h1>Our Company</h1>
            <StyledLink>Delivery</StyledLink>
            <StyledLink>Checkout</StyledLink>
            <StyledLink>Legal Notice</StyledLink>
            <StyledLink>About us</StyledLink>
            <StyledLink to="/Faqs">FAQ's</StyledLink>
            <StyledLink to="/TandC">Terms & Conditions</StyledLink>
          </Contacts>

          <Contacts>
            <h1>Subscribe to our newsLetter</h1>
            <p>
              Subscribe to our latest newsLetter to get news about latest offers
              and special prices;
            </p>
    <input type="text" placeholder="Your Email Address"/>
    <button>Subscribe</button>
<div className="combine">
<input type="checkbox" name="sub" id="sub" />
<p>I agree to the terms and conditions and the privacy policy</p>  
</div>

          </Contacts>
        </Mine>
      </All>
<br />
<Foot />

    </>
  );
};
export default Footer;
