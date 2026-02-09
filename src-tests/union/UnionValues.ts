import type {UnionValues} from "@devtypes/union"
// Examples from the documentation
type U = { a: string } | { b: number };
type V = UnionValues< U >;  // string | number
