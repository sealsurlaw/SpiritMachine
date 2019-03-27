import sys
import time
from adafruit_motorkit import MotorKit

kit = MotorKit()
arguments = len(sys.argv)
for i in range(1,arguments):   
        if int(sys.argv[i]) == 1:
            print("Motor 1 is running")
            kit.motor1.throttle = 1.0
            time.sleep(0.5)
            kit.motor1.throttle = 0
        elif  int(sys.argv[i]) == 2:
            kit.motor2.throttle = 1.0
            time.sleep(0.5)
            kit.motor2.throttle = 0
            print("Motor 2 is running")
        elif int(sys.argv[i]) == 3:
            kit.motor3.throttle = 1.0
            time.sleep(0.5)
            kit.motor3.throttle = 0
            print("Motor 3 is running")
        elif int(sys.argv[i]) == 4:
            kit.motor4.throttle = 1.0
            time.sleep(0.5)
            kit.motor4.throttle = 0
            print("Motor 4 is running")
                