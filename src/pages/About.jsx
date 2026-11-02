import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";

function About() {
  const navigate = useNavigate();
  const { user } = useUser();

  const hasDashboardAccess =
    user && ["OWNER", "FREELANCER", "ADMIN"].includes(user.role);

  const getDashboardPath = () => {
    if (!user) return "/auth";
    if (user.role === "OWNER") return "/owner";
    if (user.role === "FREELANCER") return "/freelancer";
    if (user.role === "ADMIN") return "/admin";
    return "/auth";
  };

  const handleRoleLink = () => {
    if (!user) {
      navigate("/auth");
    } else if (!hasDashboardAccess) {
      navigate("/");
    } else {
      navigate(getDashboardPath());
    }
  };
  return (
    <div className="container xl:max-w-7xl mx-auto py-8 text-secondary-900 px-4">
      <div className="max-w-3xl mx-auto text-right space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-600">
            سلام، خوش اومدی 👋
          </h1>
          <p className="text-lg text-secondary-600 leading-relaxed">
            اینجا خونه‌ی آدم‌هاییه که با مهارتشون کار می‌کنن — چه اونایی که
            دنبال یه فرصت خوب می‌گردن، چه کسب‌وکارهایی که دنبال یه آدم درست برای
            پروژه‌شون هستن. ما پلی هستیم بین این دو تا، تا هر دو طرف با خیال
            راحت به هم برسن.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
            چرا ما راه افتادیم؟
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            راستش رو بخوای، فریلنسری توی ایران همیشه یه دردسرهایی داشته:
            پروژه‌هایی که وسط کار نصفه رها می‌شن، پرداخت‌هایی که هیچ‌وقت انجام
            نمی‌شن، کارفرمایی که نمی‌دونه مهارت یه نفر واقعاً چقدره، و فریلنسری
            که بعد از تحویل کار باید دنبال پولش بدوه. ما این‌ها رو خودمون دیده
            بودیم و خسته شده بودیم. برای همین یه بستر ساختیم که این دغدغه‌ها رو
            تا جای ممکن کم کنه — نه با شعار، با سازوکار واقعی.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
            مأموریت ما
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            کار ما ساده‌ست: ایجاد فضایی امن، شفاف و منصفانه که هر کسی با مهارتش
            بتونه کار پیدا کنه و هر کسب‌وکاری بتونه آدم درستش رو پیدا کنه — بدون
            واسطه‌های اضافی و بدون سردرگمی.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
            اینجا برای کی ساخته شده؟
          </h2>
          <div className="mt-8">
            <p className="text-lg font-bold text-secondary-600 leading-relaxed">
              اگه فریلنسری:
            </p>
            <ul className="list-disc list-inside pr-4 text-lg text-secondary-600 leading-relaxed space-y-5 mt-3">
              <li>
                پروژه‌های واقعی و متنوع توی همه حوزه‌ها — از طراحی و
                برنامه‌نویسی و تولید محتوا تا ترجمه، مشاوره، موشن، صداگذاری و هر
                مهارت دیگه‌ای که فکرش رو بکنی.
              </li>
              <li>
                پروفایل حرفه‌ای با نمونه‌کار و امتیاز، تا کارفرما سریع بفهمه تو
                کی هستی و چی بلدی.
              </li>
              <li>
                پرداخت امن؛ پول پروژه قبل از شروع کار پیش ما نگه داشته می‌شه و
                بعد از تحویل و تأیید، به حسابت می‌رسه.
              </li>
              <li>
                کمیسیون منصفانه و شفاف؛ دقیقاً می‌دونی چقدر پرداخت می‌کنی و بابت
                چی.
              </li>
              <li>پشتیبانی انسانی که جوابت رو می‌ده، نه ربات.</li>
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-lg font-bold text-secondary-600 leading-relaxed">
              اگه کارفرمایی:
            </p>
            <ul className="list-disc list-inside pr-4 text-lg text-secondary-600 leading-relaxed space-y-5 mt-3">
              <li>
                دسترسی به فریلنسرهای تأییدشده با نمونه‌کار واقعی و سابقه روشن.
              </li>
              <li>
                امکان مقایسه پیشنهادها و انتخاب بهترین گزینه، بدون اینکه ساعت‌ها
                وقتت تلف بشه.
              </li>
              <li>قرارداد شفاف و امکان داوری منصفانه در صورت بروز اختلاف.</li>
              <li>پرداخت مرحله‌ای (escrow) تا پولت تا تحویل کار آزاد نشه.</li>
              <li>یه تیم پشتیبانی که وسط پروژه تنهات نمی‌ذاره.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
            چطور کار می‌کنه؟
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed mb-5">
            خیلی ساده‌ست، توی پنج قدم:
          </p>
          <ul className="list-none pr-4 text-lg text-secondary-600 leading-relaxed space-y-5 mt-3">
            <li>۱. ثبت‌نام — چند دقیقه وقت می‌بره.</li>
            <li>
              ۲. تکمیل پروفایل — مهارت‌ها، نمونه‌کار و اطلاعاتت رو وارد کن
              (فریلنسر) یا پروژه‌ت رو با جزئیات ثبت کن (کارفرما).
            </li>
            <li>
              ۳. اتصال — فریلنسرها پروژه‌ها رو می‌بینن و پیشنهاد می‌دن؛
              کارفرماها پیشنهادها رو بررسی و بهترین رو انتخاب می‌کنن.
            </li>
            <li>
              ۴. انجام کار — با قرارداد شفاف و چت داخلی، همه‌چیز مستند و قابل
              پیگیریه.
            </li>
            <li>
              ۵. تسویه — بعد از تأیید تحویل، پرداخت آزاد می‌شه. اگه اختلافی بود،
              تیم داوری ما وارد می‌شه.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
            به چی باور داریم؟
          </h2>
          <ul className="list-disc list-inside pr-4 text-lg text-secondary-600 leading-relaxed space-y-5 mt-3">
            <li>
              شفافیت: کمیسیون، قوانین و فرایند داوری رو کامل و بدون بندهای پنهون
              می‌نویسیم. اگه چیزی رو نمی‌فهمی، بپرس — جواب می‌دیم.
            </li>
            <li>
              انصاف: هم فریلنسر حق داره، هم کارفرما. هیچ‌کدوم طرف قرار نیست
              قربانی بشه.
            </li>
            <li>
              احترام به وقت و مهارت: کار فریلنسری کار واقعیه. برای همین پرداخت
              امن و قرارداد رو جدی می‌گیریم.
            </li>
            <li>
              حریم خصوصی: اطلاعات و مکالماتت پیش ما محفوظه و بدون اجازه‌ت جایی
              نمی‌ره.
            </li>
            <li>
              صداقت: اگه جایی محدودیت داریم، همون‌جا می‌گیم. ادعای بی‌پشتوانه
              نمی‌کنیم.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
            تیم ما
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            ما یه تیم کوچیک و پرانرژی هستیم که خودمون یه روزی فریلنسر بودیم یا
            با فریلنسرها کار کردیم. برای همین دردِ کار رو می‌فهمیم. تیم پشتیبانی
            ما هر روز پاسخگوست و تلاش می‌کنیم هر مشکل رو در سریع‌ترین زمان حل
            کنیم. اگه پیشنهاد، انتقاد یا حتی یه سلام و احوال‌پرسی داری، خوشحال
            می‌شیم بشنویم — اینجا نظرت واقعاً مهمه.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
            یه نکته صادقانه
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            ما هنوز در حال رشدیم و هر روز داریم بهتر می‌شیم. ممکنه همه‌چیز از
            روز اول بی‌نقص نباشه، اما قول می‌دیم که شفاف باشیم، پای حرفمون
            بمونیم و به بازخوردت گوش بدیم. اگه جایی دیدی که می‌تونه بهتر بشه،
            بهمون بگو — بهترین ایده‌ها از همین‌جا اومده.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
            بیا شروع کنیم 🚀
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            فرقی نمی‌کنه دنبال کار باشی یا دنبال متخصص برای کارت — همین حالا
            پروفایلت رو بساز و اولین قدم رو بردار. ما اینجاییم که کنارت باشیم.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRoleLink}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-center sm:text-left"
            >
              ورود به عنوان فریلنسر
            </button>
            <button
              onClick={handleRoleLink}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-center sm:text-left"
            >
              ورود به عنوان کارفرما
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
