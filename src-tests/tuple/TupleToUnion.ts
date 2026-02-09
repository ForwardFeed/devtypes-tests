import type {TupleToUnion} from "@devtypes/tuple"
// Examples automatically extracted from the documentation.
type Tup = [ string, number, boolean ];
type U = TupleToUnion< Tup >;
// string | number | boolean
// Manually written content.
