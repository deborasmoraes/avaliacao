import { DataSource } from "typeorm"
import Cliente from "./entity/cliente"
import {Venda} from "./entity/venda" 
import {Produto} from "./entity/produto"
import {Carrinho} from "./entity/carrinho"


const dataSource = new DataSource({
    type: "postgres",
    host:"localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [Cliente, Venda, Produto, Carrinho],
    logging: false,
    synchronize: true
    
})

export default dataSource