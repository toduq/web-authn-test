import { startRegistration } from "@simplewebauthn/browser";

export const onRegister = async () => {
  // https://simplewebauthn.dev/docs/packages/browser
  const resp = await startRegistration({
    rp: {
      name: "localhost test",
      id: "localhost",
    },
    user: {
      displayName: "the displayName",
      id: "abcdef",
      name: "the name",
    },
    challenge: "abcdef",
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7,
      },
      {
        type: "public-key",
        alg: -257,
      },
    ],
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).resp = resp;
  console.log(resp);
};
