# Daraja Time Package

## tajiri-mpesa-time

## Description

This is a simple package that generates the timestamp in required format from daraja.

> This is the Timestamp of the transaction, normaly in the formart of YEAR+MONTH+DATE+HOUR+MINUTE+SECOND (YYYYMMDDHHMMSS) Each part should be atleast two digits apart from the year which takes four digits.

## Usage

### Installing

npm install tajiri-mpesa-time

### Usage

    const  mpesa_time = require("tajiri-mpesa-time");
    let  gmt=+3

    console.log(mpesa_time(gmt));

> The mpesa time takes in a variable gmt which by default is +3. hours.

## References

> get the application credentials from daraja

[daraja]](https://developer.safaricom.co.ke/)
[gmt](https://www.google.com/search?q=gmt&oq=gmt&aqs=chrome..69i57j35i39l2j0i433i512j0i433i457i512j0i402j0i512l4.1915j0j1&sourceid=chrome&ie=UTF-8)
