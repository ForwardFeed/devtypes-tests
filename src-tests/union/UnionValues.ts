import type {UnionValues} from "@devtypes/union"

// Examples automatically extracted from the documentation.
type U = { a: string } | { b: number };
type V = UnionValues< U >;  // string | number

// Test automatically generated from examples.
const V: V = string | number

// Manually written content.
