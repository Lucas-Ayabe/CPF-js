# CPF.js

Este repositório é dedicado a funções relacionadas a CPF como validação, mascaras e etc. Atualmente ele apenas possui uma funcão de validação

## USO

### validateCPF

Usar essa função é muito simples. Apenas importe o arquivo validateCPF.js deste repositório.

<code> 
    index.html

    <form>
        <input class="input is-cpf" />
    </form>

    <script src="./validateCPF.js"></script>
    <script src="./script.js"></script>
</code>

Agora para inicializar tudo apenas chame a função initCPFValidation, passando como paramêtros uma string com um seletor CSS de seus inputs de CPF e um objeto as seguintes funções:
- success: função a ser executada quando o CPF for válido; 

- error: função a ser executada quando o CPF for inválido;

- lengthError: função a ser executada quando o CPF for inválido e o erro for se o CPF passado tiver menos ou mais que 11 digitos;

<code>
script.js

    const cpfValidationOptions = {
        success() {
            console.log("CPF válido");
        },
        error() {
            console.error("CPF inválido");
        },
        lengthError() {
            console.error("CPF deve ter 11 digitos");
        }
    }

    initCPFValidation("input.is-cpf", cpfValidationOptions);
</code>
