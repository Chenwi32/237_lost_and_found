import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class IdCard {

    @PrimaryGeneratedColumn()
    idNum!: number

    @Column()
    contact!: string

    @Column()
    location!: string

}
