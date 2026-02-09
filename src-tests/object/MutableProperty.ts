import type {MutableProperty} from "@devtypes/object"

// Examples automatically extracted from the documentation.
type Obj = { readonly a: string; readonly b: number };
type Result = MutableProperty< Obj, 'a' >;
// { a: string; readonly b: number }

// Manually written content.
