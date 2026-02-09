import type {ListLikeIndex} from "@devtypes/list"
// Examples automatically extracted from the documentation.
type I1 = ListLikeIndex< Record< string, number > >;  // string
type I2 = ListLikeIndex< Map< number, string > >;     // number
type I3 = ListLikeIndex< number[] >;                  // number
// Manually written content.
