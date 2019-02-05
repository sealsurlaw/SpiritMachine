
i = 1

while i == 1:
    print("Pick a Motor to turn on")

    motors = int(input())
    if motors == 1:
            print("Motor 1 is running")
    elif  motors == 2:
            print("Motor 2 is running")
    elif motors == 3:
            print("Motors 1 and 2 are running")
    else:
            print("No Motors selected")