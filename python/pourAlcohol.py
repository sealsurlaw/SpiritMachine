#!/usr/bin/python3
import RPi.GPIO as GPIO
import sys
import time

CONTAINER = sys.argv[1]
pinflow = {
        "0": (9, 12),
        "1": (13, 16),
        "2": (19, 20),
        "3": (26, 21)
}

#Lookup correct pins for valve and flowmeter
#pin = pinflow[CONTAINER][0]

pin = int(sys.argv[1])
# flow = pinflow[CONTAINER][1]

#Start of flow count

#GPIO setup
GPIO.setmode( GPIO.BCM )
GPIO.setup( pin, GPIO.OUT, initial=GPIO.LOW )
# GPIO.setup( flow, GPIO.IN, pull_up_down=GPIO.PUD_UP ) 

#Flowmeter interrupt handler
# def countPulse(channel):  
#     global i
#     i = i + 1

#Register interrupt
# GPIO.add_event_detect( flow, GPIO.FALLING, callback=countPulse) 

#Start dispensing alcohol
GPIO.output( pin, GPIO.HIGH )

#Wait until shot is poured
# while i <= 22:
#     pass

#time.sleep(2.5)

try:
    while True:
        pass
except KeyboardInterrupt:


    #Stop dispensing
    GPIO.output( pin, GPIO.LOW )

    print("Dispensed complete")

    GPIO.cleanup()

