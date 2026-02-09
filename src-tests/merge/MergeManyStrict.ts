import type {MergeManyStrict} from "@devtypes/merge"
// Examples from the documentation
type A = { a: number };
type B = { b: string };
type C = { b: number };
type D = { c: boolean };
type Merged = MergeManyStrict< [ A, B, C, D ] >;
// { a: number, b: string, c: boolean }
