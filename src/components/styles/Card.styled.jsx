import styled from "styled-components";

const Main = styled.main`
  width: ${({ theme }) => theme.width};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  margin: 1rem auto;
  gap: 3rem;
  max-width: ${({ theme }) => theme["max-width"]};
  flex-direction: ${({ id }) => (id % 2 ? "row" : "row-reverse")};

  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
    flex-direction: column-reverse;
  }
`;
export const CardTitle = styled.h2`
  font-weight: bolder;
`;

export const CardImg = styled.img`
  width: 90%;
  object-fit: cover;
  /* min-width: 150px; */

  margin: 20px;
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    text-align: center;
  }
`;

export const Description = styled.p`
  max-width: 500px;
  min-width: 250px;
  font-size: 1.1rem;
`;

export default Main;
