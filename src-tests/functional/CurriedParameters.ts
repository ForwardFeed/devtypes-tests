import type {CurriedParameters} from "@devtypes/functional"

// Examples automatically extracted from the documentation.
type CurriedFn = ( a: string ) => ( b: number ) => ( c: boolean ) => void;
type Params = CurriedParameters< CurriedFn >;  // [ string, number, boolean ]

// Manually written content.
