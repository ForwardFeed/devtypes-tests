import type {IsTypeRecursive} from "@devtypes/guard"
// Examples from the documentation
type RecursiveType = { r: RecursiveType };
type Recursive = IsTypeRecursive< RecursiveType >;                                // true

type PotentialRecursiveType = { r: PotentialRecursiveType | null };
type PotentialRecursive = IsTypeRecursive< PotentialRecursiveType >;              // true             
type IsNotRecursive = IsTypeRecursive< { a: { a: { a: { a: { a: 'a' } } } } } >;  // false
