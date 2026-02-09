import type {TuplePrepend} from "@devtypes/tuple"
// Examples automatically extracted from the documentation.
type Tup = [ number, string ];
type Prepended = TuplePrepend< Tup, boolean >;
// [ boolean, number, string ]
// Manually written content.
