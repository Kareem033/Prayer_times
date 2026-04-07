import axios from "axios";
import Timings_prayer from "./timings_prayer";
import { useEffect, useState } from "react";

const Cities = [
  { ar: "القاهرة", en: "Cairo" },
  { ar: "الجيزة", en: "Giza" },
  { ar: "الإسكندرية", en: "Alexandria" },
  { ar: "القليوبية", en: "Qalyubia" },
  { ar: "الشرقية", en: "Sharqia" },
  { ar: "الدقهلية", en: "Dakahlia" },
  { ar: "البحيرة", en: "Beheira" },
  { ar: "الغربية", en: "Gharbia" },
  { ar: "كفر الشيخ", en: "Kafr_El_Sheikh" },
  { ar: "المنوفية", en: "Monufia" },
  { ar: "دمياط", en: "Damietta" },
  { ar: "بورسعيد", en: "Port_Said" },
  { ar: "الإسماعيلية", en: "Ismailia" },
  { ar: "السويس", en: "Suez" },
  { ar: "شمال سيناء", en: "North_Sinai" },
  { ar: "جنوب سيناء", en: "South_Sinai" },
  { ar: "بني سويف", en: "Beni_Suef" },
  { ar: "الفيوم", en: "Faiyum" },
  { ar: "المنيا", en: "Minya" },
  { ar: "أسيوط", en: "Asyut" },
  { ar: "سوهاج", en: "Sohag" },
  { ar: "قنا", en: "Qena" },
  { ar: "الأقصر", en: "Luxor" },
  { ar: "أسوان", en: "Aswan" },
  { ar: "البحر الأحمر", en: "Red_Sea" },
  { ar: "الوادي الجديد", en: "New_Valley" },
  { ar: "مطروح", en: "Matrouh" },
];

function Prayer() {
  const [prayerTimes, SetprayerTimes] = useState({});
  const [DataTime, SetDataTime] = useState();
  const [City, SetCity] = useState("Cairo");

  useEffect(() => {
    axios
      .get(`https://api.aladhan.com/v1/timingsByCity?country=EG&city=${City}`)
      .then((res) => {
        SetprayerTimes(res.data.data.timings);
        SetDataTime(res.data.data.date.gregorian.date);
      });
  }, [City]);

  const fromatTimes = (time) => {
    if (!time) {
      return "00:00";
    }
    let [hours, minutes] = time.split(":").map(Number);
    const perd = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${perd}`;
  };

  return (
    <section
      className="relative  border-[#d7d7d74e] border-2  z-10 bg-[#332a224e] 
    lg:w-[650px] w-full h-full lg:h-auto overflow-hidden px-7 py-6 backdrop-blur-[10px] lg:mr-[15%] "
    >
      {/* Top  */}
      <div className="gap-18 lg:gap-0 flex justify-between pb-5 border-b-[#d7d7d74e] border-b-2 ">
        {/* City */}
        <div>
          <h3 className="mb-3 text-white font-bold text-2xl">المدينة</h3>
          <select
            onChange={(e) => {
              SetCity(e.target.value);
            }}
            className="lg:w-[250px]  rounded-2xl px-2  py-1  bg-[#a54f3a] outline-0 text-white "
          >
            {Cities.map((city) => (
              <option value={city.en} key={city.en}>
                {city.ar}
              </option>
            ))}
          </select>
        </div>
        {/* date */}
        <div>
          <h3 className="mb-3 text-white font-bold text-2xl">التاريخ</h3>
          <p className="w-[250px] font-bold text-xl text-white">{DataTime}</p>
        </div>
      </div>
      {/* down */}
      <div>
        <Timings_prayer name="الفجر" time={fromatTimes(prayerTimes.Fajr)} />
        <Timings_prayer name="الظهر" time={fromatTimes(prayerTimes.Dhuhr)} />
        <Timings_prayer name="العصر" time={fromatTimes(prayerTimes.Asr)} />
        <Timings_prayer name="المغرب" time={fromatTimes(prayerTimes.Maghrib)} />
        <Timings_prayer name="العشاء" time={fromatTimes(prayerTimes.Isha)} />
      </div>
    </section>
  );
}

export default Prayer;
