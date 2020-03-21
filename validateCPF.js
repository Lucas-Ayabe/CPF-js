function initCPFValidation(target, options) {
    const cpfInputs = document.querySelectorAll(target);

    cpfInputs.forEach(input => {
        input.addEventListener("input", e => {
            validateCPF(ArrayFromCPF(e.target.value), options);
        });
    });

    function ArrayFromCPF(cpf) {
        return cpf.split(".").join("").split("-").join("").split("");
    }

    function firstCPFDigitValidation(cpf) {
        return (((cpf[0] * 10) + (cpf[1] * 9) + (cpf[2] * 8) + (cpf[3] * 7) + (cpf[4] * 6) + (cpf[5] * 5) + (cpf[6] * 4) + (cpf[7] * 3) + (cpf[8] * 2)) * 10 % 11) === +cpf[9];
    }

    function secondCPFDigitValidation(cpf) {
        return (((cpf[0] * 11) + (cpf[1] * 10) + (cpf[2] * 9) + (cpf[3] * 8) + (cpf[4] * 7) + (cpf[5] * 6) + (cpf[6] * 5) + (cpf[7] * 4) + (cpf[8] * 3) + (cpf[9] * 2)) * 10 % 11) === +cpf[10];
    }

    function noCPFRepeatedDigitsValidation(cpf) {
        return !(cpf.every(digit => digit === cpf[0]));
    }

    function validateCPF(cpf, options) {
        if (cpf.length === 11) {
            if (noCPFRepeatedDigitsValidation(cpf)) {
                if (firstCPFDigitValidation(cpf) && secondCPFDigitValidation(cpf)) {
                    options.success();
                } else {
                    options.error();
                }
            } else {
                options.error();
            }
        } else {
            options.lengthError();
        }
    }
}