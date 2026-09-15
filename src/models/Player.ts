//a palavra class define que estamos criando um molde.
//A palavra export permite que esse arquivo seja usado por outros arquivos.(como o app.ts).
export class Player {
    public name: string;// nome do jogador
    public health: number;//saude do jogador
    public level: number;//nivel do jogo

    //o construtor e um metodo especial que executado automatica/e apenas uma vez
    constructor(name: string, health: number = 100, level: number = 1) {
        this.name = name;
        this.health = health;//this faz referencia a propria classe pega o atributo name e
        this.level = level;//atribua o valor name a ele
    }

    //metodos sao funcoes que a classe pode executar(comporta/o)verbos(o que o objeto pode fazer)
    //o metodo attack e um metodo que retorna uma string
    public attack(): string {
        const damage = this.level * 10;//calcula o dano baseado no nivel do jogador
        return `${this.name} atacou e causou ${damage} de dano`;
    }

    //o metodo takeDemage e um metod que recebe um numero como paramentroe nao retorn nada
    public takeDamage (amount: number): string {
        this.health -= amount; //reduz a saude do jogador pelo paramentro
        if (this.health < 0) {
            this.health = 0;//garante que a saude nao fique negativa
            return `${this.name} foi derrotado`;

        } 
        return `${this.name} recebeu ${amount}de dano e agora tem ${this.health} de saude`;
    } 


}