import { startAuthentication } from "@simplewebauthn/browser";

export const onLogin = async (useBrowserAutofill: boolean) => {
  // https://simplewebauthn.dev/docs/packages/browser
  const resp = await startAuthentication(
    {
      challenge: "abcdef",
      rpId: "localhost",
    },
    useBrowserAutofill
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).resp = resp;
  console.log(resp);
};
