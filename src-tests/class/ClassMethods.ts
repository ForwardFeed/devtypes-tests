import type {ClassMethods} from "@devtypes/class"

// Examples automatically extracted from the documentation.
class API { fetch( url: string ) {} post( url: string, data: any ) {} }
type Methods = ClassMethods< API >;
// { fetch: ( url: string ) => ...; post: ( url: string, data: any ) => ...; }

// Manually written content.
