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
          <img src="../../public/OBJECTS.svg" alt="objects" className="max-w-full h-auto" />
        </div>
      </section>
    </div>
  );
}

export default Home;
