import type {ListLikeIndex} from "@devtypes/list"
// Examples from the documentation
type I1 = ListLikeIndex< Record< string, number > >;  // string
type I2 = ListLikeIndex< Map< number, string > >;     // number
type I3 = ListLikeIndex< number[] >;                  // number
