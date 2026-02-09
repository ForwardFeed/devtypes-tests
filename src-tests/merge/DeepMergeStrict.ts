import type {DeepMergeStrict} from "@devtypes/merge"
// Examples from the documentation
type A = { a: { x: { foo: true } } };
type B = { a: { x: { foo: number, bar: string } } };
type Merged = DeepMergeStrict< A, B >;
// { a: { x: { foo: true, bar: string } } }
