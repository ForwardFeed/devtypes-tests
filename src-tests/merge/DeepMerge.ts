import type {DeepMerge} from "@devtypes/merge"
// Examples from the documentation
type A = { a: { x: number; y: string }; b: string };
type B = { a: { y: number; z: boolean }; c: boolean };
type Merged = DeepMerge< A, B >;
// { a: { x: number; y: number; z: boolean }; b: string; c: boolean }
