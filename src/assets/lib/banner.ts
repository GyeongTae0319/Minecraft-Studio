import { Dictionary } from "@/vue-global";

export interface BannerPattern {
    id: string;
    image: string;
}
export interface BannerColor {
    hex: string;
    id: number;
    old: number;
}

function getPattern(pattern: string): string {
    return require(`@/assets/minecraft/textures/entity/banner/${pattern}.png`);
}

export const BannerPatternList: Dictionary<BannerPattern> = {
    base                  : { id: "b",   image: getPattern("base") },
    stripe_bottom         : { id: "bs",  image: getPattern("stripe_bottom") },
    stripe_top            : { id: "ts",  image: getPattern("stripe_top") },
    stripe_left           : { id: "ls",  image: getPattern("stripe_left") },
    stripe_right          : { id: "rs",  image: getPattern("stripe_right") },
    stripe_center         : { id: "cs",  image: getPattern("stripe_center") },
    stripe_middle         : { id: "ms",  image: getPattern("stripe_middle") },
    stripe_downright      : { id: "drs", image: getPattern("stripe_downright") },
    stripe_downleft       : { id: "dls", image: getPattern("stripe_downleft") },
    small_stripes         : { id: "ss",  image: getPattern("small_stripes") },
    cross                 : { id: "cr",  image: getPattern("cross") },
    straight_cross        : { id: "sc",  image: getPattern("straight_cross") },
    diagonal_left         : { id: "ld",  image: getPattern("diagonal_left") },
    diagonal_right        : { id: "rud", image: getPattern("diagonal_right") },
    diagonal_up_left      : { id: "lud", image: getPattern("diagonal_up_left") },
    diagonal_up_right     : { id: "gd",  image: getPattern("diagonal_up_right") },
    half_vertical         : { id: "vh",  image: getPattern("half_vertical") },
    half_vertical_right   : { id: "vhr", image: getPattern("half_vertical_right") },
    half_horizontal       : { id: "hh",  image: getPattern("half_horizontal") },
    half_horizontal_bottom: { id: "hhb", image: getPattern("half_horizontal_bottom") },
    square_bottom_left    : { id: "bl",  image: getPattern("square_bottom_left") },
    square_bottom_right   : { id: "br",  image: getPattern("square_bottom_right") },
    square_top_left       : { id: "tl",  image: getPattern("square_top_left") },
    square_top_right      : { id: "tr",  image: getPattern("square_top_right") },
    triangle_bottom       : { id: "bt",  image: getPattern("triangle_bottom") },
    triangle_top          : { id: "tt",  image: getPattern("triangle_top") },
    triangles_bottom      : { id: "bts", image: getPattern("triangles_bottom") },
    triangles_top         : { id: "tts", image: getPattern("triangles_top") },
    circle                : { id: "mc",  image: getPattern("circle") },
    rhombus               : { id: "mr",  image: getPattern("rhombus") },
    border                : { id: "bo",  image: getPattern("border") },
    curly_border          : { id: "cbo", image: getPattern("curly_border") },
    bricks                : { id: "bri", image: getPattern("bricks") },
    gradient              : { id: "gra", image: getPattern("gradient") },
    gradient_up           : { id: "gru", image: getPattern("gradient_up") },
    creeper               : { id: "cre", image: getPattern("creeper") },
    skull                 : { id: "sku", image: getPattern("skull") },
    flower                : { id: "flo", image: getPattern("flower") },
    mojang                : { id: "moj", image: getPattern("mojang") },
    globe                 : { id: "glb", image: getPattern("globe") },
    piglin                : { id: "pig", image: getPattern("piglin") }
};
export const BannerColorList: Dictionary<BannerColor> = {
    red       : { hex: "#b02d26", id: 14, old:  1 },
    orange    : { hex: "#f9801d", id:  1, old: 14 },
    yellow    : { hex: "#fed83d", id:  4, old: 11 },
    lime      : { hex: "#80c71f", id:  5, old: 10 },
    green     : { hex: "#5e7c16", id: 13, old:  2 },
    cyan      : { hex: "#169c9c", id:  9, old:  6 },
    light_blue: { hex: "#3ab3da", id:  3, old: 12 },
    blue      : { hex: "#3c44aa", id: 11, old:  4 },
    purple    : { hex: "#8932b8", id: 10, old:  5 },
    magenta   : { hex: "#c74ebd", id:  2, old: 13 },
    pink      : { hex: "#f38baa", id:  6, old:  9 },
    white     : { hex: "#ffffff", id:  0, old: 15 },
    light_gray: { hex: "#9d9d97", id:  8, old:  7 },
    gray      : { hex: "#474f52", id:  7, old:  8 },
    black     : { hex: "#1d1d21", id: 15, old:  0 },
    brown     : { hex: "#835432", id: 12, old:  3 }
};
