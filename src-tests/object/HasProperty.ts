import type {HasProperty} from "@devtypes/object"
// Examples automatically extracted from the documentation.
type Obj = { a: string; b?: number };
type Has_a = HasProperty< Obj, 'a' >;  // true
type Has_c = HasProperty< Obj, 'c' >;  // false
// Manually written content.
