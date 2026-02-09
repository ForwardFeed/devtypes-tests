import type {TupleToUnion} from "@devtypes/tuple"
// Examples from the documentation
type Tup = [ string, number, boolean ];
type U = TupleToUnion< Tup >;
// string | number | boolean
