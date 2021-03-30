import React, { Component } from 'react'

export class Professional extends Component {
  render() {
    return (
      <div>
        <p>Pagina Professional</p>
        <button onClick={() => this.props.changePage('home')}>
          voltar para home
        </button>
      </div>
    )
  }
}