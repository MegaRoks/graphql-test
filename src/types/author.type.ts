import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class CreateAuthorInput {
    @Field(() => String)
    public readonly name: string;
}

@InputType()
export class UpdateAuthorInput {
    @Field({ nullable: true })
    public readonly name?: string;
}
