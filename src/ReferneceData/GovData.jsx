

// import { useEffect, useRef, useState } from "react";

// const GovData = () => {
//   const selectedDistrict = useRef("");
//   const [marketData, setMarketData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [districts, setAllDistrict] = useState([]);
//   const [loading, setLoading] = useState(true); // Loader state

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdc3b564546246a772a26393094f5645&offset=0&limit=all&format=json"
//         );
//         const data = await response.json();

//         const filteredMarketData = data.records.filter(
//           (item) => item.state === "Uttar Pradesh"
//         );

//         setMarketData(filteredMarketData);
//         setFilteredData(filteredMarketData); // Set initial data

//         const uniqueDistricts = [
//           ...new Set(filteredMarketData.map((item) => item.district)),
//         ];
//         setAllDistrict(uniqueDistricts);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       } finally {
//         setLoading(false); // Stop loading once data is fetched
//       }
//     }
//     fetchData();
//   }, []);

//   const handleDistrictChange = () => {
//     const district = selectedDistrict.current.value;
//     if (district) {
//       setFilteredData(
//         marketData.filter((item) => item.district.trim() === district)
//       );
//     } else {
//       setFilteredData(marketData);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-5 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Market Data</h1>

//       {loading ? (
//         <p className="text-blue-500 text-center font-semibold">Loading...</p>
//       ) : (
//         <>
//           <label
//             htmlFor="districtSelect"
//             className="block text-lg font-medium mb-2"
//           >
//             Select District:
//           </label>
//           <select
//             id="districtSelect"
//             ref={selectedDistrict}
//             onChange={handleDistrictChange}
//             className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 mb-6"
//           >
//             <option value="">All Districts</option>
//             {districts.map((district, index) => (
//               <option key={index} value={district}>
//                 {district}
//               </option>
//             ))}
//           </select>

//           <div id="results">
//             {filteredData.length > 0 ? (
//               filteredData.map((item, index) => (
//                 <div
//                   key={index}
//                   className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50"
//                 >
//                   <p className="font-semibold">
//                     <strong>Commodity:</strong> {item?.commodity}
//                   </p>
//                   <p>
//                     <strong>Variety:</strong> {item?.variety}
//                   </p>
//                   <p>
//                     <strong>Market:</strong> {item?.market}
//                   </p>
//                   <p>
//                     <strong>Grade:</strong> {item?.grade}
//                   </p>
//                   <p>
//                     <strong>Arrival Date:</strong> {item?.arrival_date}
//                   </p>
//                   <p>
//                     <strong>Price Range:</strong> {item?.min_price} -{" "}
//                     {item.max_price} (Modal Price: {item?.modal_price})
//                   </p>
//                   <p>
//                     <strong>District:</strong> {item?.district}
//                   </p>
//                   <hr />
//                 </div>
//               ))
//             ) : (
//               <p className="text-red-500">No data found.</p>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default GovData;


// import { useEffect, useRef, useState } from "react";

// const GovData = () => {
//   const selectedDistrict = useRef("");
//   const [marketData, setMarketData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [districts, setAllDistrict] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Pagination state
//   const [visibleCount, setVisibleCount] = useState(20);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdc3b564546246a772a26393094f5645&offset=0&limit=all&format=json"
//         );
//         const data = await response.json();

//         const filteredMarketData = data.records.filter(
//           (item) => item.state === "Uttar Pradesh"
//         );

//         setMarketData(filteredMarketData);
//         setFilteredData(filteredMarketData);

//         const uniqueDistricts = [
//           ...new Set(filteredMarketData.map((item) => item.district)),
//         ];
//         setAllDistrict(uniqueDistricts);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleDistrictChange = () => {
//     const district = selectedDistrict.current.value;
//     setVisibleCount(20); // reset pagination

//     if (district) {
//       setFilteredData(
//         marketData.filter((item) => item.district.trim() === district)
//       );
//     } else {
//       setFilteredData(marketData);
//     }
//   };

//   const loadMore = () => {
//     setVisibleCount((prev) => prev + 20);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-5 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Market Data</h1>

