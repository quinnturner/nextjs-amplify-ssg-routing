import { useRouter } from "next/router";
import PageIndex from "../../../../../components/page-index";

export default function Page() {
  const router = useRouter();
  const { a, b } = router.query;
  return (
    <div>
      <h1>/with-named/[a]/[b]/static</h1>
      <p>with [a] = {a}</p>
      <p>with [b] = {b}</p>
      <PageIndex />
    </div>
  );
}
