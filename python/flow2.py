#!/usr/bin/python3
import RPi.GPIO as GPIO
import time

i = 0
GPIO.setmode(GPIO.BCM)

GPIO.setup(6,GPIO.OUT)
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_UP) 

def my_callback(channel):  
    global i
    i = i + 1

GPIO.add_event_detect(16, GPIO.FALLING, callback=my_callback) 

GPIO.output(6, GPIO.HIGH)

#while i < 23000000:
#   print(i) 

time.sleep(5)

GPIO.output(6, GPIO.LOW)


GPIO.cleanup()
