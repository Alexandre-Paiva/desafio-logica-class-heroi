// Construção de uma classe:
class heroiDoJogo{
	constructor(name, age, type){
		this.name = name
		this.age = age
        this.type = type
	}

//Função de imprimir 
imprimir() {
	console.log(` Nosso herói ${this.name} tem ${this.age} anos e é um ${this.type}`);
	}
}


//Instaciar a class
let heroi01 = new heroiDoJogo("José", "28", "Guerreiro");


//Instaciar a função Imprimir 
heroi01.imprimir()