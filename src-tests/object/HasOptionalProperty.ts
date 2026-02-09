import type {HasOptionalProperty} from "@devtypes/object"
// Examples from the documentation
type Obj = { a: string; b?: number; c: number | undefined };
type IsOpt_b = HasOptionalProperty< Obj, 'b' >;  // true
type IsOpt_c = HasOptionalProperty< Obj, 'c' >;  // false
