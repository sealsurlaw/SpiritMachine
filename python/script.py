import keyboard  # using module keyboard
import time

while True:  # making a loop
    if keyboard.is_pressed('q'):  # if key 'q' is pressed 
        print('You Pressed A Key!')
        time.sleep(0.1)
    