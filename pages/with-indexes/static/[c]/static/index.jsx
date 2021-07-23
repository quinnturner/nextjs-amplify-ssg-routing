import { useRouter } from "next/router";
import PageIndex from "../../../../../components/page-index";

export default function Page() {
  const router = useRouter();
  const { c } = router.query;
  return (
    <div>
      <h1>/with-indexes/static/[c]/static</h1>
      <p>with [c] = {c}</p>
      <PageIndex />
    </div>
  );
}
