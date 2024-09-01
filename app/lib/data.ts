export async function fetchDishes() {
  try {
    const data = await fetch('http://localhost:8080/dishes', { method: "GET" })

    return data.json()
  } catch (err) {
  
    console.error('Fetch Error:', err);
    throw new Error('Failed to fetch all dishes.');
  }
}
