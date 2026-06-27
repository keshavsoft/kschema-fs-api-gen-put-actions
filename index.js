import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (cmd) => {
    const module = await import(`./bin/${getLatestVersion()}/tasks/actions/${cmd}.js`);

    return module.default; // Returns a function
};

const modify = async ({ toPath, showLog, toConfigPath, inTargetPath,
    inGenerateRest, inPort }) => {

    const commandToSend = "modify";

    const commandFunction = await load(commandToSend);
    // console.log("  ...args :", args);
    await commandFunction({
        toPath, toConfigPath, inTargetPath,
        inFolderName: commandToSend, inGenerateRest,
        showLog, inPort
    });
};

export {
    withMail, modify
};
