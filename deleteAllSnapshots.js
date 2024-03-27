// Set your DigitalOcean API token
const apiToken = "YOUR_DIGITALOCEAN_API_TOKEN";

// Droplet ID of the droplet you want to snapshot and delete
const snapshotId = "YOUR_SNAPSHOT_ID";

// Create a snapshot
const deleteSnapshotUrl = `https://api.digitalocean.com/v2/snapshots/${snapshotId}`;

//Headers for the api
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiToken}`,
};

(async () => {
  try {
    // Delete a droplet
    const deleteSnapshotResponse = await fetch(deleteSnapshotUrl, {
      method: "DELETE",
      headers: headers,
    });
    const deleteSnapshotResult = await deleteSnapshotResponse.json();
    console.log("Snapshot deleted:", deleteSnapshotResult);
  } catch (error) {
    console.error("Error:", error);
  }
})();
