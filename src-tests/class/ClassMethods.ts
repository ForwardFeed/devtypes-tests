import type {ClassMethods} from "@devtypes/class"
// Examples from the documentation
class API { fetch( url: string ) {} post( url: string, data: any ) {} }
type Methods = ClassMethods< API >;
// { fetch: ( url: string ) => ...; post: ( url: string, data: any ) => ...; }
