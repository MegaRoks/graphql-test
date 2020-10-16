import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CreateBookInput {
    @Field(() => String)
    public readonly name: string;

    @Field(() => String)
    public readonly authorId: string;

    @Field(() => Int)
    public readonly pageCount: number;
}

@InputType()
export class UpdateBookInput {
    @Field({ nullable: true })
    public readonly name?: string;

    @Field({ nullable: true })
    public readonly pageCount?: number;
}
