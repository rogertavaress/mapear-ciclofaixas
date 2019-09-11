// // Operações com array

// const arr = [1,2,3,4,5,6,7];

// const newArr = arr.map((item, index) => item * index);

// console.log(arr);
// console.log(newArr);

// const sum = arr.reduce((total, next) => total + next);

// console.log(sum);

// const filter = arr.filter(item => item % 2 === 0);

// console.log(filter);

// const find = arr.find(item => item === 4);

// console.log(find);

// //Valores Padrões

// const soma = (a=0,b=0) => a+b;

// console.log(soma(1,2));
// console.log(soma(1));
// console.log(soma());

// // Desestruturação

// const usuario = {
//     nome: "Rogério Tavares",
//     cpf: "101.654.644-02",
//     idade: 23,
//     endereco: {
//         rua: "Arapoti",
//         numero: 37,
//         bairro: "Engenho do Meio"
//     }
// }

// //const {nome, cpf, endereco:{rua}} = usuario;

// console.log(nome);
// console.log(cpf);
// console.log(rua);

// function mostrarEndereco({endereco:{rua,numero,bairro}}){
//     return rua + ", " + numero + " - " + bairro;
// }

// console.log(mostrarEndereco(usuario));

// // REST & SPREAD

// const {nome, ...resto} = usuario;

// console.log(nome);
// console.log(resto);

// //TEMPLATE LITERALS

// const nomeLit = "Rogério";
// const empresaLit = "Avanade";
// const idadeLit = 23;

// console.log(`Meu nome é ${nomeLit}, tenho ${idadeLit} e trabalho na ${empresaLit}.`);

// Object Short Syntax
// const nome = 'Rogério';
// const idade = 23;

// const user = {
//     nome,
//     empresa: 'Teste',
//     idade
// }

// console.log(user);

// WEBPACK

// import { soma,sub } from './funcoes'

// console.log(soma(1,2));
// console.log(sub(5,5));

// ASYNC/AWAIT
// var valor = 'Olá Mundo!';

// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(valor)}, 2000);
// });

// // minhaPromise()
// //     .then(response => {
// //         console.log(response);
// //     })
// //     .catch(err => {});

// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();

// import axios from 'axios';

// class Api {
//     static async getUserInfo(username){
//         try{
//             const response = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(response);
//         } catch(err) {
//             console.warn('Erro na API');
//         }
//     }
// }

// Api.getUserInfo('rogertavaress');

//EXERCICIO 01 - MOD3

// Função delay aciona o .then após 1s
// const delay = (valor) => new Promise(resolve => {
//         setTimeout(() => {
//             resolve(valor);
//         }, 1000)});

// async function umPorSegundo() {
//     console.log(await delay('1s'));
//     console.log(await delay('2s'));
//     console.log(await delay('3s'));
// }
// umPorSegundo();

//EXERCICIO 02 - MOD3

import axios from 'axios';

// class Api {
//     static async getUserFromGithub(user){
//         try {
//             const response = await axios.get(`https://api.github.com/users/${user}`);
//             console.log(response);
//         } catch (error) {
//             console.warn('Usuário não existe');
//         }
//     }
// }

// Api.getUserFromGithub('diego3g');
// Api.getUserFromGithub('diego3g124123');
// Api.getUserFromGithub('rogertavaress');

//EXERCICIO 03 - MOD3

// class Github {
//     static async getRepositories(repo) {
//         try {
//             const response = await axios.get(`https://api.github.com/repos/${repo}`);
//             console.log(response);
//         } catch (error) {
//             console.warn('Repositório não existe');
//         }
//     }
//    }
//    Github.getRepositories('rogertavaress/todo-web');
//    Github.getRepositories('rogertavaress/site-pessoal');

var welcome = document.getElementById('welcome');
var user = document.getElementById('user');
var login = document.getElementById('login');

class Api {
    static async buscaUsuario(usuario) {
        try {
            const response = await axios.get(`https://api.github.com/users/${usuario}`);
            welcome.innerHTML = "Olá, "+response.data.name+"!";
            user.innerHTML = "User: "+response.data.login+"<br><hr>";
            console.log('Usuário carregado!');
        } catch (error) {
            console.warn('Usuário não existe');
            welcome.innerHTML = "Usuário não existe!";
            user.innerHTML = "";
        }
    }
}

login.onchange = () => {
    Api.buscaUsuario(login.value);
}



