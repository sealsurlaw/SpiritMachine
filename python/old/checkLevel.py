#!/bin/python3
import RPi.GPIO as GPIO
import time
import sys
import requests

pins = ( 14, 15, 18, 23 )
URL= "http://spirit-machine.com/notificationtest"

GPIO.setmode( GPIO.BCM )

for pin in pins:
    GPIO.setup( pin, GPIO.IN, pull_up_down=GPIO.PUD_UP )
    low = GPIO.input( pin )
    if low == True:
        requests.get( URL )

GPIO.cleanup()
