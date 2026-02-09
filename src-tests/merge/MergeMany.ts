import type {MergeMany} from "@devtypes/merge"

// Examples automatically extracted from the documentation.
type A = { a: number };
type B = { b: string };
type C = { b: number };
type D = { c: boolean };
type Merged = MergeMany< [ A, B, C, D ] >;
// { a: number, b: number, c: boolean }

// Manually written content.
