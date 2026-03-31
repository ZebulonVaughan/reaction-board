import { createConfig, http } from "wagmi";
import { injected } from "@wagmi/connectors";
import { base } from "wagmi/chains";
import { builderCode, builderCodeDataSuffix } from "@/lib/app-config";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http()
  }
});

export { builderCode, builderCodeDataSuffix };
