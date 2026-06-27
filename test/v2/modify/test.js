import path from "path";
import { modify } from "../../../index.js";

modify({
    toPath: process.cwd(),
    toConfigPath: path.join(process.cwd(), "Config", "Schemas", "journals.json"),
    showLog: false,
    inGenerateRest: true,
    inPort: "3015"
});