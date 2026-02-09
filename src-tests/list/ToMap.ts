import type {ToMap} from "@devtypes/list"
// Examples from the documentation
type A = ToMap< Record< string, number > >;  // Map< string, number >
type B = ToMap< number[] >;                  // Map< number, number >
