import Head from 'next/head';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Blue Born Official</title>
        <meta name="description" content="Blue Born Jewelry Website" />
      </Head>

      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }} // เปลี่ยนภาพตาม path ที่ใช้จริง
      >
        {/* เมนูด้านซ้ายบน */}
        <div className="absolute top-6 left-10 text-white space-y-2 text-sm tracking-wider ">
        <Image
        src="/mini-logo.png"
        width={75}
        height={75}
        alt='Mini Logo'
        />
          <a href='#'>CUSTOMER</a><br></br>
          <a href='#'> SERVICES</a><br></br>
          <a href='#'> CONTACT US</a>
        </div>

        {/* เมนูด้านขวาบน */}
        <div className="absolute top-6 right-6 text-black text-xs space-x-2 tracking-wider">
          <span>HOME</span> / 
          <span>VIEW CATALOGUE</span> / 
          <span>ABOUT US</span> / 
          <span>RING SIZE</span> / 
          <span>HOW TO MASSURE</span>
        </div>

        {/* โลโก้ตรงกลาง */}
        <div className="flex flex-col items-center justify-center text-center min-h-screen">
          <Image
            src="/blueborn-logo.png"
            alt="Blue Born Logo"
            width={700}
            height={700}
            className="w-[700px] max-w-[70%]"

          />

          {/* ปุ่มสมัคร/เข้าสู่ระบบ */}
          <div className="mt-6 space-x-4">
            <button className="px-6 py-2 bg-white bg-opacity-20 border border-white text-black rounded-full hover:bg-opacity-40">
              SIGN UP
            </button>
            <button className="px-6 py-2 bg-white bg-opacity-20 border border-white text-black rounded-full hover:bg-opacity-40">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
