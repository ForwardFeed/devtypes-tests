import type {ReadonlyProperty} from "@devtypes/object"
// Examples from the documentation
type Obj = { a: string; b: number };
type Result = ReadonlyProperty< Obj, 'a' >;
// { readonly a: string; b: number }
