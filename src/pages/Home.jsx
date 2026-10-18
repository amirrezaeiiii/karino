import {
  HiOutlineChartPie,
  HiOutlineCode,
  HiOutlinePencil,
  HiCursorClick,
  HiOutlinePlay,
  HiOutlineTranslate,
  HiOutlineChat,
  HiOutlineShieldCheck,
  HiOutlineDownload,
  HiOutlineUserCircle,
  HiOutlineClock,
  HiOutlineDocument,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

const categories = [
  { title: "برنامه نویسی", Icon: HiOutlineCode },
  { title: "طراحی گرافیک", Icon: HiCursorClick },
  { title: "تولید محتوا", Icon: HiOutlinePencil },
  { title: "ترجمه", Icon: HiOutlineTranslate },
  { title: "دیجیتال مارکتینگ", Icon: HiOutlineChartPie },
  { title: "ویدیو و موشن", Icon: HiOutlinePlay },
];

const trustedCompanies = [
  "دیجیکالا",
  "اسنپ",
  "کافه بازار",
  "فیلیمو",
  "آپارات",
  "تپسی",
];

function Home() {
  const stats = [
    { number: "+۱۰ هزار", label: "فریلنسر فعال" },
    { number: "+۵ هزار", label: "پروژه موفق" },
    { number: "۹۸%", label: "رضایت کارفرما" },
  ];

  return (
    <div className="container xl:max-w-7xl mx-auto text-secondary-900 py-8">
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16">
        <div className="flex-1 text-right space-y-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-600">
            پل ارتباطی کارفرما و فریلنسر
          </h1>
          <p className="text-lg text-secondary-600 leading-relaxed">
            پروژه ات را ثبت کن، پیشنهاد بگیر و با پرداخت امن کارینو خیالت از
            کیفیت راحت باشد.
          </p>
          <section className="flex flex-col md:flex-row gap-6 md:gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex-1">
                <span className="block text-2xl md:text-3xl font-bold text-primary-600">
                  {stat.number}
                </span>
                <span className="block text-sm text-secondary-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </section>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/objects.svg" alt="objects" className="max-w-full h-auto" />
        </div>
      </section>

      <section className="bg-secondary-100 border border-secondary-200 rounded-xl py-4 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-md md:text-lg text-secondary-500 text-right">
            اعتماد بیش از ۲،۰۰۰ کسب و کار ایرانی
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            {trustedCompanies.map((company) => (
              <span
                key={company}
                className="text-secondary-500 font-medium whitespace-nowrap"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 text-right mb-10">
          هر مهارتی که لازم داری، اینجاست
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-secondary-100 border border-secondary-200 rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-center hover:border-primary-500 transition-colors"
            >
              <cat.Icon className="w-8 h-8 text-primary-600" />
              <span className="font-medium text-secondary-900 text-sm md:text-base">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 text-center mb-4">
          در ۴ قدم به نتیجه برس
        </h2>
        <p className="text-center text-secondary-600 text-lg mb-12">
          هم برای کارفرما، هم برای فریلنسر - شفاف، سریع و بدون دردسر
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-secondary-100 border border-secondary-200 rounded-xl p-6 flex flex-col items-start justify-start gap-3"
            >
              <step.Icon className="w-8 h-8 text-primary-600" />
              <div className="space-y-2">
                <span className="block text-primary-900 font-bold text-sm">
                  {step.number}
                </span>
                <span className="text-secondary-800 font-bold block text-sm md:text-base">
                  {step.title}
                </span>
                  <span className="text-secondary-500 block text-sm">
                  {step.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 py-16 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 text-center mb-10">
          با خیال راحت برون سپاری کن
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-secondary-100 border border-secondary-200 rounded-xl p-6 flex flex-col items-start gap-3 h-full"
            >
              <feature.Icon className="w-8 h-8 text-primary-600" />
              <span className="block font-bold text-secondary-900 text-sm md:text-base">
                {feature.title}
              </span>
              <span className="block text-secondary-500 text-sm">
                {feature.description}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

const steps = [
  {
   number: "قدم اول",
    title: "پروژه ات را ثبت کن",
    description:"در ۳ دقیقه نیازت را بنویس، بودجه و زمان تحویل را مشخص کن",
    Icon: HiOutlinePencil,
  },
  {
   number: "قدم دوم",
    title: "پیشنهاد بگیر و مقایسه کن",
    description:"از ده ها فریلنسر متخصص پیشنهاد و نمونه کار دریافت کن",
    Icon: HiOutlineChat,
  },
  {
   number: "قدم سوم",
    title: "با پرداخت امن شروع کن",
    description:"مبلغ نزد کارینو میماند تا پروژه تایید شود",
    Icon: HiOutlineShieldCheck,
  },
  {
    number: "قدم چهارم",
    title: "تحویل بگیر و امتیاز بده",
    description:"فایل نهایی را بگیر و به فریلنسر امتیاز بده",
    Icon: HiOutlineDownload,
  },
];

const features = [
  {
    title: "پرداخت امن",
    description: "پول تا تایید نهایی نزد ماست، صفر درصد ریسک کلاهبرداری",
    Icon: HiOutlineShieldCheck,
  },
  {
    title: "پشتیبانی ۲۴/۷",
    description: "تیم کارینو همیشه پاسخگوست، حتی جمعه ها",
    Icon: HiOutlineChat,
  },
  {
    title: "فریلنسر تایید شده",
    description: "احراز هویت و بررسی نمونه کار قبل از ورود",
    Icon: HiOutlineUserCircle,
  },
  {
    title: "تحویل سریع",
    description: "میانگین پیدا کردن فریلنسر فقط ۶ ساعت است",
    Icon: HiOutlineClock,
  },
  {
    title: "قرارداد رسمی",
    description: "برای پروژه های بزرگ قرارداد و فاکتور رسمی",
    Icon: HiOutlineDocument,
  },
  {
    title: "کارمزد شفاف",
    description: "بدون هزینه پنهان، فقط ۱۰% کارمزد موفقیت",
    Icon: HiOutlineCurrencyDollar,
  },
];
