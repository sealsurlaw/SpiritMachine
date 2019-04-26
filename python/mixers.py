#!/bin/python
import sys
import time
import RPi.GPIO as GPIO

MIXER = int(sys.argv[1])

GPIO.setmode(GPIO.BCM)

pins = [4, 5, 22, 17]

pin = pins[MIXER]

GPIO.setup(pin, GPIO.OUT)

GPIO.output(pin, GPIO.HIGH)

time.sleep(4.5)

GPIO.output(pin, GPIO.LOW)

GPIO.cleanup()

