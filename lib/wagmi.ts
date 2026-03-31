import { createConfig, http } from "wagmi";
import { injected } from "@wagmi/connectors";
import { base } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http()
  }
});

// TODO(builder-code): replace this placeholder with the final builder code data suffix.
export const builderCodeSuffix = "TODO_REPLACE_WITH_BASE_BUILDER_CODE_SUFFIX";
