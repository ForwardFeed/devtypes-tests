import type {RequiredKeys} from "@devtypes/constraint"
// Examples automatically extracted from the documentation.
type Obj = { a: number; b?: string; c: number | undefined; d: boolean };
type ReqKeys = RequiredKeys< Obj >;  // 'a' | 'd'
// Manually written content.
