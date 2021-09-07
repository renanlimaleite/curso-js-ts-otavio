function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}

const pessoa = {
  nome: 'Renan',
  sobrenome: 'Lima',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome)
  },
}

semRetorno('Renan', 'Lima')
pessoa.exibirNome()

export { pessoa }
