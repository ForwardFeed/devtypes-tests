import type {UnionIntersect} from "@devtypes/union"
// Examples automatically extracted from the documentation.
type A = 'a' | 'b' | 'c';
type B = 'a' | 'x';
type C = UnionDifference< A, B >;  // 'a'
// Manually written content.
