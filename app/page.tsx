export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center">
        <div className="text-yellow-500 text-sm mb-4">QR LIBYA</div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          ملف أعمالك الذكي
          <span className="block text-yellow-500 mt-2">في رابط واحد</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-9 mb-8">
          أنشئ صفحتك الاحترافية، أضف واتساب وروابطك ومنتجاتك،
          واحصل على رمز QR خاص بك بسهولة.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-2xl">
            أنشئ صفحتك الآن
          </button>

          <button className="border border-gray-600 px-8 py-4 rounded-2xl">
            تسجيل الدخول
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
          <div className="border border-gray-800 rounded-2xl p-5">QR مخصص</div>
          <div className="border border-gray-800 rounded-2xl p-5">روابط ومنتجات</div>
          <div className="border border-gray-800 rounded-2xl p-5">واجهة عربية</div>
        </div>
      </div>
    </main>
  );
}
