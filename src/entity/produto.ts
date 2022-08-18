import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Carrinho } from "./carrinho"



@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    idproduto: number

    @Column()
    descricao: string

    @Column()
    preco: number
    
    @Column()
    estoque: number

    @ManyToOne(() => Carrinho, (carrinho) => carrinho.produto)
    carrinho: Carrinho
}