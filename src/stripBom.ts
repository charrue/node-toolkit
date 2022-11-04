export const stripBom = (content: string | Buffer) => {
  if (Buffer.isBuffer(content)) {
    return content.toString("utf8").replace(/^\uFEFF/, "");
  }
  return content.replace(/^\uFEFF/, "");
};
