import type {ReadonlyPropertyNames} from "@devtypes/class"

// Examples automatically extracted from the documentation.
class Config { readonly version = '1.0'; readonly name = 'app'; }
type ReadonlyProps = ReadonlyPropertyNames< Config >; // 'version' | 'name'

// Test automatically generated from examples.
const ReadonlyProps: ReadonlyProps = 'version' | 'name'

// Manually written content.
