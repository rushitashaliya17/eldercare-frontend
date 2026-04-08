const BASE_URL = 'http://127.0.0.1:8000';

// Helper function to handle common API response logic
const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || errorData.message || 'Network response was not ok');
    }
    return response.json();
};

/**
 * USERS APIs
 */

export const createUser = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await handleResponse(response);
    } catch (error) {
        console.error("Error in createUser:", error);
        throw error;
    }
};

export const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await handleResponse(response);
    } catch (error) {
        console.error("Error in getUsers:", error);
        throw error;
    }
};

/**
 * MEDICINES APIs
 */

export const createMedicine = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/medicines/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await handleResponse(response);
    } catch (error) {
        console.error("Error in createMedicine:", error);
        throw error;
    }
};

export const getMedicines = async (user_id) => {
    try {
        const response = await fetch(`${BASE_URL}/medicines/${user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await handleResponse(response);
    } catch (error) {
        console.error("Error in getMedicines:", error);
        throw error;
    }
};

/**
 * HEALTH LOGS APIs
 */

export const createHealthLog = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/health-logs/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await handleResponse(response);
    } catch (error) {
        console.error("Error in createHealthLog:", error);
        throw error;
    }
};

export const getHealthLogs = async (user_id) => {
    try {
        const response = await fetch(`${BASE_URL}/health-logs/${user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await handleResponse(response);
    } catch (error) {
        console.error("Error in getHealthLogs:", error);
        throw error;
    }
};
