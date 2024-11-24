function showSinglePlayer() {
  window.location.href = "../pages/playingWithComp.html";
}

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

function showPlayWithFriend() {
  window.location.href = "../pages/playingWithFriend.html";
}
