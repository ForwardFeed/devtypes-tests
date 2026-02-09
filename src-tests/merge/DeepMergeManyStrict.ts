import type {DeepMergeManyStrict} from "@devtypes/merge"

// Examples automatically extracted from the documentation.
type A = { a: { x: { foo: true } } };
type B = { a: { x: { bar: string } } };
type C = { a: { x: { foo: number } } };
type Merged = DeepMergeManyStrict< [ A, B, C ] >;
// { a: { x: { foo: true; bar: string } } }

// Manually written content.
