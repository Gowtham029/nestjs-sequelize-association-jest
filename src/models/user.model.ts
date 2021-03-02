import {
    AutoIncrement,
    BelongsTo,
    Column,
    CreatedAt,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from "sequelize-typescript";
import { Organizations } from "./organizations.model";

@Table({ tableName: "users", freezeTableName: false, timestamps: false })
export class Users extends Model<Users> {
    @PrimaryKey
    @AutoIncrement
    @Column
    userId: number;
    
    @Column
    name: string;

    @Column
    email: string;

    @Column
    address: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}
