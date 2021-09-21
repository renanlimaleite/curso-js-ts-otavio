export class Empresa {
    // public readonly nome: string // public é default.
    readonly nome: string

    // readonly é bem parecido com const, portanto da para atribuir um valor a esse array, caso quisessemos um object freeze, então fariamos 
    // private readonly colaboradores: readonly Colaborador[] = []
    private readonly colaboradores: Colaborador[] = []

    protected readonly CNPJ: string
    
    // Esse type Colaborador é uma Class
    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    }

    mostrarColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador)
        }
    }

    constructor(nome: string, CNPJ: string) {
        this.nome = nome
        this.CNPJ = CNPJ
    }
}

export class Colaborador {
    constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const colaborador1 = new Colaborador('Renan', 'Leite')
const colaborador2 = new Colaborador('Maria', 'de Souza')
const colaborador3 = new Colaborador('Fulano', 'de Tal')


const empresa1 = new Empresa('Empresa 1', '11.111.111/0001-11')
empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
empresa1.adicionaColaborador(colaborador3)

// empresa1.nome = 'ra' Cannot assign to 'nome' because it is a read-only property.

console.log(empresa1)
console.log(empresa1.mostrarColaboradores())