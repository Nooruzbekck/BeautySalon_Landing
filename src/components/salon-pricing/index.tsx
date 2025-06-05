import React from "react";

const BeautySalonPricing = () => {
  const services = [
    {
      category: "Наращивание ресниц",
      color: "text-pink-500",
      items: [
        { name: "1D", price: "1900 ₽" },
        { name: "1,5D", price: "2100 ₽" },
        { name: "2D", price: "2400 ₽" },
        { name: "2,5D", price: "2600 ₽" },
        { name: "3D", price: "2800 ₽" },
        { name: "3,5D", price: "3100 ₽" },
        { name: "4D", price: "3400 ₽" },
        { name: "5D", price: "3600 ₽" },
        { name: "mega", price: "от 3700 ₽" },
      ],
    },
    {
      category: "Неполное заполнение",
      color: "text-pink-500",
      items: [{ name: "0,5D", price: "1500 ₽" }],
    },
    {
      category: "Дополнительные услуги",
      color: "text-pink-500",
      items: [
        { name: "Уголки", price: "1300 ₽" },
        { name: "Экспресс наращивание", price: "1800 ₽" },
        { name: "Коррекция", price: "1600 ₽" },
        { name: "Снятие", price: "300 ₽" },
        { name: "Отделки коррективного", price: "300 ₽" },
        { name: "Цветные ресницы", price: "300 ₽" },
        { name: "Изгибы M / L", price: "300 ₽" },
        { name: "Закрепление", price: "300 ₽" },
      ],
    },
    {
      category: "Креативные эффекты",
      color: "text-pink-500",
      items: [
        { name: "Американка", price: "3000 ₽" },
        { name: "Аниме", price: "3000 ₽" },
        { name: "Фокс Кайли", price: "4000 ₽" },
        { name: "Эффект мокрых", price: "3000 ₽" },
        { name: "Аниме классик", price: "2000 ₽" },
        { name: "Эффект Леди Рейчел", price: "2000 ₽" },
      ],
    },
    {
      category: "Дополнительные услуги",
      color: "text-pink-500",
      items: [
        { name: "Эффект Пушком", price: "300 ₽" },
        { name: "Эффект Кайли", price: "300 ₽" },
        { name: "Эффект Раздвоенных Ресниц", price: "300 ₽" },
        { name: "Морской Эффект", price: "0 ₽" },
        { name: "Полумесяц Эффект", price: "0 ₽" },
      ],
    },
    {
      category: "Услуги бровиста",
      color: "text-pink-500",
      items: [
        { name: "Коррекция воск / пинцет", price: "" },
        { name: "Удаление лишних волосков", price: "" },
        { name: "Прорисовывание", price: "" },
        { name: "Уход за бровями", price: "" },
        { name: "Осветление", price: "" },
        { name: "Коррекция пудры осветления волосков", price: "" },
        { name: "Окрашивание краса", price: "" },
        { name: "Окрашивание хна", price: "" },
        { name: "Ламинирование бровей", price: "" },
      ],
    },
    {
      category: "Комплекси",
      color: "text-pink-500",
      items: [
        {
          name: "Архитектура бровей (окрашивание + коррекция)",
          price: "2500 ₽",
        },
        {
          name: "Ламинирование бровей (ламинирование коррекция окрашивание)",
          price: "3000 ₽",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-b from-amber-200 to-amber-300 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 py-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">
              Услуги и цены
            </h1>

            <div className="space-y-8">
              {services.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-3">
                  <h2 className={`text-lg font-semibold ${section.color} mb-4`}>
                    {section.category}
                  </h2>

                  <div className="space-y-2">
                    {section.items.map((service, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-center py-1"
                      >
                        <span className="text-gray-700 text-sm">
                          {service.name}
                        </span>
                        <span className="text-gray-800 font-medium text-sm">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-4">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Записи через WhatsApp</span>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-pink-500 text-sm">📱</span>
                </div>
              </button>

              <button className="w-full bg-white hover:bg-gray-50 text-pink-500 font-semibold py-4 px-6 rounded-full border-2 border-pink-500 transition-colors duration-200">
                Записи онлайн
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautySalonPricing;
