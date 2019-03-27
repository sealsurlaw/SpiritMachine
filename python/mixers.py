#!/bin/python3
import sys
import time
from adafruit_motorkit import MotorKit

MIXER = sys.argv[1]
kit = MotorKit()

motors = {
        "0": kit.motor1,
        "1": kit.motor2,
        "2": kit.motor3,
        "3": kit.motor4
}

#Get the correct motor
motor = motors[MIXER]

#Start motor
motor.throttle = 1.0
#Wait a bit
time.sleep( 2 )
#Turn off motor
motor.throttle = 0.0
#Or make it idle (will have to test both)
#motor.throttle = None

