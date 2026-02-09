import type {UnionMerge} from "@devtypes/union"
// Examples from the documentation
type U = { a: string } | { b: number };
type M = UnionMerge< U >;
// { a?: string; b?: number }
