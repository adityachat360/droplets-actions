// Set your DigitalOcean API token
const apiToken = "YOUR_DIGITALOCEAN_API_TOKEN";

// Droplet ID of the droplet you want to snapshot and delete
const dropletId = "YOUR_DROPLET_ID";

// Create a snapshot
const deleteDropletUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;

//Headers for the api
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiToken}`,
};

(async () => {
  try {
    // Delete a droplet
    const deleteDropletResponse = await fetch(deleteDropletUrl, {
      method: "DELETE",
      headers: headers,
    });
    const deleteDropletResult = await deleteDropletResponse.json();
    console.log("Snapshot created:", deleteDropletResult);
  } catch (error) {
    console.error("Error:", error);
  }
})();
