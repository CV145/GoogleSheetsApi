const API_BASE_URL = 'https://localhost:7228//api'; // Adjust the base URL as needed

// Fetch inventory items
export const getInventoryItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/inventory`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem fetching inventory items:', error);
    throw error;
  }
};

// Add a new inventory item
export const addInventoryItem = async (item) => {
  try {
    const response = await fetch(`${API_BASE_URL}/inventory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem adding the inventory item:', error);
    throw error;
  }
};

// Update an existing inventory item
export const updateInventoryItem = async (id, item) => {
  // Implement similar to addInventoryItem, but with method 'PUT'
};

// Delete an inventory item
export const deleteInventoryItem = async (id) => {
  // Implement similar to addInventoryItem, but with method 'DELETE'
};
