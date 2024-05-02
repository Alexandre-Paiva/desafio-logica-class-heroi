// Construção de uma classe:
class heroiDoJogo {
	constructor(name, age, type){
		this.name = name
		this.age = age
        this.type = type
	}

//Função de imprimir 
imprimir() {
	console.log(` Nosso herói ${this.name} tem ${this.age} anos e é um ${this.type}`);
	if(this.type === "mago"){
		console.log(`O ${this.type} arrancou {ataque} de XP usando magia`);
		}
	else if (this.type === "guerreiro"){
		console.log(`O ${this.type} arrancou {ataque} de XP usando sua espada`);
		}
	else if (this.type === "monge"){
		console.log(`O ${this.type} arrancou {ataque} de XP usando artes marciais`);
		}
		else if (this.type === "ninja"){
			console.log(`O ${this.type} arrancou {ataque} de XP usando sua shuriken`);
			}
	}
};

//Instaciar a class
let heroi01 = new heroiDoJogo("José", "28", "monge");


//Instaciar a função Imprimir 
heroi01.imprimir()