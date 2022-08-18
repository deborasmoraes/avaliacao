import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm"
import  {Venda}  from "./venda"

@Entity()
export default class Cliente {
    @PrimaryGeneratedColumn()
    idcliente: number

    @Column()
    nome: string

    @Column()
    fone: number
    @Column()
    email: string

    @OneToMany(() => Venda, (venda) => venda.cliente)
    @JoinColumn()
    venda: Venda []
}
