import { MOCK_FIXTURES } from './mockData';

const API_BASE_URL = 'https://v3.football.api-sports.io';

export const getApiKey = () => localStorage.getItem('pl_predictor_api_key');
export const setApiKey = (key) => localStorage.setItem('pl_predictor_api_key', key);
export const removeApiKey = () => localStorage.removeItem('pl_predictor_api_key');

/**
 * Fetch fixtures with predictions.
 * Combines logic: gets next fixtures, then enables mock or real fetch.
 * NOTE: Real API needs multiple calls to get predictions/lineups usually.
 * For MVP, we'll simplify: if Mock, return rich object.
 * If Real, we'll fetch fixtures and (todo) predictions separately.
 */
export async function fetchFixtures() {
    const apiKey = getApiKey();

    // If no API key, return Mock Data immediately
    if (!apiKey) {
        console.log('Using Mock Data (No API Key found)');
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_FIXTURES), 800); // Simulate network delay
        });
    }

    // Real API Fetch Implementation
    try {
        const response = await fetch(`${API_BASE_URL}/fixtures?league=39&season=2025&next=5`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.errors && Object.keys(data.errors).length > 0) {
            console.warn("API returned errors:", data.errors);
            throw new Error("API Subscription Error or Limit Reached");
        }

        // Note: Real API response for /fixtures doesn't include predictions/lineups by default.
        // Use MOCK for now for detailed views unless we implement chained calls.
        // We will just return the raw fixtures but mapped to our structure if possible.
        // For this demo, let's mix: return API fixtures but fallback to mock for details?
        // Let's stick to returning mapped fixtures.

        return data.response;

    } catch (error) {
        console.error("Fetch failed, falling back to mock:", error);
        return MOCK_FIXTURES;
    }
}
