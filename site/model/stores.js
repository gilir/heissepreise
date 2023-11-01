const allSpacesRegex = / /g;

exports.stores = {
    lidl: {
        name: "Lidl",
        budgetBrands: ["promotion", "bons plans"],
        color: "pink",
        defaultChecked: true,
        getUrl: (item) => `https://www.lidl.fr${item.url}`,
        removeOld: true,
    },
};

exports.STORE_KEYS = Object.keys(exports.stores);
exports.BUDGET_BRANDS = [...new Set([].concat(...Object.values(exports.stores).map((store) => store.budgetBrands)))];
