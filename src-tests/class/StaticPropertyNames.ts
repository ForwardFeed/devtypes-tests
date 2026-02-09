import type {StaticPropertyNames} from "@devtypes/class"
// Examples automatically extracted from the documentation.
class Config { static readonly version = '1.0'; static readonly debug = false; }
type StaticProps = StaticPropertyNames< typeof Config >;
// 'version' | 'debug'
// Manually written content.
