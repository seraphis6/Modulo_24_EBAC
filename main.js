    // Classe abstrata
    class Animal {
        constructor(nome, som) {
        this.nome = nome;
        this.som = som;
        }
    
        faz() {
        console.log(`${this.nome} faz o som: ${this.som}`);
        }
    }
    
    // Classes herdeiras
    class Dog extends Animal {
        constructor(nome) {
        super(nome, "AU AU");
        }
    }
    
    class Cat extends Animal {
        constructor(nome) {
        super(nome, "MIAU");
        }
    }
    
    // Instâncias de objetos
    const dog = new Dog("NEGAO");
    const cat = new Cat("JAMES");
    const anotherDog = new Dog("MORFEU");
    
    dog.faz();
    cat.faz();
    anotherDog.faz();