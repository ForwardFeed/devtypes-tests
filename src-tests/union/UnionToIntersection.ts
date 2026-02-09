import type {UnionToIntersection} from "@devtypes/union"
// Examples from the documentation
type U = { a: string } | { b: number };
type I = UnionToIntersection< U >;
// { a: string } & { b: number }
