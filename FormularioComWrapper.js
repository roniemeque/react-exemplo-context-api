import React from 'react';

import Formulario from './Formulario';

const FormularioWrapper = () => (
  <div>
    Componente separado que inclui o formulario dentro, demonstrado que o estado esta acessivel em qualquer lugar.
    <Formulario></Formulario>
  </div>
)

export default FormularioWrapper;