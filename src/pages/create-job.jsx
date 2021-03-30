import React, { Component } from 'react'

export class CreateJob extends Component {
  render() {
    return (
      <div>
        <p>Pagina criar Job</p>
        <button onClick={() => this.props.changePage('home')}>
          voltar para home
        </button>
      </div>
    )
  }
}
