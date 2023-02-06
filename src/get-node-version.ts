export const getNodeVersion = () => process.version;

export const getNodeMajorVersion = () => parseInt(process.version.slice(1), 10);
