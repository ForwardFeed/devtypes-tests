import type {TupleZip} from "@devtypes/tuple"
// Examples from the documentation
type Z = TupleZip< [ 1, 2 ], [ 'a', 'b', 'c' ] >;
// [ [ 1, 'a' ], [ 2, 'b' ] ]
