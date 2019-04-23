#!/usr/bin/python3
import RPi.GPIO as GPIO
import time

Sol = 6
Flow = 12

i = 0
GPIO.setmode(GPIO.BCM)

GPIO.setup(Sol,GPIO.OUT)
GPIO.setup(Flow, GPIO.IN, pull_up_down=GPIO.PUD_UP) 

def my_callback(channel):  
    global i
    i = i + 1

GPIO.add_event_detect(Flow, GPIO.FALLING, callback=my_callback) 

GPIO.output(Sol, GPIO.HIGH)

while i < 19:
   pass

GPIO.output(Sol, GPIO.LOW)


GPIO.cleanup()
