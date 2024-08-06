import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
    ForeignKey
} from 'sequelize-typescript';
import { RoleModel } from './roleModel';
import { EntityModel } from './entitiesModel';

@Table({
    tableName: "permissions",
    timestamps: true
})

export class PermissionModel extends Model<PermissionModel>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => RoleModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    roleId!: number;

    @ForeignKey(() => EntityModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    entityId!: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canCreate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canUpdate!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canDelete!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canGet!: boolean;
}