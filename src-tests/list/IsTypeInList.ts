import type {IsTypeInList} from "@devtypes/list"
// Examples from the documentation
type TrueIsFound = IsTypeInList< true, [ 1, 'no', true ] >;      // true
type TrueIsNotFound = IsTypeInList< true, [ 1, 'no', false ] >;  // false
type ListIsEmptySoFalse = IsTypeInList< true, [] >;              // false
