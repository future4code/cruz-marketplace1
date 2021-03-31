import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import IconButton from "@material-ui/core/IconButton";

const DetailsButton = styled(IconButton)`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  align-self: flex-end;
`;

const MainContainer = styled.div`
  padding: 10px;
  background-color: #f3f3f3;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: relative;
`;

const Value = styled.span`
  color: green;
  font-weight: bolder;
`;

const Title = styled.div`
  margin: -20px 0px 20px 0px;
  h3 {
    margin: 0px;
  }
`;

const Details = styled.div`
  width: 100%;
`;

/*

*/

export default class CardProf extends React.Component {
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

    const details = () => {
      if (this.state.showDetails) {
        return (
          <Details>
            <h4>Detalhes</h4>
            <p>
              {this.props.description
                ? this.props.description
                : "texto de exemplo"}
            </p>
            <h4>Data</h4>
            <p>{this.props.data ? this.props.data : "22/07/02"}</p>
            <h4>Métodos de pagamento</h4>
            <div>
            {this.props.paymentMethods
                ? this.props.paymentMethods.map((i) => {
                  return <h5>{i}</h5>;
                })
                : <h5>preencha a props paymentMethods</h5>}
            </div>

            <Button
              onClick={this.props.onTake}
              className="teste"
              variant="contained"
              color="primary"
            >
              {this.props.taken ? "Descandidatar" : "Me candidatar"}
            </Button>
          </Details>
        );
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
        {details()}
      </MainContainer>
    );
  }
}
