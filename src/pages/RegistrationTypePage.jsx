import { useNavigate } from "react-router-dom";
import { Card } from "../components/UI";

export default function RegistrationTypePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.15),transparent_30%),linear-gradient(145deg,#020617_20%,#0f172a_100%)]" />
      </div>

      <div className="relative w-full max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-white mt-3">
            New Registration
          </h1>
          <p className="text-slate-300 mt-2 font-medium">
            Tell us your role in this property transaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button onClick={() => navigate("/buyer")} className="group text-left">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border border-slate-700 group-hover:border-cyan-400 cursor-pointer">
              <h2 className="text-xl font-black text-white mb-2">I am a Buyer</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Looking to purchase land or property. Submit your details and supporting documents.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-cyan-400 text-slate-900 px-4 py-2 rounded-xl text-sm font-bold group-hover:bg-cyan-300 transition-all">
                Continue as Buyer
              </div>
            </Card>
          </button>

          <button onClick={() => navigate("/seller")} className="group text-left">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border border-slate-700 group-hover:border-cyan-400 cursor-pointer">
              <h2 className="text-xl font-black text-white mb-2">I am a Seller</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Looking to sell your property. Submit ownership docs and video consent.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-cyan-400 text-slate-900 px-4 py-2 rounded-xl text-sm font-bold group-hover:bg-cyan-300 transition-all">
                Continue as Seller
              </div>
            </Card>
          </button>
        </div>
      </div>
    </div>
  );
}
