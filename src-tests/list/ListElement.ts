import type {ListElement} from "@devtypes/list"
// Examples from the documentation
type E1 = ListElement< number[] >;                   // number
type E2 = ListElement< Set< string > >;              // string
type E3 = ListElement< Record< string, boolean > >;  // boolean
