import { App, ref } from "vue";

export default class A11y {
    private keyboardMode = ref(false);

    constructor() {
        window.addEventListener("keydown", (event) => {
            if (/Tab|Arrow(Up|Down|Left|Right)/.test(event.key)) {
                this.keyboardMode.value = true;
            }
        });
        window.addEventListener("mousemove", () => {
            this.keyboardMode.value = false;
        });
    }

    private onKeyDown(event: KeyboardEvent) {
        if (/Tab|Arrow(Up|Down|Left|Right)/.test(event.key)) {
            this.keyboardMode.value = true;
        }
    }
    private onMouseMode() {
        console.log(this.keyboardMode);
        this.keyboardMode.value = false;
    }

    isKeyboardMode() {
        return this.keyboardMode.value;
    }

    install(vue: App) {
        vue.config.globalProperties.$a11y = this;
    }
}
