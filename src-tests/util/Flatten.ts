import type {Flatten} from "@devtypes/util"
// Examples from the documentation
type Arr = Array< { a: number } >;
type FlatArr = Flatten< Arr >; // { a: number }[]
