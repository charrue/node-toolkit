type HrtimeFormatter = "second" | "millisecond" | "nanosecond";

const ONE_MILLISECOND = 1000000;
const ONE_SECOND = ONE_MILLISECOND * 1000;

/**
 * use to track how long an operation takes
 * @return {Function} stop a timer
 * @see https://nodejs.org/api/process.html#processhrtimebigint
 * @example
 * const end = hrtime();
 * await wait(1000);
 * console.log(end()) //  1001.270494
 * console.log(end("second")) //  1.000759369
 * console.log(end("nanosecond")) //  1000764309
 */
export const hrtime = () => {
  const startTime = process.hrtime.bigint();

  const stop = (type: HrtimeFormatter = "millisecond") => {
    const time = Number(process.hrtime.bigint() - startTime);
    if (type === "second") {
      return time / ONE_SECOND;
    }
    if (type === "millisecond") {
      return time / ONE_MILLISECOND;
    }
    return time;
  };

  return stop;
};
