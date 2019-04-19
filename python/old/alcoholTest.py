import RPi.GPIO as GPIO
import time

pins = [ 26, 19, 13, 6 ]

GPIO.setmode( GPIO.BCM )

for i in range(4):
    GPIO.setup( pins[i], GPIO.OUT, initial=GPIO.LOW )


for i in range(4):
    GPIO.output( pins[i], GPIO.HIGH )
    time.sleep( 1 )

    GPIO.output( pins[i], GPIO.LOW )
    time.sleep( 0.5)

GPIO.cleanup()

