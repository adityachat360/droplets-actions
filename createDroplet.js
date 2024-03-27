// Set your DigitalOcean API token
const apiToken = "YOUR_DIGITALOCEAN_API_TOKEN";

// Droplet ID of the droplet you want to snapshot and delete
const dropletId = "YOUR_DROPLET_ID";

// Create a snapshot
const createDropletUrl = `https://api.digitalocean.com/v2/droplets`;
const dropletData = {
  name: "example.com", // name of the droplet
  region: "blr1", // region of the droplet
  size: "s-1vcpu-1gb",
  image: "ubuntu-20-04-x64",
  ssh_keys: [],
  backups: false,
  ipv6: false,
  monitoring: true,
  tags: ["env:prod", "web"],
  user_data: "#cloud-config\nruncmd:\n - touch /test.txt\n",
  vpc_uuid: "760e09ef-dc84-11e8-981e-3cfdfeaae000",
};
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiToken}`,
};

(async () => {
  try {
    // Create a snapshot
    const createDropletResponse = await fetch(createDropletUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(dropletData),
    });
    const createDropletResult = await createDropletResponse.json();
    console.log("Snapshot created:", createDropletResult);
  } catch (error) {
    console.error("Error:", error);
  }
})();
