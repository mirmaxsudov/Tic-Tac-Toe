const batteryPercentage = document.querySelector(".battery__percentage");

updateBattery();    

function updateBattery() {
  navigator.getBattery().then(function (battery) {
    function updateBatteryStatus() {
      const batteryLevel = (battery.level * 100).toFixed(0);
      console.log(`Battery Level: ${batteryLevel}%`);

      batteryPercentage.textContent = batteryLevel;
    }

    updateBatteryStatus();
  });
}

setInterval(() => updateBattery(), 1000);
