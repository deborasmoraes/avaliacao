import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm"
import { Produto } from "./produto"
import { Venda } from "./venda"

@Entity()
export class Carrinho {
    @PrimaryGeneratedColumn()
    idvenda: number

    @Column()
    idproduto: number

    @Column()
    quantidade: number

    @Column()
    preco: number

    @OneToOne(() => Venda)
    @OneToMany(() => Produto, (produto) => produto.carrinho)
    produto: Produto[]
}
