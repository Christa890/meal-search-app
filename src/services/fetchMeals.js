export const fetchMeals = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      return data.meals || []; // Return an empty array if no meals found
    } catch (error) {
      console.error("Error fetching meals:", error);
      return [];
    }
  };
  