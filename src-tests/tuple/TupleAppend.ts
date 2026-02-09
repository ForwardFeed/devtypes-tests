import type {TupleAppend} from "@devtypes/tuple"
// Examples from the documentation
type Tup = [ number, string ];
type Appended = TupleAppend< Tup, boolean >;
// [ number, string, boolean ]
