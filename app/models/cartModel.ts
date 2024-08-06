import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
    ForeignKey,
    HasOne,
    BelongsTo
} from 'sequelize-typescript';
import { UserModel } from './userModel';
import { ProductCart } from './productCartModel';

@Table({
    tableName: "carts",
    timestamps: true
})

export class CartModel extends Model<CartModel>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.DECIMAL
    })
    total!: number;

    @HasMany(() => ProductCart)
    products!: ProductCart[];

    @HasOne(() => UserModel)
    users!: UserModel

}

