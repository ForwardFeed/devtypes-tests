import type {OptionalKeys} from "@devtypes/constraint"
// Examples from the documentation
type Obj = { a: number; b?: string; c: number | undefined; d: boolean };
type OptKeys = OptionalKeys< Obj >;  // 'b' | 'c'