//       {loading ? (
//         <p className="text-blue-500 text-center font-semibold">Loading...</p>
//       ) : (
//         <>
//           <label
//             htmlFor="districtSelect"
//             className="block text-lg font-medium mb-2"
//           >
//             Select District:
//           </label>
//           <select
//             id="districtSelect"
//             ref={selectedDistrict}
//             onChange={handleDistrictChange}
//             className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 mb-6"
//           >
//             <option value="">All Districts</option>
//             {districts.map((district, index) => (
//               <option key={index} value={district}>
//                 {district}
//               </option>
//             ))}
//           </select>

//           <div id="results">
//             {filteredData.length > 0 ? (
//               <>
//                 {filteredData.slice(0, visibleCount).map((item, index) => (
//                   <div
//                     key={index}
//                     className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50"
//                   >
//                     <p className="font-semibold">
//                       <strong>Commodity:</strong> {item?.commodity}
//                     </p>
//                     <p>
//                       <strong>Variety:</strong> {item?.variety}
//                     </p>
//                     <p>
//                       <strong>Market:</strong> {item?.market}
//                     </p>
//                     <p>
//                       <strong>Grade:</strong> {item?.grade}
//                     </p>
//                     <p>
//                       <strong>Arrival Date:</strong> {item?.arrival_date}
//                     </p>
//                     <p>
//                       <strong>Price Range:</strong> {item?.min_price} -{" "}
//                       {item.max_price} (Modal Price: {item?.modal_price})
//                     </p>
//                     <p>
//                       <strong>District:</strong> {item?.district}
//                     </p>
//                   </div>
//                 ))}

//                 {/* Load More Button */}
//                 {visibleCount < filteredData.length && (
//                   <div className="text-center mt-4">
//                     <button
//                       onClick={loadMore}
//                       className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow"
//                     >
//                       Load More
//                     </button>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <p className="text-red-500">No data found.</p>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default GovData;


// import { useEffect, useRef, useState } from "react";

// const GovData = () => {
//   const selectedDistrict = useRef("");
//   const selectedCommodity = useRef("");

//   const [marketData, setMarketData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [districts, setAllDistricts] = useState([]);
//   const [commodities, setCommodities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [visibleCount, setVisibleCount] = useState(20);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdc3b564546246a772a26393094f5645&offset=0&limit=all&format=json"
//         );
//         const data = await response.json();

//         const upData = data.records.filter((item) => item.state === "Uttar Pradesh");
//         setMarketData(upData);
//         setFilteredData(upData);

//         const uniqueDistricts = [...new Set(upData.map((item) => item.district))];
//         setAllDistricts(uniqueDistricts);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleDistrictChange = () => {
//     const district = selectedDistrict.current.value;
//     setVisibleCount(20);

//     if (!district) {
//       setFilteredData(marketData);
//       setCommodities([]);
//       return;
//     }

//     const districtFiltered = marketData.filter(
//       (item) => item.district.trim() === district
//     );

//     setFilteredData(districtFiltered);

//     // Extract unique commodities for selected district
//     const uniqueCommodities = [...new Set(districtFiltered.map((item) => item.commodity))];
//     setCommodities(uniqueCommodities);
//   };

//   const handleCommodityChange = () => {
//     const district = selectedDistrict.current.value;
//     const commodity = selectedCommodity.current.value;
//     setVisibleCount(20);

//     let result = marketData;

//     if (district) {
//       result = result.filter((item) => item.district.trim() === district);
//     }

//     if (commodity) {
//       result = result.filter((item) => item.commodity.trim() === commodity);
//     }

//     setFilteredData(result);
//   };

//   const loadMore = () => setVisibleCount((prev) => prev + 20);

//   return (
//     <div className="max-w-5xl mx-auto p-6 mt-5 bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
//         🏷️ Daily Mandi Prices - Uttar Pradesh
//       </h1>

