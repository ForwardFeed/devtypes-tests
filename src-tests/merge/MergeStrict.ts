import type {MergeStrict} from "@devtypes/merge"
// Examples from the documentation
type A = { a: number; b: string };
type B = { b: number; c: boolean };
type Merged = MergeStrict< A, B >;
// { a: number; b: string; c: boolean }
