import type {IsListLike} from "@devtypes/guard"
// Examples from the documentation
type A = IsListLike< number[] >;                  // true
type B = IsListLike< Record< string, number > >;  // true
type C = IsListLike< string >;                    // false
