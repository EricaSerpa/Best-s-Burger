export function validateRegister(values) {
    let errors = {}

    if (!values.name.trim()) {
        errors.name = 'Nome completo obrigatório';
    } else if (values.name.length < 10) {
        errors.name = 'Necessário nome completo';
    }

    if (!values.email) {
        errors.email = 'Email obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Endereço de email invalido';
    }
    if (!values.password) {
        errors.password = 'Senha obrigatória';
    } else if (values.password.length < 6) {
        errors.password = 'Senha precisa ter 6 ou mais caracteres';
    }

    if (!values.password2) {
        errors.password2 = 'Senha obrigatória';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'As senhas não coincidem';
    }

    if (values.role !== "salão" && values.role !== "cozinha") {
        errors.role = "Selecione sua área de trabalho"
    }

    return errors;
}