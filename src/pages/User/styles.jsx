import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  padding-left: 100px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > img {
    cursor: pointer;
  }

  & > :nth-child(3) {
    font-size: 1.5rem;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 3rem;
  color: #e0286799;
`;

export const SubHeader = styled.div`
  display: flex;

  & > h2 {
    font-size: 2.25rem;
    flex: 3;

    & > span {
      color: #e02867;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 50px;
`;

export const Filter = styled.div`
  padding: 20px 30px;
  border-radius: 12px;
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  height: 500px;
  border: 1px solid black;

  & > * {
    padding-top: 40px;
  }
`;

export const OrderFilter = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;

  & > * {
    flex: 1;
  }
`;

export const ValueBtns = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  font-weight: bold;

  & > p {
    padding: 5px 0;
    margin: 0;
  }

  & > div {
    display: flex;
  }

  & > div :not(:last-child) {
    margin-right: 10px;
  }
`;

export const MinMax = styled.div`
  display: flex;

  & > * {
    margin: 0 10px;
  }
`;

export const JobList = styled.div`
  grid-column: 3/7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding-bottom: 20px;
`;

export const SearchBar = styled.input`
  align-self: center;
  background-color: #c4c4c430;
  padding: 0 10px;
  border-radius: 30px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 2px gray;
  height: 65px;
  flex: 2;
  font-size: 1.5rem;
`;
