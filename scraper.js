// scraper.js
import fs from 'fs';
import path from 'path';
import crypto from 'crypto'; // Built-in Node.js module

const actionVerbs = [
  "Stream real-time transactional data arrays from",
  "Pipe asynchronous webhook payloads directly out of",
  "Synchronize event-driven schema updates natively from",
  "Securely capture outbound JSON data packets from",
  "Listen for system level state modifications inside",
  "Route real-time downstream structural events directly from",
  "Intercept transactional operational updates streaming out of",
  "Extract automated transactional mutations directly out of",
  "Broadcast secure multi-tenant ledger variations from"
]; // 9 options

const connectors = [
  "to initialize automated workflows inside",
  "to trigger serverless cloud functions execution within",
  "to programmatically map and upsert records into",
  "to dynamically reconstruct data collections inside",
  "to dispatch secure downstream API state arrays directly into",
  "to instantly trigger custom transactional event handlers inside",
  "to pipeline structured normalization schema layers cleanly into",
  "to automatically update central execution graphs within"
]; // 8 options

const outcomes = [
  "without standing up expensive middleware layers.",
  "ensuring complete data array consistency.",
  "with end-to-end payload signature validation.",
  "optimized for low-latency database throughput.",
  "handling edge-case synchronization faults automatically.",
  "eliminating the need for custom webhooks polling architecture.",
  "enforcing strict structural type safety criteria across clusters.",
  "minimizing compute cycle overhead metrics significantly."
]; // 8 options

const categories = [
  "Data Pipelines & Core Infrastructure",
  "B2B Enterprise Integration Logic",
  "Cloud Tech Analytics & Telemetry",
  "Automated Middleware Operations"
];

async function fetchUniqueData() {
  console.log("🔒 Initializing Cryptographic Content Shuffling Engine...");

  try {
    const response = await fetch('https://api.apis.guru/v2/list.json');
    if (!response.ok) throw new Error('Network error');
    
    const apiData = await response.json();
    const apiKeys = Object.keys(apiData);
    const rawScrapedData = [];

    const formatName = (str) => {
      let name = str.split(':')[0];
      name = name.replace(/\.(com|net|org|io|me|edu|gov|co|info|biz|xyz|appspot)/gi, '');
      name = name.replace(/[0-9]/g, '');
      name = name.replace(/[-_.]/g, ' ');
      return name.trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    for (let i = 0; i < apiKeys.length - 1; i++) {
      const tool1Raw = apiKeys[i].split(':')[0].toLowerCase();
      const tool2Raw = apiKeys[i + 1].split(':')[0].toLowerCase();

      if (tool1Raw === tool2Raw) continue;

      const app1Name = formatName(tool1Raw);
      const app2Name = formatName(tool2Raw);

      if (!app1Name || !app2Name || app1Name === app2Name) continue;

      const lookupSlug = `${tool1Raw}-to-${tool2Raw}`;

      // Create a SHA-256 cryptographic hash of the unique URL string slug
      const hashHex = crypto.createHash('sha256').update(lookupSlug).digest('hex');
      
      // Extract large, high-entropy unique numbers from different sections of the hex hash string
      const num1 = parseInt(hashHex.substring(0, 8), 16);
      const num2 = parseInt(hashHex.substring(8, 16), 16);
      const num3 = parseInt(hashHex.substring(16, 24), 16);
      const num4 = parseInt(hashHex.substring(24, 32), 16);

      // Map integers securely to our pools using remainder math
      const trigger = `${actionVerbs[num1 % actionVerbs.length]} ${app1Name}`;
      const action = `${connectors[num2 % connectors.length]} ${app2Name}`;
      const descriptiveSentence = `${trigger} ${action} ${outcomes[num3 % outcomes.length]}`;
      
      const category = categories[num4 % categories.length];
      const difficulty = num1 % 3 === 0 ? "Advanced Technical Setup" : (num1 % 3 === 1 ? "Intermediate Setup" : "Beginner Friendly");

      rawScrapedData.push({
        app1: tool1Raw.replace(/[^a-z0-9]/g, '-'),
        app1Name: app1Name,
        app2: tool2Raw.replace(/[^a-z0-9]/g, '-'),
        app2Name: app2Name,
        category: category,
        trigger: trigger,
        action: action,
        difficulty: difficulty,
        customDescription: descriptiveSentence
      });
    }

    const limitedData = rawScrapedData.slice(0, 60);
    const dataPath = path.join(process.cwd(), 'src', 'data', 'integrations.json');
    fs.writeFileSync(dataPath, JSON.stringify(limitedData, null, 2), 'utf8');

    console.log(`\n🎉 Success! Cryptographically decoupled sentence components across ${limitedData.length} entries.`);

  } catch (error) {
    console.error("❌ Execution breakdown:", error);
  }
}

fetchUniqueData();