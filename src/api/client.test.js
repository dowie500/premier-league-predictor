import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchFixtures, getApiKey, setApiKey, removeApiKey } from './client';
import { MOCK_FIXTURES } from './mockData';

// Mock localStorage
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => { store[key] = value.toString(); },
        removeItem: (key) => { delete store[key]; },
        clear: () => { store = {}; }
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
});

// Mock fetch
global.fetch = vi.fn();

describe('API Client', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    describe('localStorage Helpers', () => {
        it('should set, get and remove API key', () => {
            expect(getApiKey()).toBeNull();

            setApiKey('test-key');
            expect(getApiKey()).toBe('test-key');

            removeApiKey();
            expect(getApiKey()).toBeNull();
        });
    });

    describe('fetchFixtures', () => {

        // Sunny Day: No API Key -> Returns Mock Data
        it('should return mock data when no API key is present', async () => {
            const data = await fetchFixtures();

            expect(data).toHaveLength(MOCK_FIXTURES.length);
            expect(data[0].teams.home.name).toBe('Liverpool'); // Verify content
            expect(fetch).not.toHaveBeenCalled();
        });

        // Sunny Day: API Key Present -> Fetches from API -> Returns Data
        it('should fetch from API when API key is present', async () => {
            setApiKey('real-api-key');

            const mockApiResponse = {
                response: [{ fixture: { id: 123 }, teams: { home: { name: 'Real Team' } } }]
            };

            fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockApiResponse
            });

            const data = await fetchFixtures();

            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(
                expect.stringContaining('/fixtures'),
                expect.objectContaining({
                    headers: expect.objectContaining({
                        "x-rapidapi-key": "real-api-key"
                    })
                })
            );
            expect(data).toEqual(mockApiResponse.response);
        });

        // Rainy Day: API Return Error -> Fallback to Mock
        it('should fallback to mock data if API call fails', async () => {
            setApiKey('real-api-key');

            // Simulate fetch failure
            fetch.mockRejectedValueOnce(new Error('Network Error'));

            const data = await fetchFixtures();

            expect(fetch).toHaveBeenCalledTimes(1);
            expect(data).toEqual(MOCK_FIXTURES); // Should fallback
        });

        // Rainy Day: API Return 403/Forbidden -> Fallback to Mock
        it('should fallback to mock data if API returns non-ok status', async () => {
            setApiKey('real-api-key');

            fetch.mockResolvedValueOnce({
                ok: false,
                statusText: 'Forbidden'
            });

            const data = await fetchFixtures();
            expect(data).toEqual(MOCK_FIXTURES);
        });

        // Rainy Day: API Returns Logic Error (e.g. limit reached)
        it('should fallback to mock data if API returns internal errors', async () => {
            setApiKey('real-api-key');

            fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ errors: { token: "Error" }, response: [] })
            });

            const data = await fetchFixtures();
            expect(data).toEqual(MOCK_FIXTURES);
        });
    });
});
