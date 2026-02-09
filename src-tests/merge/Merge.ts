import type {Merge} from "@devtypes/merge"
// Examples automatically extracted from the documentation.
type A = { a: number; b: string };
type B = { b: number; c: boolean };
type Merged = Merge< A, B >;
// { a: number; b: number; c: boolean }
// Manually written content.
