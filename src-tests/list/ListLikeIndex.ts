import type {ListLikeIndex} from "@devtypes/list"

// Examples automatically extracted from the documentation.
type I1 = ListLikeIndex< Record< string, number > >;  // string
type I2 = ListLikeIndex< Map< number, string > >;     // number
type I3 = ListLikeIndex< number[] >;                  // number

// Test automatically generated from examples.
const I1: I1 = string
const I2: I2 = number
const I3: I3 = number

// Manually written content.
