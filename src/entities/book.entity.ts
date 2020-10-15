import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { Max, Min } from 'class-validator';

import { Author } from './author.entity';

@Entity('books')
@ObjectType()
export class Book extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    public readonly bookId: string;

    @Field(() => String)
    @Min(3)
    @Max(200)
    @Column({ type: 'varchar', nullable: false, length: 200 })
    public readonly name: string;

    @Field(() => Int)
    @Column({ type: 'integer', nullable: false })
    public readonly pageCount: number;

    @Field(() => Author)
    @ManyToOne(() => Author, (author: Author) => author.books)
    @JoinColumn({ name: 'authorId' })
    public readonly author: Author;
    @RelationId((book: Book) => book.author)
    public readonly authorId: string;

    @Field(() => Date)
    @CreateDateColumn()
    public readonly createdAt: Date;

    @Field(() => Date)
    @CreateDateColumn()
    public readonly updatedAt: Date;
}
