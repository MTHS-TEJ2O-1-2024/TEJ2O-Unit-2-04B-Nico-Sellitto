"""
Created by: Nico Sellitto
Created on: Sep 2024
This module is a Micro:bit MicroPython program
"""

from microbit import *

temp = temperature

with True:
if button_a.is_pressed:{

    display.scroll('the temperature is:')
    display.scroll(temp)

}