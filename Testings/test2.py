#!/usr/bin/python3

import RPi.GPIO as GPIO

i = 0

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_UP)  

try:  
    while(True):
        GPIO.wait_for_edge(18, GPIO.FALLING)  
        i = i + 1
        print("Falling: " + str(i))
except KeyboardInterrupt:  
    GPIO.cleanup()       # clean up GPIO on CTRL+C exit  
GPIO.cleanup()           # clean up GPIO on normal exit  
