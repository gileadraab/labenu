//EXERCICIO 001
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

  public introduceYourself(): string {
    return `Olá, sou ${this.name}, bom dia!`
 }

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
}

const newUser: User = new User("123456", "user@user.com", "New User", "132165487")
//console.log(newUser)

//a) Seria possível imprimir a senha (password) atrelada a essa instância?
//R: Não, pois não ha um getter para isso e é um parâmetro privado

//b)b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
//R: Uma


//EXERCICIO 002
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const newCustomer: Customer = new Customer("123456", "newcustomer@email.com", "New Customer", "123456", "12345678910")
console.log (newCustomer)
//a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
//R: Uma

//b)b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
//R: Duas, pois a primeira vez a nova variavel esta sendo inserida na classe User e na segunda na classe Customer

//EXERCICIO 003
//console.log(newCustomer.password)
//a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
//R: Não pois a instancia herda tambem as propriedades public ou private da classe pai

//EXERCICIO 004 e 005
console.log(newCustomer.introduceYourself())


export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}


const client: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}

console.log(client)
console.log(client.calculateBill())


export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}

//a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
//b) Cannot create an instance of an abstract class.

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }

  public getResidentsQuantity(): number {
    return this.residentsQuantity
  }

}
const residence: Residence = new Residence(4, "8346546000")
console.log("Residence:", residence)

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getfloorsQuantity(): number {
    return this.floorsQuantity
  }

}
const commerce: Commerce = new Commerce(2, "8346546000")
console.log("Commerce:",commerce)

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
		) {
	    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity
  }

}
const industry: Industry = new Industry(10, "8346546000")
console.log("Industry:",industry)

export class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
		) {
	    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75
  };
}

const residentialClient: ResidentialClient = new ResidentialClient("Residential Client", 1, 10000, "12345678910", 4, "835461000")
console.log(residentialClient)
console.log(residentialClient.calculateBill())