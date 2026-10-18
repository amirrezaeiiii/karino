import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const quickLinks = ["پروژه ها", "فریلنسرها", "تعرفه ها", "وبلاگ", "قوانین"];
const supportLinks = [
  "مرکز راهنما",
  "تماس با ما",
  "حل اختلاف",
  "امنیت پرداخت",
  "سوالات متداول",
];

function Footer() {
  return (
    <footer className="bg-black/85 border-t border-secondary-200 mt-auto">
      <div className="container xl:max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary-700">کارینو</h3>
            <p className="text-secondary-400 text-sm">بزرگترین بازار فریلنسری ایران، اتصال کسب و کارها به متخصصان در کمتر از ۲۴ ساعت</p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-600 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-600 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-600 transition-colors"
              >
                <FaTelegram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-secondary-400">
              دسترسی سریع
            </h3>
            {quickLinks.map((link) => (
              <Link
                key={link}
                to="#"
                className="text-secondary-400 text-sm block hover:text-primary-600 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-secondary-400">پشتیبانی</h3>
            {supportLinks.map((link) => (
              <Link
                key={link}
                to="#"
                className="text-secondary-400 text-sm block hover:text-primary-600 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src="/ENAMADpng.parspng.com_.png"
              alt="enamad"
              className="max-w-full h-auto w-32"
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-200">
          <p className="text-secondary-400 text-sm text-center">
            تمام حقوق برای کارینو محفوظ است
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
