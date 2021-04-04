import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width:375px) {
    height:100%¨;
    } 
`;

export const MainContent = styled.main`
  padding-left: 50px;
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  & > img {
    cursor: pointer;
    width: 170px;
  }

  & > :nth-child(3) {
    font-size: 1rem;
  }

  @media (max-width:375px) {
    & > img{

      width:110px;
      margin-top:15px;

     button{
       background-color:red;
       
      }

    }
     
    } 
`;

export const SectionTitle = styled.h1`
  font-size: 2.75rem;
  color: #e0286799;
  @media (max-width:375px) {
      font-size:1.8rem;
      margin-left:10px;

    }


`;

export const SubHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;

  & > h2 {
    font-size: 2.25rem;
    flex: 2 300px;

    & > span {
      color: #e02867;
    }
  }

  @media (max-width:375px) {
    align-items:center;
    justify-content:center;
    
   
    h2{
      font-size:1.5em
      
    }
        
    }

  
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
  @media (max-width:375px){
    font-size:0.9rem;
    height:30px;
    border-radius:5px;
    margin-right:15px;
  
    
  }

`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 50px;

  @media (max-width:375px){
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top: 10px;
    height:400px;
    width:250px;

  
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


  @media (max-width:375px){
    height:280px;
    width:250px;
    padding-top:2px;
    padding-bottom:5px;
    border:none;
    margin-left:25px;
    
    
    
   
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
  @media (max-width:375px){
    font-size:0.8rem;
    @media (max-width:375px){
      font-size: 1.2rem;
      height:50px;
      
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

  & > div :not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width:375px){
    
  
      font-size:0.8rem;
      p{
        font-size:0.8rem;
      }
      button{
        font-size:0.6rem;
        
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
  @media (max-width:375px){
   margin-left:20px;
   
  
  }
`;

