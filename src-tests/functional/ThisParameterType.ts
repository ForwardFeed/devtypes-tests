import type {ThisParameterType} from "@devtypes/functional"
// Examples automatically extracted from the documentation.
type Fn = ( this: { x: number }, y: string ) => void;
type ThisType = ThisParameterType< Fn >;  // { x: number }
// Manually written content.
