import styled from "styled-components";

const BasicTitle = styled.h1`
  text-align: center;
  font-family: "Roboto Flex", sans-serif;
  font-size: 3.5rem;
  color:whitesmoke;
  text-shadow: 4px 4px 10px black;
  text-transform: capitalize;
  backdrop-filter: blur(3px);
  padding:3px 5px;

  @media screen and (min-width:800px) and (max-width:1150px) {
    font-size:2rem;
  }
  @media screen and (max-width: 800px){
    font-size: 1.6rem;
  }
`;


export default BasicTitle;