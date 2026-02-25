import { useNavigate } from "react-router-dom";

const WORKFLOW = [
  {
    title: "Create Profile",
    desc: "Citizen creates an account and verifies email/mobile details.",
  },
  {
    title: "Select Registration",
    desc: "Choose buyer or seller flow based on your property role.",
  },
  {
    title: "Upload Documents",
    desc: "Submit ID proof, address proof, and land records securely.",
  },
  {
    title: "Officer Verification",
    desc: "Officials review documents and approve the registration request.",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.15),transparent_30%),linear-gradient(145deg,#020617_20%,#0f172a_100%)]" />

        <button
          type="button"
          onClick={() => navigate("/auth")}
          className="fixed right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-cyan-400 text-slate-900 text-xs font-bold tracking-wide px-3 py-2 shadow-lg hover:bg-cyan-300 transition"
        >
          LOGIN
        </button>

        <div className="relative z-10 mx-auto max-w-7xl px-6 min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl">
            <p className="text-cyan-300 text-sm uppercase tracking-[0.2em] font-semibold">
              Tamil Nadu e-Registration
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              Faceless AI Based
              <br />
              Online Land Registration
            </h1>
            <p className="mt-6 text-slate-300 text-base md:text-lg max-w-2xl">
              Full-screen digital portal for secure, transparent, and fast property registration.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate("/auth")}
                className="rounded-xl bg-cyan-400 text-slate-900 font-bold px-6 py-3 hover:bg-cyan-300 transition"
              >
                Start Now
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="rounded-xl border border-slate-500 text-slate-100 font-semibold px-6 py-3 hover:bg-slate-800 transition"
              >
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-20 pb-20 px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white">Registration Workflow</h2>
          <p className="mt-2 text-slate-300">Simple step-by-step process for citizens and officers.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKFLOW.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-5 hover:border-cyan-400 transition"
              >
                <p className="text-xs text-cyan-300 font-bold tracking-widest">STEP {index + 1}</p>
                <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
