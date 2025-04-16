function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function fetchData() {
    try {
      console.log("Fetching data...");
      await delay(2000);  
      const data = { id: 1, name: "Student 1" };
      console.log("Data fetched successfully!");
      return data;  
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;  
    }
  }
  
  async function processData() {
    console.log("Starting process...");
    try {
      const result = await fetchData();
      console.log("Processing data:", result);
    } catch (err) {
      console.error("Failed to process data:", err);
    }
    console.log("Process complete.");
  }
  
  processData(); 