import type {Constructor} from "@devtypes/class"
// Examples from the documentation
type User = { id: number; name: string };
type UserCtor = Constructor< User >;
// new ( id: number, name: string ) => User
