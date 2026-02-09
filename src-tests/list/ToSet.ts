import type {ToSet} from "@devtypes/list"
// Examples from the documentation
type A = ToSet< number[] >;         // Set< number >
type B = ToSet< Array< string > >;  // Set< string >
