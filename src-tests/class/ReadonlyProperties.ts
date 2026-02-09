import type {ReadonlyProperties} from "@devtypes/class"
// Examples from the documentation
class Settings { readonly theme = 'dark'; readonly language = 'en'; }
type ReadonlyPropsObj = ReadonlyProperties< Settings >;
// { theme: string; language: string; }
