import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div>
        <p>Pagina Home</p>
        <button onClick={() => this.props.changePage('professional')}>
          Ir para Profissional
        </button>
      </div>
    )
  }
}