//       {loading ? (
//         <p className="text-blue-500 text-center font-semibold">Loading data...</p>
//       ) : (
//         <>
//           {/* Filters */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//             {/* District Dropdown */}
//             <div>
//               <label className="block font-medium mb-1">Select District:</label>
//               <select
//                 ref={selectedDistrict}
//                 onChange={handleDistrictChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="">All Districts</option>
//                 {districts.map((district, idx) => (
//                   <option key={idx} value={district}>
//                     {district}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Commodity Dropdown */}
//             <div>
//               <label className="block font-medium mb-1">Select Commodity:</label>
//               <select
//                 ref={selectedCommodity}
//                 onChange={handleCommodityChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="">All Commodities</option>
//                 {commodities.map((c, idx) => (
//                   <option key={idx} value={c}>
//                     {c}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Results */}
//           <div id="results">
//             {filteredData.length > 0 ? (
//               <>
//                 {filteredData.slice(0, visibleCount).map((item, index) => (
//                   <div
//                     key={index}
//                     className="mb-4 p-4 border rounded-lg shadow-sm bg-green-50"
//                   >
//                     <div className="grid md:grid-cols-2 gap-2">
//                       <p><strong>🛒 Commodity:</strong> {item.commodity}</p>
//                       <p><strong>📍 District:</strong> {item.district}</p>
//                       <p><strong>🏢 Market:</strong> {item.market}</p>
//                       <p><strong>🔍 Variety:</strong> {item.variety}</p>
//                       <p><strong>🎯 Grade:</strong> {item.grade}</p>
//                       <p><strong>📆 Arrival Date:</strong> {item.arrival_date}</p>
//                       <p><strong>💰 Min Price:</strong> ₹{item.min_price}</p>
//                       <p><strong>💰 Max Price:</strong> ₹{item.max_price}</p>
//                       <p><strong>💰 Modal Price:</strong> ₹{item.modal_price}</p>
//                     </div>
//                   </div>
//                 ))}

//                 {visibleCount < filteredData.length && (
//                   <div className="text-center mt-4">
//                     <button
//                       onClick={loadMore}
//                       className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow"
//                     >
//                       Load More
//                     </button>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <p className="text-red-500 text-center">No matching records found.</p>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default GovData;

import { useEffect, useRef, useState } from "react";

