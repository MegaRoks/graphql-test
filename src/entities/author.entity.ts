import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Book } from './book.entity';

@Entity('authors')
export class Author {
    @PrimaryGeneratedColumn('uuid')
    public readonly authorId: string;

    @Column({ type: 'varchar', nullable: false, length: 200 })
    public readonly name: string;

    @OneToMany(() => Book, (book: Book) => book.author)
    public readonly books: Book[];

    @CreateDateColumn()
    public readonly createdAt: Date;

    @CreateDateColumn()
    public readonly updatedAt: Date;
}
