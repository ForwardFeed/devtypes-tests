import type {TupleDrop} from "@devtypes/tuple"
// Examples from the documentation
type T = TupleDrop< [ 1, 2, 3, 4 ], 2 >;  // [ 3, 4 ]
