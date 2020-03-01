from Keys import PressKey , ReleaseKey
import time
import sys
import pyautogui
#time.sleep(10)
if sys.argv[1] != "Break" and sys.argv[1] != "Place" and sys.argv[1] != "Up"and sys.argv[1] != "Down" and sys.argv[1] != "Left" and sys.argv[1] != "Right":
    Keys = {"Q": 0x10,"W": 0x11, "E": 0x12,"A": 0x1E, "S": 0x1F,  "D": 0x20,"Space": 0x39,
    "1": 0x02,"2": 0x03,"3": 0x04,"4": 0x05,"5": 0x06,"6": 0x07,"7": 0x08,"8": 0x09,"9": 0x0A,"0": 0x0B, "Ctrl":0x1D, "Shift": 0x2A }
    print("Pressing Key " + sys.argv[1])
    PressKey(Keys[sys.argv[1]])
    time.sleep(.5)
    ReleaseKey(Keys[sys.argv[1]])
else:
    if sys.argv[1] == "Break":
        pyautogui.click()
    if sys.argv[1] == "Place":
        pyautogui.click(button='right')
    if sys.argv[1] == "Up":
        pyautogui.moveRel(0, -25, duration=.25)
    if sys.argv[1] == "Down":
        pyautogui.moveRel(0, 25, duration=.25)
    if sys.argv[1] == "Left":
        pyautogui.moveRel(-25, 0, duration=.25)
    if sys.argv[1] == "Right":
        pyautogui.moveRel(25, 0, duration=.25)
