import type { Plugin } from 'vue';
export declare const SevenSegmentDisplay: import("vue").DefineComponent<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    disableSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    disableSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    value: string | number;
    disableSelect: boolean;
}>;
export declare const SevenSegmetSingle: import("vue").DefineComponent<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    disableSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    disableSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    value: string | number;
    disableSelect: boolean;
}>;
declare const _default: Plugin<any[]>;
export default _default;
