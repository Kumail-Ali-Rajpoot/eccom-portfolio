"use client";
import { useEffect, useState } from "react";

export default function PromoCode({adminConfirmation}) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // success | error | null
  
  const handleApply = () => {
    if (code.trim().toLowerCase() === "save10") {
      setStatus("success");
      setMessage("🎉 Promo applied! You saved 10%.");
    }else if(code.trim().toLowerCase() === "admin786") {
      localStorage.setItem("admin","true")
      setStatus("success");
      adminConfirmation(true);
      setMessage("👑 Welcome to halcyon owner 🧑‍💼! Add products 🛒, remove products🗑️, edit products📝, according to your wish.");
    } else {
      localStorage.setItem("admin","false")
      setStatus("error");
      adminConfirmation(false);
      setMessage("❌ Invalid promo code. Please try again.");
    }
    console.log("handle apply function call");
  };
  useEffect(()=>{
    let adminStatus = localStorage.getItem("admin");
    console.log(`Admin status = ${adminStatus}`)
  },[status])

  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg border mt-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        💸 Got a Promo Code?
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your promo code"
          className="flex-1 w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 text-lg"
        />
        <button
          onClick={handleApply}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition-all"
        >
          Apply Code
        </button>
      </div>

      {message && (
        <div
          className={`mt-6 text-center text-lg font-medium ${
            status === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
