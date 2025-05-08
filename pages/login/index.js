import Head from "next/head";
import Image from "next/image";
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/users/token/', {
        username: username, // Replace with your username field
        password: password, // Replace with your password field
      });
    
      const { access, refresh } = response.data;
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      router.push('/'); // Redirect to home page after successful login

    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
      setError(error.response?.data?.detail || "An unexpected error occurred.");
    } finally {
      setLoading(false);  // Reset loading state
    }
  };

  return (
    <>
      <Head>
        <title>Login | Blue Born Official</title>
        <meta name="description" content="Blue Born Jewelry Website" />
      </Head>

      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/background.jpg')" }} // พื้นหลังทะเล
      >
        {/* กล่องฟอร์มแบบใส + โลโก้แบบล้น */}
        <div className="relative bg-white/70 rounded-3xl px-10 pt-20 pb-10 w-full max-w-md text-center shadow-lg">
          {/* โลโก้ล้นออกด้านบน */}
          <Image
            src="/blueborn-logo.png"
            alt="Blue Born Logo"
            width={240}
            height={240}
            className="mx-auto absolute -top-5 left-1/2 transform -translate-x-1/2"
          />

          {/* ข้อความต้อนรับ */}
          <p
            className="mt-20 text-lg font- text-gray-800 leading-snug mb-6"
            style={{ fontFamily: "Lustria, serif" }}
          >
            Welcome back, Blue Fam!
            <br />
            Login and Keep on
            <br />
            Protect our{" "}
            <span className="bg-blue-900 text-white px-2 py-0.5 ">
              Big Blue!
            </span>
          </p>

          {/* ฟอร์ม Email / Password */}
          <form
            className="space-y-4 text-left"
            style={{ fontFamily: "Lustria, serif" }}
          >
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border-2 border-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900/70"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border-2 border-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900/70"
                placeholder="Enter your password"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </form>

          {/* ปุ่ม Login */}
          <button
            className="mt-5 px-6 py-2 bg-white bg-opacity-20 border border-white text-black rounded-full cursor-pointer"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'SIGN IN'}
          </button>
        </div>
      </div>
    </>
  );
}
