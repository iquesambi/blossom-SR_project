#include <Wire.h>
#include "Adafruit_MPR121.h"
#include "Keyboard.h"

#ifndef _BV
#define _BV(bit) (1 << (bit)) 
#endif

Adafruit_MPR121 cap = Adafruit_MPR121();

uint16_t lasttouched = 0;
uint16_t currtouched = 0;

// Define touch pin mappings to corresponding keyboard keys
const uint8_t touchPins[5] = {0, 2, 4, 6, 8}; // Touch pins: 0, 2, 4, 6, 8
const char keyMap[5] = {'a', 's', 'd', 'f', 'g'}; // Corresponding keys

void setup() {
  Serial.begin(9600);
  while (!Serial) { delay(10); } // Wait for the Serial connection
  
  Serial.println("Adafruit MPR121 Capacitive Touch sensor test"); 
  
  if (!cap.begin(0x5A)) {
    Serial.println("MPR121 not found, check wiring?");
    while (1);
  }
  Serial.println("MPR121 found!");
  
  Keyboard.begin();
}

void loop() {
  currtouched = cap.touched();

  for (uint8_t i = 0; i < 5; i++) {
    uint8_t touchPin = touchPins[i];
    
    // Check if the pin is newly touched
    if ((currtouched & _BV(touchPin)) && !(lasttouched & _BV(touchPin))) {
      Serial.print("Pin "); Serial.print(touchPin); Serial.println(" touched");
      Keyboard.press(keyMap[i]); // Press corresponding key
    }

    // Check if the pin is released
    if (!(currtouched & _BV(touchPin)) && (lasttouched & _BV(touchPin))) {
      Serial.print("Pin "); Serial.print(touchPin); Serial.println(" released");
      Keyboard.release(keyMap[i]); // Release corresponding key
    }
  }
  
  lasttouched = currtouched;
}
