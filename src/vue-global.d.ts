import { App, ComponentCustomProperties, Ref } from "vue";

// Data structure
export declare type Dictionary<T> = { [key: string]: T };
export declare type ClassList = String | Array<string | Dictionary<Boolean>> | Dictionary<Boolean>
