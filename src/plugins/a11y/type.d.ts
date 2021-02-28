import { Ref } from "vue";

export declare interface A11y {
    private keyboardMode: Ref<Boolean>;

    constructor(): void;

    private onKeyDown(event: KeyboardEvent): void;
    private onMouseMode(): void;

    isKeyboardMode(): Boolean;

    install(vue: App): void;
}

declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties {
        $a11y: A11y;
    }
}
