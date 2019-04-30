import React from 'react';
import FormContext from './FormContext';

const Formulario = () => (
  //sempre que um cmponente for acessar o Context ele precisa estar em volta do consumer
  <FormContext.Consumer>
    {(context) => (
      <form>
        <input name="nome" placeholder="Nome" value={context.state.nome} onChange={context.onChange} />
        <input name="email" placeholder="Email" value={context.state.email} onChange={context.onChange} />
      </form>
    )}
  </FormContext.Consumer>
);

export default Formulario;