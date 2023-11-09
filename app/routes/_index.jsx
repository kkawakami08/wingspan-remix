import Test from "../components/Test";
import { ClientOnly } from "../components/hydration/ClientOnly";
import { InitialLoad } from "../components/hydration/Fallback";
import { Provider } from "jotai";
import { wingspanStore } from "../utils/jotaiStore";

export const meta = () => {
  return [{ title: "Wingspan" }];
};

export default function Index() {
  return (
    <ClientOnly fallback={<InitialLoad />}>
      <Provider store={wingspanStore}>
        <Test />
      </Provider>
    </ClientOnly>
  );
}
