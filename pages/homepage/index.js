import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Blue Born Official</title>
        <meta name="description" content="Blue Born Jewelry Website" />

        <link
          href="https://fonts.googleapis.com/css2?family=Lustria&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }} // เปลี่ยนภาพตาม path ที่ใช้จริง
      >
        {/* เมนูด้านซ้ายบน */}
        {/* <div className="absolute top-6 left-6 text-white space-y-2 text-sm tracking-wider">
          <div>CUSTOMER</div>
          <div>SERVICES</div>
          <div>CONTACT US</div>
        </div> */}

        {/* เมนูด้านขวาบน */}
        {/* <div className="absolute top-6 right-6 text-white text-xs space-x-2 tracking-wider">
          <span>HOME</span> / 
          <span>VIEW CATALOGUE</span> / 
          <span>ABOUT US</span> / 
          <span>RING SIZE</span> / 
          <span>HOW TO MASSURE</span>
        </div> */}

        {/* โลโก้ตรงกลาง */}
        <div className="flex flex-col items-center justify-center text-center min-h-screen">
          <img
            src="/blueborn-logo.png"
            alt="Blue Born Logo"
            className="w-[700px] max-w-[70%]"
          />

          {/* ปุ่มสมัคร/เข้าสู่ระบบ */}
          <div className="mt-6 space-x-4">
            <button className="px-6 py-2 bg-white bg-opacity-20 border border-white text-black rounded-full hover:bg-opacity-40">
              SIGN UP
            </button>
            <button className="px-6 py-2 bg-white bg-opacity-20 border border-white text-black rounded-full hover:bg-opacity-40">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
