import type {TupleConcat} from "@devtypes/tuple"
// Examples from the documentation
type C = TupleConcat< [ 1, 2 ], [ 3, 4 ] >;  // [ 1, 2, 3, 4 ]
