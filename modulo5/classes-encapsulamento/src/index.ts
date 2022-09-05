class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
    cpf: string,
    name: string,
    age: number,
  ) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  };

  public getCpf(): string {
    return this.cpf;
  };

  public getAge(): number {
    return this.age;
  };

  public getBalance(): number {
    return this.balance;
  };

  public getTransactions(): Transaction[] {
    return this.transactions;
  };

  public setName(name: string): string {
    return this.name;
  };

  public setCpf(cpf: string): string {
    return this.name;
  };

  public setAge(age: number): number {
    return this.age;
  };

  public setBalance(balance: number): number {
    return this.balance;
  };
  
  public setTransactions(transactions: Transaction[]): Transaction[] {
    return this.transactions;
  };
}


const user: UserAccount = new UserAccount("12345678910", "Gilead", 30)
console.log(user)

console.log(user.getAge())


class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(
    description: string,
    value: number,
    date: string
  ) {
    this.description = description
    this.value = value
    this.date = date
  }
}

class Bank {
  private accounts: UserAccount[];

  constructor(
    accounts: UserAccount[]
  ) {
    this.accounts = accounts
  }
}