import { redirect } from "next/navigation";
import { docsHref, flatNav } from "./docs-data";

// /docs has no page of its own -- it opens the first entry in the sidebar.
export default function DocsIndex() {
  redirect(docsHref(flatNav()[0].id));
}
