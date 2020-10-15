import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Max, Min } from 'class-validator';

import { Book } from './book.entity';

@Entity('authors')
@ObjectType()
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly authorId: string;

    @Field(() => String)
    @Min(3)
    @Max(200)
    @Column({ type: 'varchar', nullable: false, length: 200 })
    public readonly name: string;

    @OneToMany(() => Book, (book: Book) => book.author)
    public readonly books: Book[];

    @Field(() => Date)
    @CreateDateColumn()
    public readonly createdAt: Date;

    @Field(() => Date)
    @CreateDateColumn()
    public readonly updatedAt: Date;
}
