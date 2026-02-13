// src/services/api.js
export const checkSymptoms = async (data) => {
  // Fake delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    disease: "Viral Infection",
    risk: 65,
    advice: "Stay hydrated and consult doctor if fever persists."
  };
};

// Add more fake APIs as needed