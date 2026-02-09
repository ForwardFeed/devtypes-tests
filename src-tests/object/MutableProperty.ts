import type {MutableProperty} from "@devtypes/object"
// Examples from the documentation
type Obj = { readonly a: string; readonly b: number };
type Result = MutableProperty< Obj, 'a' >;
// { a: string; readonly b: number }
