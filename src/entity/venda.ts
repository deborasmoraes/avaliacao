import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Carrinho } from "./carrinho"
import Cliente from "./cliente"


@Entity()
export class Venda {
    @PrimaryGeneratedColumn()
    idvenda: number

    @Column()
    idcliente: number

    @Column()
    data: number

    @Column()
    status: number

    @OneToOne(() => Cliente)
    cliente: Cliente

    @OneToOne(() => Carrinho)
    carrinho: Carrinho
}