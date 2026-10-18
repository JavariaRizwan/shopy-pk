import styled from "styled-components"

import visa from "../visa.png";
import ce from "../ce.png";
import mc from "../mc.png";
import ae from "../ae.png";
import pp from "../pp.png";


const Last = styled.div`
  width: 95%;
  margin: auto;
  font-family: "Montserrat", sans-serif;
  padding: 10px 0 20px;

  .on {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 14px;
  }
  .icons {
    display: flex;
    gap: 12px;
  }
  .icons i { font-size: 20px; }
  .close {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
  .text {
    letter-spacing: 0.5px;
    margin: 0;
  }
  .images {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .images img {
    height: 24px;
    width: auto;
    object-fit: contain;
  }

  .fb:hover  { color: blue; transition: 0.3s; }
  .ins:hover { color: rgb(214, 65, 65); transition: 0.3s; }
  .pin:hover { color: red; transition: 0.3s; }
  .x:hover   { color: skyblue; transition: 0.3s; }

  @media (max-width: 800px) {
    .on {
      flex-direction: column;
      text-align: center;
    }
    .text { order: 3; font-size: 12px; }
  }
`;

export const Foot=()=>{

return <>


<Last>

  <div className="on">

<div className="icons">
<div className="close"><i className="fa-brands fb fa-facebook-f"></i></div>
<div className="close"><i className="fa-brands ins fa-instagram"></i></div>
<div className="close"><i className="fa-brands x fa-x-twitter"></i></div>
<div className="close"><i className="fa-brands pin fa-pinterest-p"></i></div>
</div>

<p className="text">© 2024 - SHOPY by RJ Developers</p>

<div className="images">
    <img src={pp} alt="paypal" />
    <img src={ce} alt="bank transfer" />
    <img src={mc} alt="bank account" />
    <img src={ae} alt="air bank transfer" />
    <img src={visa} alt="visa" />
    
</div>
  </div>
</Last>



</>

}
