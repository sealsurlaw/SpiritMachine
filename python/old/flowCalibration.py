#!/usr/bin/python3
import RPi.GPIO as GPIO
import time
import keyboard
i = 1
timer = time.time()
GPIO.setmode(GPIO.BCM)
GPIO.setup(12,GPIO.OUT)
GPIO.setup(18, GPIO.IN, pull_up_down=GPIO.PUD_UP) 
def my_callback(channel):  
    global i
    global timer
    print(i) 
    print(time.time()-timer)
    i = i + 1
GPIO.add_event_detect(18, GPIO.FALLING, callback=my_callback) 


GPIO.output(12, GPIO.HIGH)
while (True):
    if keyboard.is_pressed('enter'):  
        global i
        print(i)
        i = 0
        time.sleep()
    


GPIO.cleanup()
