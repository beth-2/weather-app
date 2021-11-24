import styled from "styled-components";

export const Input = styled.input`
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 3%;
  border-radius: 3%;
  width: 40%;
  font-size: 80%;
  opacity: 0.5;
  outline: none;
  position: absolute;
  left: 27%;
  caret-color: red;
  top: 2%;
`;

export const P = styled.p`
  position: absolute;
  font-size: 200%;
  right: 30%;
  top: 2%;
  color: black;
`;

export const DIV = styled.div`
  font-weight: lighter;
  position: absolute;
  left: 18%;
  top: 22%;
  color: black;
`;

export const WeatherP = styled.p`
  position: absolute;
  right: 35%;
  top: 80%;
  color: black;
  font-size: 1.5rem;
`;

export const TempP = styled.p`
  position: absolute;
  right: 35%;
  top: 45%;
  font-size: 400%;
  color: white;
  color: black;
`;

export const I = styled.i`
  font-size: 500%;
  position: absolute;
  right: 40%;
  top: 35%;
  color: black;
`;

export const CityI = styled.i`
  font-size: 500%;
  position: absolute;
  top: 35%;
  left: 35%;
`;

export const CityP = styled.p`
  position: absolute;
  top: 10%;
  left: 30%;
  font-size: 200%;
`;

export const TempPE = styled.p`
  position: absolute;
  left: 35%;
  top: 45%;
  font-size: 400%;
`;

export const WeatherPE = styled.p`
  position: absolute;
  left: 35%;
  top: 80%;
  font-size: 1.5rem;
`;

export const ContD = styled.div`
  position: absolute;
  background-color: #fab937;
  height: 80%;
  width: 40%;
  margin: 2%;
  border-radius: 5%;
  z-index: -1;
  left: 5%;
`;

export const DivC = styled.div`
  position: absolute;
  background-color: #3065ac;
  height: 80%;
  width: 40%;
  margin: 2%;
  border-radius: 5%;
  z-index: -1;
  right: 5%;
`;

export const EnterP = styled.p`
  position: absolute;
  top: 70%;
  left: 45%;
`;
