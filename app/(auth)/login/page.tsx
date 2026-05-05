import { Card } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-navy p-6">
      <Card className="w-full max-w-md">
        <h1 className="text-2xl font-semibold">Equivator Access</h1>
        <p className="mt-2 text-sm text-slate-600">Corporate email and invitation required.</p>
        <form className="mt-5 space-y-3">
          <input className="w-full rounded-xl border border-slate-200 p-3" placeholder="name@equivator.com" />
          <button className="w-full rounded-xl bg-brand-navy p-3 text-white">Sign In</button>
        </form>
      </Card>
    </main>
  );
}
