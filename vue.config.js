module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/styles/_variables.scss";
                    @import "@/assets/styles/_fonts.scss";
                    @import "@/assets/styles/_mixins.scss";
                `,
            }
        }
    }
};
