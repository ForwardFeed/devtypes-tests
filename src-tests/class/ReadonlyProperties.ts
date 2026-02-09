import type {ReadonlyProperties} from "@devtypes/class"

// Examples automatically extracted from the documentation.
class Settings { readonly theme = 'dark'; readonly language = 'en'; }
type ReadonlyPropsObj = ReadonlyProperties< Settings >;
// { theme: string; language: string; }

// Manually written content.
