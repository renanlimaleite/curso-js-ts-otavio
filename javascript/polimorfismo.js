function Conta(agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    // Não tem saldo suficiente.
    console.log(`Não tem saldo suficiente, você possui: ${this.saldo}`)
    return;
  }

  this.saldo -= valor
  this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo()
}

Conta.prototype.verSaldo = function () {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(1580, 22, 10)
conta1.depositar(11)
conta1.sacar(10)
conta1.sacar(20)

function ContaCorrente(agencia, conta, saldo, limite) {
  // Herdando
  Conta.call(this, agencia, conta, saldo)
  this.limite = limite
}
// Sobrescrevendo
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente
ContaCorrente.prototype.sacar = function (valor) {
  if ((this.saldo + this.limite) < valor) {
    // Não tem saldo suficiente.
    console.log(`Não tem saldo suficiente, você possui: ${this.saldo}`)
    return;
  }

  this.saldo -= valor
  this.verSaldo()
}


const contaCorrente = new ContaCorrente(1, 1, 0, 100)
contaCorrente.depositar(10)
contaCorrente.sacar(110)


function ContaPopança(agencia, conta, saldo) {
  // Herdando
  Conta.call(this, agencia, conta, saldo)
}
// Sobrescrevendo
ContaPopança.prototype = Object.create(Conta.prototype)
ContaPopança.prototype.constructor = ContaPopança

console.log('--------')
const cp = new ContaPopança(12, 33, 0)
cp.depositar(11)
cp.sacar(10)
cp.sacar(1)