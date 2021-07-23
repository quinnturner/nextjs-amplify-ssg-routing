import { useRouter } from "next/router";
import PageIndex from "../../../components/page-index";

export default function Page() {
  const router = useRouter();
  const {a} = router.query;
  return (
    <div>
      <h1>/with-indexes/[a]</h1>
      <p>with [a] = {a}</p>
      <PageIndex />
    </div>
  );
}
