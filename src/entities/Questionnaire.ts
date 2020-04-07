import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reponse } from "./Reponse";
import { Option } from './Option';

@Index("Questionnaire_pkey", ["idQuest"], { unique: true })
@Entity("Questionnaire")
export class Questionnaire {
    @PrimaryGeneratedColumn({
        type: "integer",
        name: "id_quest"
    })
    idQuest: number;

    @Column("text", { name: "text_quest" })
    textQuest: string;

    @OneToMany(() => Reponse, (reponse) => reponse.idQuest)
    reponses: Reponse[];
    @OneToMany(() => Option, (option) => option.idOp)
    options: Option[];
}
