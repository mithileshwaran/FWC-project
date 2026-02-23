// pages/RegistrationTypePage.jsx
import { useNavigate } from "react-router-dom";
import { Card } from "../components/UI";

export default function RegistrationTypePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <span className="text-4xl">🏠</span>
          <h1
            className="text-3xl font-black text-stone-900 mt-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            New Registration
          </h1>
          <p className="text-stone-500 mt-2 font-medium">
            Tell us your role in this property transaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Buyer */}
          <button
            onClick={() => navigate("/buyer")}
            className="group text-left"
          >
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-amber-300 cursor-pointer">
              <div className="text-5xl mb-4">🛒</div>
              <h2 className="text-xl font-black text-stone-900 mb-2">I am a Buyer</h2>
              <p className="text-stone-500 text-sm leading-relaxed">
                Looking to purchase land or property. You'll submit personal
                details, property interest, and supporting documents.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-xl text-sm font-bold group-hover:bg-amber-500 transition-all">
                Continue as Buyer →
              </div>
            </Card>
          </button>

          {/* Seller */}
          <button
            onClick={() => navigate("/seller")}
            className="group text-left"
          >
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-amber-300 cursor-pointer">
              <div className="text-5xl mb-4">🏡</div>
              <h2 className="text-xl font-black text-stone-900 mb-2">I am a Seller</h2>
              <p className="text-stone-500 text-sm leading-relaxed">
                Looking to sell your property. You'll submit ownership docs,
                land details, and a video consent statement.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-xl text-sm font-bold group-hover:bg-amber-500 transition-all">
                Continue as Seller →
              </div>
            </Card>
          </button>
        </div>
      </div>
    </div>
  );
}
