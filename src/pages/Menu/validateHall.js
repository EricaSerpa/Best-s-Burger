export default function validateInfo(values) {
    let errors = {}

    if (!values.customer.trim()) {
        errors.customer = 'Não esqueça do nome do cliente';
    } else if (values.customer.length < 3) {
        errors.customer = 'Necessário nome do cliente';
        alert("Não esqueça do nome do cliente");
    }

    if(!values.table) {
        errors.table = "Não esqueça de selecionar a Mesa que está atendendo"
        alert("Não esqueça de selecionar a Mesa que está atendendo");
    }

    /*if (!values.customer) {
        errors.customer = 'Preencha o nome do cliente corretamente'
    
      }
      if (!values.table || values.table >= 10 ) {
        errors.table = 'Escolha um numero de 1 à 10'
      } */
      

    return errors;
}


