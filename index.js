import React, { Component } from 'react';
import { render } from 'react-dom';

/*
para funcionar a Context API precisa de 3 coisas:

O Context - Guarda o Provider, o Consumer e cuida para que um consiga achar o outro em qualquer lugar da aplicacao desde que o Consumer esteja dentro do Provider

Provider - segura o estado, as funcoes que o alteram e disponbiliza para todos os seus filhos, independente da profundidade, a possibilidade de chama-lo.

Consumer - puxa o estado e os demais valores fornecidos pelo Provider que pode estar em qualquer nivel acima

Nesse exemplo o Provider esta separado mas eh importado e engloba tudo dentro da aplicacao. O Consumer esta declarado dentro do componente do Formulario, mas pode ser declarado em qualquer outros lugar, sem limitacao.
*/

import FormContext from './FormContext';
import Formulario from './Formulario';
import FormProvider from './FormProvider';

//o formulario mas separado e dentro de outro componente, para demo
import FormularioComWrapper from './FormularioComWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <FormProvider>
        <div>
          Form 1
          <Formulario></Formulario>
        </div>
        <div>
          Form 2
          <Formulario></Formulario>
        </div>
        <div>
          <FormularioComWrapper></FormularioComWrapper>
        </div>
      </FormProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
