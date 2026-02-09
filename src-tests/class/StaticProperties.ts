import type {StaticProperties} from "@devtypes/class"

// Examples automatically extracted from the documentation.
class Settings { static appName = 'MyApp'; static maxUsers = 100; }
type StaticPropsObj = StaticProperties< typeof Settings >;
// { appName: string; maxUsers: number; }

// Manually written content.
