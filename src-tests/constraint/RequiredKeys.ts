import type {RequiredKeys} from "@devtypes/constraint"
// Examples from the documentation
type Obj = { a: number; b?: string; c: number | undefined; d: boolean };
type ReqKeys = RequiredKeys< Obj >;  // 'a' | 'd'
