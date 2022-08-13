type client = {
  cliente: string,
  saldoTotal: number,
  debitos: number[]
}

const clients: client[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function findNegativeBalance(clients: client[]) : client[] {

  const negativeBalanceClients = clients.filter((client) => {
      const debt = client.debitos
      let debtSum = 0;

      for(let i = 0; i < debt.length; i++){
        debtSum += debt[i]
      }

      if(client.saldoTotal < debtSum){
        client.saldoTotal = client.saldoTotal - debtSum
        client.debitos = []
        return client
      }
    })
  return negativeBalanceClients
}
console.log(findNegativeBalance(clients))