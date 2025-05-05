import Head from 'next/head';

export default function SignUpPage() {
    return (
        <>
            <Head>
                <title>Sign Up | Blue Born Official</title>
                <meta name="description" content="Blue Born Jewelry Website" />

                <link
                    href="https://fonts.googleapis.com/css2?family=Lustria&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div
                className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
                style={{ backgroundImage: "url('/background.jpg')" }} // พื้นหลังทะเล
            >
                {/* กล่องฟอร์มแบบใส + โลโก้แบบล้น */}
                <div className="relative bg-white/70 rounded-3xl px-10 pt-20 pb-10 w-full max-w-md text-center shadow-lg">
                
                {/* โลโก้ล้นออกด้านบน */}
                <img
                    src="/blueborn-logo.png"
                    alt="Blue Born Logo"
                    className="w-60 mx-auto absolute -top-16 left-1/2 transform -translate-x-1/2"
                />

                {/* ข้อความต้อนรับ */}
                <p className="text-lg font- text-gray-800 leading-snug mb-6" style={{ fontFamily: 'Lustria, serif' }} >
                    join to be blue<br />
                    for our <span className="bg-blue-900 text-white px-2 py-0.5 ">Blue Ocean</span>
                </p>

                {/* ฟอร์ม Email / Password */}
                <form className="space-y-4 text-left" style={{ fontFamily: 'Lustria, serif' }}>
                    <div>
                    <label className="block text-sm text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border-2 border-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900/70"
                    />
                    </div>
                    <div>
                    <label className="block text-sm text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border-2 border-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900/70"
                    />
                    </div>
                    <div>
                    <label className="block text-sm text-gray-700 mb-1">Tel.</label>
                    <input
                        type="tel"
                        className="w-full px-4 py-2 border-2 border-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900/70"
                    />
                    </div>
                    <div>
                    <label className="block text-sm text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border-2 border-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900/70"
                    />
                    </div>
                    <div>
                    <label className="block text-sm text-gray-700 mb-1">Confirm Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border-2 border-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900/70"
                    />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 bg-blue-900/70 rounded-full text-white hover:bg-blue-900"
                    >
                        Sign Up
                    </button>
                </form>
                </div>
            </div>
        </>
    );
}
