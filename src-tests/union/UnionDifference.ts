import type {UnionDifference} from "@devtypes/union"

// Examples automatically extracted from the documentation.
type A = 'a' | 'b' | 'c';
type B = 'a' | 'x';
type C = UnionDifference< A, B >;  // 'b' | 'c'

// Test automatically generated from examples.
const C: C = 'b' | 'c'

// Manually written content.