const GovData = () => {
  const selectedDistrict = useRef("");
  const selectedCommodity = useRef("");

  const [marketData, setMarketData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [districts, setAllDistricts] = useState([]);
  const [commodities, setCommodities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(20);
  const [language, setLanguage] = useState("en"); // State for language (en by default)

  const staticText = {
    en: {
      title: "🏷️ Daily Mandi Prices - Uttar Pradesh",
      districtLabel: "Select District:",
      commodityLabel: "Select Commodity:",
      loadMore: "Load More",
      noRecords: "No matching records found.",
      commodity: "🛒 Commodity",
      district: "📍 District",
      market: "🏢 Market",
      variety: "🔍 Variety",
      grade: "🎯 Grade",
      arrivalDate: "📆 Arrival Date",
      minPrice: "💰 Min Price",
      maxPrice: "💰 Max Price",
      modalPrice: "💰 Modal Price",
      loading: "Loading data...",
      switchLang: "Switch to Hindi",
    },
    hi: {
      title: "🏷️ दैनिक मंडी मूल्य - उत्तर प्रदेश",
      districtLabel: "जिले का चयन करें:",
      commodityLabel: "सामग्री का चयन करें:",
      loadMore: "और लोड करें",
      noRecords: "कोई मेल खाते रिकॉर्ड नहीं मिले।",
      commodity: "🛒 सामग्री",
      district: "📍 जिला",
      market: "🏢 बाजार",
      variety: "🔍 किस्म",
      grade: "🎯 ग्रेड",
      arrivalDate: "📆 आगमन तिथि",
      minPrice: "💰 न्यूनतम मूल्य",
      maxPrice: "💰 अधिकतम मूल्य",
      modalPrice: "💰 मौडल मूल्य",
      loading: "डेटा लोड हो रहा है...",
      switchLang: "Switch to English",
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdc3b564546246a772a26393094f5645&offset=0&limit=all&format=json"
        );
        const data = await response.json();
        console.log(data);

        const upData = data.records.filter((item) => item.state === "Uttar Pradesh");
        setMarketData(upData);
        setFilteredData(upData);

        const uniqueDistricts = [...new Set(upData.map((item) => item.district))];
        setAllDistricts(uniqueDistricts);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleDistrictChange = () => {
    const district = selectedDistrict.current.value;
    setVisibleCount(20);

    if (!district) {
      setFilteredData(marketData);
      setCommodities([]);
      return;
    }

    const districtFiltered = marketData.filter(
      (item) => item.district.trim() === district
    );

    setFilteredData(districtFiltered);

    // Extract unique commodities for selected district
    const uniqueCommodities = [...new Set(districtFiltered.map((item) => item.commodity))];
    setCommodities(uniqueCommodities);
  };

  const handleCommodityChange = () => {
    const district = selectedDistrict.current.value;
    const commodity = selectedCommodity.current.value;
    setVisibleCount(20);

    let result = marketData;

    if (district) {
      result = result.filter((item) => item.district.trim() === district);
    }

    if (commodity) {
      result = result.filter((item) => item.commodity.trim() === commodity);
    }

    setFilteredData(result);
  };

  const loadMore = () => setVisibleCount((prev) => prev + 20);

  return (
    <div className="max-w-5xl mx-auto p-6 mt-5 bg-white rounded-lg shadow-md">
      {/* Language Switch Buttons at the top */}
      <div className="text-center mb-6">
        <button
          onClick={() => setLanguage("en")}
          className="bg-blue-600 text-white px-6 py-2 rounded shadow mx-2"
        >
          English
        </button>
        <button
          onClick={() => setLanguage("hi")}
          className="bg-blue-600 text-white px-6 py-2 rounded shadow mx-2"
        >
          हिंदी
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
        {staticText[language].title}
      </h1>

      {loading ? (
        <p className="text-blue-500 text-center font-semibold">{staticText[language].loading}</p>
      ) : (
        <>
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* District Dropdown */}
            <div>
              <label className="block font-medium mb-1">{staticText[language].districtLabel}</label>
              <select
                ref={selectedDistrict}
                onChange={handleDistrictChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">{staticText[language].districtLabel}</option>
                {districts.map((district, idx) => (
                  <option key={idx} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            {/* Commodity Dropdown */}
            <div>
              <label className="block font-medium mb-1">{staticText[language].commodityLabel}</label>
              <select
                ref={selectedCommodity}
                onChange={handleCommodityChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">{staticText[language].commodityLabel}</option>
                {commodities.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <div id="results">
            {filteredData.length > 0 ? (
              <>
                {filteredData.slice(0, visibleCount).map((item, index) => (
                  <div
                    key={index}
                    className="mb-4 p-4 border rounded-lg shadow-sm bg-green-50"
                  >
                    <div className="grid md:grid-cols-2 gap-2">
                      <p>
                        <strong>{staticText[language].commodity}:</strong> {item.commodity}
                      </p>
                      <p>
                        <strong>{staticText[language].district}:</strong> {item.district}
                      </p>
                      <p>
                        <strong>{staticText[language].market}:</strong> {item.market}
                      </p>
                      <p>
                        <strong>{staticText[language].variety}:</strong> {item.variety}
                      </p>
                      <p>
                        <strong>{staticText[language].grade}:</strong> {item.grade}
                      </p>
                      <p>
                        <strong>{staticText[language].arrivalDate}:</strong> {item.arrival_date}
                      </p>
                      <p>
                        <strong>{staticText[language].minPrice}:</strong> ₹{item.min_price} Quintal
                      </p>
                      <p>
                        <strong>{staticText[language].maxPrice}:</strong> ₹{item.max_price} Quintal
                      </p>
                      <p>
                        <strong>{staticText[language].modalPrice}:</strong> ₹{item.modal_price} Quintal
                      </p>
                    </div>
                  </div>
                ))}

                {visibleCount < filteredData.length && (
                  <div className="text-center mt-4">
                    <button
                      onClick={loadMore}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow"
                    >
                      {staticText[language].loadMore}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p className="text-red-500 text-center">{staticText[language].noRecords}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GovData;
