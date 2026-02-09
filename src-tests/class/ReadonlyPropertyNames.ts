import type {ReadonlyPropertyNames} from "@devtypes/class"
// Examples from the documentation
class Config { readonly version = '1.0'; readonly name = 'app'; }
type ReadonlyProps = ReadonlyPropertyNames< Config >; // 'version' | 'name'
