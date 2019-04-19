#!/usr/bin/python3
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

# GPIO | Relay
#--------------
# 26     01
# 19     02
# 13     03
# 06     04
# 12     05
# 16     06
# 20     07
# 21     08

# initiate list with pin gpio pin numbers

gpioList = [4, 5, 22, 17, 6, 13, 19, 26]

for i in gpioList:
    GPIO.setup(i, GPIO.OUT)
    GPIO.output(i, GPIO.LOW)

# Sleep time variables

sleepTimeShort = 0.2
sleepTimeLong = 0.1

# MAIN LOOP =====
# ===============
for i in gpioList:
    GPIO.output(i, GPIO.HIGH)
    time.sleep(0.5)
    GPIO.output(i, GPIO.LOW)
    time.sleep(1.0)


# End program cleanly with keyboard

    # Reset GPIO settings

GPIO.cleanup()
