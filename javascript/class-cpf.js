class ValidaCPF {
  constructor(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, '')
    })
  }

  isSequencia() {
    // Para ver se é uma sequência, por exemplo 99999999999
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos) // return digito <= 9 ? String(digito) : '0'
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)  // return digito <= 9 ? String(digito) : '0'
    this.novoCPF = cpfSemDigitos + digito1 + digito2
  }

  static geraDigito(cpfSemDigito) {
    let total = 0
    let reverso = cpfSemDigito.length + 1 // primeira vez é 10 e a segunda é 11

    for (let stringNumerica of cpfSemDigito) {
      total += reverso * Number(stringNumerica)
      reverso--
    }

    const digito = 11 - (total % 11)
    return digito <= 9 ? String(digito) : '0'
  }

  valida() {
    if (!this.cpfLimpo) return false
    if (typeof this.cpfLimpo !== 'string') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia()) return false
    this.geraNovoCpf()


    return this.novoCPF === this.cpfLimpo
  }
}

const validacpf = new ValidaCPF('024.153.932-31')
console.log(validacpf.valida()) // true ou false