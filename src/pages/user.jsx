import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div>
        <p>Pagina Usuario</p>
        <button onClick={() => this.props.changePage('home')}>
          voltar para home
        </button>
      </div>
    )
  }
}