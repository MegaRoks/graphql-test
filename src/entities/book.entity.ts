import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Author } from './author.entity';

@Entity('books')
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public readonly bookId: string;

    @Column({ type: 'varchar', nullable: false, length: 200 })
    public readonly name: string;

    @Column({ type: 'integer', nullable: false })
    public readonly pageCount: number;

    @Column({ type: 'varchar', nullable: false })
    public readonly authorId: string;

    @ManyToOne(() => Author, (author: Author) => author.books)
    @JoinColumn({ name: 'authorId' })
    public readonly author: Author;

    @CreateDateColumn()
    public readonly createdAt: Date;

    @CreateDateColumn()
    public readonly updatedAt: Date;
}
