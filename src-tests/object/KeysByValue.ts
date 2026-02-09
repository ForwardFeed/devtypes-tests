import type {KeysByValue} from "@devtypes/object"
// Examples from the documentation
type Obj = { a: number; b: string; c: number; d: boolean };
type NumKeys = KeysByValue< Obj, number >;  // 'a' | 'c'
