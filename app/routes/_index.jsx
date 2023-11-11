import Wingspan from "../components/Wingspan";
import { ClientOnly } from "../components/hydration/ClientOnly";
import { InitialLoad } from "../components/hydration/Fallback";
import { Provider } from "jotai";

export const meta = () => {
  return [{ title: "Wingspan" }];
};

export default function Index() {
  return (
    <ClientOnly fallback={<InitialLoad />}>
      <Provider>
        <Wingspan />
      </Provider>
    </ClientOnly>
  );
}
