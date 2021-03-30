import React, { Component } from 'react'

export class NotFound extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Pagina Nao achei oq tu ta procurando</p>
        <button onClick={() => this.props.changePage('home')}>
          voltar para home
        </button>
      </div>
    )
  }
}

