import type {TupleTake} from "@devtypes/tuple"
// Examples from the documentation
type T = TupleTake< [ 1, 2, 3, 4 ], 2 >;  // [ 1, 2 ]
