// Set your DigitalOcean API token
const apiToken = "YOUR_DIGITALOCEAN_API_TOKEN";

// Droplet ID of the droplet you want to snapshot and delete
const dropletId = "YOUR_DROPLET_ID";

// Create a snapshot
const snapshotUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;
const snapshotData = {
  type: "snapshot",
};
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiToken}`,
};

(async () => {
  try {
    // Create a snapshot
    const snapshotResponse = await fetch(snapshotUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(snapshotData),
    });
    const snapshotResult = await snapshotResponse.json();
    console.log("Snapshot created:", snapshotResult);
  } catch (error) {
    console.error("Error:", error);
  }
})();
