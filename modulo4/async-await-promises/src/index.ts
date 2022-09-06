import express from 'express'
import knex from 'knex'
import dotenv from  'dotenv'
import cors from 'cors'
import { AddressInfo } from "net";
import axios from 'axios'


dotenv.config()

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEME,
  },
});

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


//EXERCÍCIO 001
//a) https://labenews.herokuapp.com/subscribers

//b) utilizando a tipagem Promise<any[]>

//c
// async function getAllSubscribers(): Promise<any[]> {
//   const response = await axios.get('https://labenews.herokuapp.com/subscribers')
//   return response.data
// }


//EXERCÍCIO 002
//a)Em uma função nomeada a informação de async é feita antes da declaraçao da função já na arrow ela é feita logo após a sua nomeação

//b)
const getAllSubs = async():Promise<any[]> => {
  const response = await axios.get('https://labenews.herokuapp.com/subscribers')
  return response.data
}

//EXERCÍCIO 003
type user = {
	id: string;
	name: string;
	email: string;
}


async function getAllSubscribers(): Promise<user[]> {
  const response = await axios.get('https://labenews.herokuapp.com/subscribers')
  return response.data
}

//a) Não ocorre nenhum erro de tipagem

//c) 
async function getSubscribers(): Promise<user[]> {
  const response = await axios.get(`https://labenews.herokuapp.com/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

//EXERCÍCIO 004
//b)
type news = {
  title: string,
  content: string,
  date: number
}

const body = {
  title: "Hamilton saiu do Frontend",
  content: "Para a alegria de muitos, e a tristeza de alguns, a turma Hamilton está, agora, no backend!",
  date: 1589818936000
}

async function addNews(body: news) : Promise<void> {
  await axios.put(`https://labenews.herokuapp.com/news`, body)
}

// const main = async () => {
//   try {
//     await addNews(body)
//     console.log ("Noticia adicionada com sucesso")
//   } catch (error: any) {
//     const resp = error.response?.data || error.message
//     console.log(resp)
//   }
// }
// main()

//EXERCICIO 005
const getSubsIds = (subs: user[]) => {
  return subs.map((sub: user) => {
    return sub.id
  })
}

const notifySubs = (ids: string[]) => {
  for (const id of ids){
    axios.post("https://labenews.herokuapp.com/notifications", {
      subscriberId: id,
      message: "Uma nova noticia foi postada"
    })
    console.log(`Notificação enviada ao usuário ${id}`)
  }
}

const sendNewsToAllSubs = () => {
    getAllSubs()
    .then (getSubsIds) 
    .then (notifySubs)
}


const main =  () => {
  try {
    sendNewsToAllSubs()
  } catch (error: any) {
    const resp = error.response?.data || error.message
    console.log(resp)
  }
}
main()


//EXERCÍCIO 006
const sendNotifications = async (users: user[], message: string): Promise<void> => {
	try {
	  const promises = users.map(user =>{
	    return axios.post("https://labenews.herokuapp.com/notifications", {
	      subscriberId: user.id,
	      message: message,
	    })
	  })
	  await Promise.all(promises);
	} catch {
		console.log("Error");
	}
};


