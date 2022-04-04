// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the area of a triangle.
 */
function calculate () {
  // input
  const radius = parseInt(document.getElementById("radius").value)
  // process
  const volume = 4/3 * Math.PI * Math.pow(radius, 3)
  // output
  document.getElementById("volume").innerHTML =
    "The area is: " + volume.toFixed(2) + ' mm²' 
}
