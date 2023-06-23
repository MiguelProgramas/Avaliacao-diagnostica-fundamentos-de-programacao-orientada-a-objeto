class jogo{
    constructor(name){
        this.name = name;
    }
    apresentar(){
        console.log("Meu nome é" + this.name)
    }
}

class jogoDeCarro extends jogo{
    constructor(name, modelo, ano) {
        super(name);
        this.modelo = modelo;
        this.ano = ano;
    }
    apresentar(){
        super.apresentar();
    }
}

class jogoDeTiro extends jogoDeCarro {
    constructor(name, modelo, ano, personagem){
        super(name, modelo, ano)
        this.personagem = personagem;
    }
    apresentar(){
        super.apresentar();
        console.log("Essa é a " + this.modelo + " versão, do ano " + this.ano + ", com o personagem " + this.personagem)
    }
}

let j = new jogoDeTiro("jogo", "segunda", 1998, "John Wick.")
j.apresentar()
