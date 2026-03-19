export const getCurrencyByDate = async (date) => {
  try {
    const response = await fetch(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`
    );
    return await response.json();
  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
};