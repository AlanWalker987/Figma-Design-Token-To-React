import { StyleDictionary } from "style-dictionary-utils";

const mystyleDictionary = new StyleDictionary();

const styleDictionary = await mystyleDictionary.extend({
    source: ["tokens/**/*.tokens.json"],
    platforms: {
        css: {
            buildPath: "src/styles/",
            transformGroup: "css",
            files: [
                {
                    format: "css/variables",
                    destination: "variables.css"
                }
            ]
        }
    }
});

styleDictionary.buildAllPlatforms();