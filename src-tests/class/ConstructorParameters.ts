import type {ConstructorParameters} from "@devtypes/class"
// Examples from the documentation
class User { constructor( id: number, name: string ) {} }
type CtorParams = ConstructorParameters< typeof User >;
// [ id: number, name: string ]
