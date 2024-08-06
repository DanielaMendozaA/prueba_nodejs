import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey
} from 'sequelize-typescript';
import { UserModel } from './userModel';
import { ProductCart } from './productCartModel';

@Table({
    tableName: "orders",
    timestamps: true
})

export class OrderModel extends Model<OrderModel>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @ForeignKey(() => ProductCart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    productCartId!: number;

}