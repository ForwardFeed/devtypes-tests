import type {UnionMerge} from "@devtypes/union"
// Examples automatically extracted from the documentation.
type U = { a: string } | { b: number };
type M = UnionMerge< U >;
// { a?: string; b?: number }
// Manually written content.
