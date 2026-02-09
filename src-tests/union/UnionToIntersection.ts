import type {UnionToIntersection} from "@devtypes/union"
// Examples automatically extracted from the documentation.
type U = { a: string } | { b: number };
type I = UnionToIntersection< U >;
// { a: string } & { b: number }
// Manually written content.
