# fetchCvData test issues

The tests for `fetchCvData` are not running as expected. The tests are failing with the following error:

```
 FAIL  src/components/CvContainer/fetchCvData.spec.ts [ src/components/CvContainer/fetchCvData.spec.ts ]
TypeError: (0 , registerApolloClient) is not a function
 ❯ src/graphql/createApolloClient.tsx:12:51
     10|
     11| // Source: https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs#i…
     12| export const { getClient, query, PreloadQuery } = registerApolloClient(
       |                                                   ^
     13|   () =>
     14|     new ApolloClient({
 ❯ src/graphql/index.ts:1:1
```

This is the command I'm using to run just that test:

```sh
pnpm test fetchCvData.spec
```

I found this Apollo issue, which seems to be the same problem:
[registerApolloClient is not a function when using RSC's with Storybook](https://github.com/apollographql/apollo-client-integrations/issues/307).

It further links to this Storybook issue:
[[Bug]: RSC stories that use "react-server" exports do not get bundled correctly](https://github.com/storybookjs/storybook/issues/27527).

Which led me to this:
[vitest-plugin-rsc](https://github.com/kasperpeulen/vitest-plugin-rsc#readme).

I have followed the instructions in the README, but I'm still getting the same error. I'm not sure what I'm missing.

This is the error I'm seeing:

```
 FAIL   chromium  src/components/CvContainer/fetchCvData.spec.ts [ src/components/CvContainer/fetchCvData.spec.ts ]
Error: Failed to import test file /Users/mattcalthrop/Code/mcalthrop/cv-react-ts-graphql/src/vitest.setup.ts
Caused by: ReferenceError: require is not defined
 ❯ node_modules/.pnpm/@vitejs+plugin-rsc@0.4.16_react-dom@19.1.1_react@19.1.1__react@19.1.1_vite@7.1.3_@types+node@_3bd2fvcudktgreyumvi43qqiuq/node_modules/@vitejs/plugin-rsc/dist/vendor/react-server-dom/server.edge.js:7:2
```
