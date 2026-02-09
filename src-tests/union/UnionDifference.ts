import type {UnionDifference} from "@devtypes/union"
// Examples from the documentation
type A = 'a' | 'b' | 'c';
type B = 'a' | 'x';
type C = UnionDifference< A, B >;  // 'b' | 'c'
