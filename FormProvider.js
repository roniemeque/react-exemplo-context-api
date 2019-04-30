import React, {Component} from 'react';
import FormContext from './FormContext';

class FormProvider extends Component {
  //estado que sera global
  state = {
    nome: "Ronie",
    email: "roniemeque@icloud.com"
  }

  //tambem eh possivel usar funcoes de life-cycle com Context API para fazer operacoes quando ele monta, atualiza, desmonta e etc. Mais infos: https://reactjs.org/docs/context.html#classcontexttype

  //qualquer alteracao no state precisa estar junto dele e ser enviado junto dos dados pelo provider
  onChange = ({currentTarget : {value, name}}) => {
    const state = this.state;
    state[name] = value;
    this.setState({
      ...state
    });
  }
  
  render() {
    //this.props.chidren eh o que eh englobado pelo Provider e vai ser renderizado
    return(
      <FormContext.Provider value={{
        state: this.state,
        onChange: this.onChange
      }}>
        {this.props.children}
      </FormContext.Provider>
    )
  }
}

export default FormProvider;