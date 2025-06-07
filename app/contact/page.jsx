import Navbar from "@/components/navbar"
import Footer from "@/components/footer";


export default function ContactPage() {
  return (
    <>
    <Navbar></Navbar>
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
          📬 Contact Us
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Have questions, suggestions, or just want to say hello? We’d love to hear from you.
          Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form className="bg-gray-50 rounded-2xl shadow-lg p-8 text-left space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none"
              required
              />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none"
              required
              />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
            >
            Send Message
          </button>
        </form>

        <p className="mt-12 text-sm text-gray-500">
          📧 You can also reach us directly at <span className="text-blue-600">support@halcyonali.com</span>
        </p>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}
