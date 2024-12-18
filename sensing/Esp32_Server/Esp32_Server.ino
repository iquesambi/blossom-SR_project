#include <ArduinoWebsockets.h>
#include <WiFi.h>

const char* ssid = "henrique"; //Enter SSID
const char* password = "ique109090"; //Enter Password

using namespace websockets;

WebsocketsServer server;
WebsocketsClient client; // Persistent client object
bool clientConnected = false; // Tracks client connection status
unsigned long lastSendTime = 0; // Tracks the last time a message was sent
const unsigned long sendInterval = 2000; // 2 seconds interval

void setup() {
  Serial.begin(115200);
  
  // Connect to Wi-Fi
  WiFi.begin(ssid, password);

  // Wait for Wi-Fi connection
  for (int i = 0; i < 15 && WiFi.status() != WL_CONNECTED; i++) {
    Serial.print(".");
    delay(1000);
  }

  Serial.println("\nWiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  // Start WebSocket server
  server.listen(80);
  Serial.print("Is server live? ");
  Serial.println(server.available());
}

void loop() {
  // Accept a new client if no client is connected
  if (!clientConnected) {
    client = server.accept();
    if (client.available()) {
      clientConnected = true;
      Serial.println("Client connected");
    }
  }

  // Check if client is still connected
  if (clientConnected && !client.available()) {
    clientConnected = false;
    Serial.println("Client disconnected");
  }

  // Send a random number every 2 seconds if the client is connected
  if (clientConnected) {
    unsigned long currentMillis = millis();

    if (currentMillis - lastSendTime >= sendInterval) {
      lastSendTime = currentMillis;

      int randomNumber = random(0, 100); // Generate random number between 0 and 99
      String message = "Random Number: " + String(randomNumber);

      Serial.println("Sending: " + message);
      client.send(message);
    }
  }
}
