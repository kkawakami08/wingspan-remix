import Test from "../components/Test";
import { ClientOnly } from "../components/ClientOnly";
import { Fallback } from "../components/Fallback";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return <ClientOnly fallback={<Fallback />}>{() => <Test />}</ClientOnly>;
}
