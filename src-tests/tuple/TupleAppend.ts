import type {TupleAppend} from "@devtypes/tuple"
// Examples automatically extracted from the documentation.
type Tup = [ number, string ];
type Appended = TupleAppend< Tup, boolean >;
// [ number, string, boolean ]
// Manually written content.
