/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Sep 2024
 * This program shows a string
*/

basic.pause(100)

let temp = input.temperature()

input.onButtonPressed(Button.A, function () {
    basic.showNumber(temp)
})