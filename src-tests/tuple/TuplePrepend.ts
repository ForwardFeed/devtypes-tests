import type {TuplePrepend} from "@devtypes/tuple"
// Examples from the documentation
type Tup = [ number, string ];
type Prepended = TuplePrepend< Tup, boolean >;
// [ boolean, number, string ]
