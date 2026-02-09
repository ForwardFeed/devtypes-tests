import type {DeepMergeMany} from "@devtypes/merge"

// Examples automatically extracted from the documentation.
type A = { a: { x: number } };
type B = { a: { y: string } };
type C = { a: { x: string } };
type Merged = DeepMergeMany< [ A, B, C ] >;
// { a: { x: string; y: string } }

// Manually written content.
