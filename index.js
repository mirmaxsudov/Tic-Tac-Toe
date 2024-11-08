function showSinglePlayer() {
  window.location.href = "../pages/playingWithComp.html";
}

document.addEventListener("DOMContentLoaded", () => {
  navigator.getBattery().then(function (battery) {
    function updateBatteryStatus() {
      const batteryLevel = (battery.level * 100).toFixed(0); // Battery level in percentage
      console.log(`Battery Level: ${batteryLevel}%`);
      // You can also display this value on the webpage
    }

    // Initial battery level
    updateBatteryStatus();

    //   battery.addEventListener("levelchange", updateBatteryStatus);
  });
});

async function checkOnlineStatus() {
  try {
    const response = await fetch("https://picsum.photos/10", {
      method: "GET",
      cache: "no-store",
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

checkOnlineStatus().then((isOnline) => {
  console.log(isOnline ? "You are online." : "You are offline.");
});

if ("connection" in navigator) {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  // slow-2g - Very poor connectivity, slower than a typical 2G network.
  // 2g - Poor connectivity, typical of a 2G network.
  // 3g - Moderate connectivity, typical of a 3G network.
  // 4g - Good connectivity, typical of a 4G network.

  console.log(`Effective Connection Type: ${connection.effectiveType}`); // Possible values: "4g", "3g", "2g", "slow-2g"

  connection.addEventListener("change", () => {
    console.log(`New Connection Type: ${connection.type}`);
    console.log(`New Effective Connection Type: ${connection.effectiveType}`);
  });
} else {
  console.log("Network Information API is not supported on this browser.");
}

// if (navigator.onLine) {
//   console.log("You are online.");
// } else {
//   console.log("You are offline.");
// }

// // Listen for changes in online/offline status
// window.addEventListener("online", () => console.log("You are online."));
// window.addEventListener("offline", () => console.log("You are offline."));
