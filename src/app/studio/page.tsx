import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function StudioPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (!data?.claims) {
    redirect("/studio/login");
  }

  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px" }}>
      <p>PRIVATE STUDIO · FOUNDATION</p>
      <h1 style={{ fontFamily: "var(--font-editorial)", fontSize: "3rem" }}>Content Studio</h1>
      <p>The secure editing workspace will be assembled after the public design system is approved.</p>
    </main>
  );
}
