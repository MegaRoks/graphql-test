import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';

import { Author } from './author.entity';

@Entity('books')
@ObjectType()
export class Book extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    public readonly bookId: string;

    @Field(() => String)
    @Column({ type: 'varchar', nullable: false, length: 200 })
    public readonly name: string;

    @Field(() => Int)
    @Column({ type: 'integer', nullable: false })
    public readonly pageCount: number;

    @Field(() => Int)
    @Column({ type: 'varchar', nullable: false })
    public readonly authorId: string;

    @ManyToOne(() => Author, (author: Author) => author.books)
    @JoinColumn({ name: 'authorId' })
    public readonly author: Author;

    @Field(() => Date)
    @CreateDateColumn()
    public readonly createdAt: Date;

    @Field(() => Date)
    @CreateDateColumn()
    public readonly updatedAt: Date;
}
