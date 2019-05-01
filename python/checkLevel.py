import RPi.GPIO as GPIO
import time

pins = [18,7,27,23]

GPIO.setmode(GPIO.BCM)

GPIO.setup(pins[0], GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(pins[1], GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(pins[2], GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(pins[3], GPIO.IN, pull_up_down=GPIO.PUD_UP)

isClosed1 = GPIO.input(pins[0])
isClosed2 = GPIO.input(pins[1])
isClosed3 = GPIO.input(pins[2])
isClosed4 = GPIO.input(pins[3])

print("{},{},{},{}".format(isClosed1, isClosed2, isClosed3, isClosed4))

GPIO.cleanup()

