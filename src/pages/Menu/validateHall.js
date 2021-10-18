export default function validateInfo(values) {
  let errors = {}

  if (!values.client.trim()) {
    errors.client = 'Não esqueça do nome do cliente';
  } else if (values.client.length < 3) {
    errors.client = 'Necessário nome do cliente';
    alert("Não esqueça do nome do cliente");
  } else if (!values.client) {
    alert("Digite o nome do cliente");
  }

  if (!values.table) {
    errors.table = "Não esqueça de selecionar a Mesa que está atendendo"
    alert("Não esqueça de selecionar a Mesa que está atendendo");
  }


  return errors;
};

