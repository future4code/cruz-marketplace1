import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";

/*
  EXEMPLO DE USO 
		<CardUser title={'Pintar parede'} description={'Quero que pinte todos os comodos da minha casa'} onDelete={()=>alert('deletando...')} paymentMethods={['Cash', 'Cartão']}></CardUser>
*/

const DetailsButton = styled(IconButton)`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  align-self: flex-end;
  background-color: white;
  color: #a185db;
  :hover {
    color: white;
  }
  @media (max-width:375px){
    height:25px;
    width:25px;
   

`;

const DeleteButton = styled(Button)`
  color: #cf0000;
  border-color: #cf0000;
  margin: 5px;
`;

const MainContainer = styled.div`
  padding: 10px;
  background-color: #a185db;
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.2), 0 1px 3px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: relative;
  p {
    color: #ebebeb;
  }
  h5 {
    color: #ebebeb;
  }

 @media (max-width:375px){
   width:200px;
    height:80px;
    margin-top:20px;
  
`;

const Value = styled.span`
  color: #008d00;
  font-weight: bolder;
  font-size: 20px;
 
  
  
`;

const Box = styled.div`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.2), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 5px;
  width: 400px;

  @media (max-width:375px){
    width:250px;
  }
  
`;

const Title = styled.div`
  margin: -20px 0px 20px 0px;
  h3 {
    margin: 0px;
    font-size: 23px;
    color: white;
  }

  @media (max-width:375px){
    h3{
      font-size:1.0rem;
    }
  }

`;

const Details = styled.div`
  width: 100%;
`;

export default class CardUser extends React.Component {
  state = {
    showDetails: false,
    arrow: "up",
  };

  detailsHandle = () => {
    if (this.state.showDetails) {
      this.setState({ arrow: "up" });
    } else {
      this.setState({ arrow: "down" });
    }
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const arrow = () => {
      if (this.state.arrow === "down") {
        return <ArrowUpwardIcon />;
      } else {
        return <ArrowDownwardIcon />;
      }
    };

    return (
      <MainContainer>
        <DetailsButton onClick={this.detailsHandle} aria-label="details">
          {arrow()}
        </DetailsButton>
        <Title>
          <h3>{this.props.title ? this.props.title : "Titulo de exemplo"}</h3>
          <Value>R${this.props.value ? this.props.value : "200"}</Value>
        </Title>
        <Collapse in={this.state.showDetails}>
          <Details>
            <Box>
              <h4>Detalhes</h4>
              <p>
                {this.props.description
                  ? this.props.description
                  : "texto de exemplo"}
              </p>
            </Box>
            <Box>
              <h4>Prazo</h4>
              <p>{this.props.data ? this.props.data : "22/07/02"}</p>
            </Box>
            <Box>
              <h4>Métodos de pagamento</h4>
              <div>
                {this.props.paymentMethods ? (
                  this.props.paymentMethods.map((i) => {
                    return <h5>{i}</h5>;
                  })
                ) : (
                  <h5>preencha a props paymentMethods</h5>
                )}
              </div>
            </Box>
            <DeleteButton
              onClick={this.props.onDelete}
              variant="outlined"
              size="small"
            >
              Excluir
            </DeleteButton>
          </Details>
        </Collapse>
      </MainContainer>
    );
  }
}
