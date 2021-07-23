import Link from "next/link";

export default function PageIndex() {
  const wsb = "with-named";
  const wi = "with-indexes";
  const paths = [
    "/",
    `/${wsb}`,
    `/${wsb}/a`,
    `/${wsb}/a/static`,
    `/${wsb}/a/b`,
    `/${wsb}/static`,
    `/${wsb}/static/c`,
    `/${wsb}/static/c/d`,
    `/${wsb}/static/c/static`,
    `/${wi}`,
    `/${wi}/a`,
    `/${wi}/a/static`,
    `/${wi}/a/b`,
    `/${wi}/static`,
    `/${wi}/static/c`,
    `/${wi}/static/c/d`,
    `/${wi}/static/c/static`,
  ];
  return (
    <div>
      <h2>Next's Link component</h2>
      {paths.map((p, i) => (
        <p key={i}>
          <Link href={p}>{p}</Link>
        </p>
      ))}
      <h2>anchor component</h2>
      {paths.map((p, i) => (
        <p key={i}>
          <a href={p}>{p}</a>
        </p>
      ))}
    </div>
  );
}
