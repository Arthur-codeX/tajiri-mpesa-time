# Daraja Time Package

## tajiri-mpesa-time

## Description

This is a simple package that generates the timestamp in required format from daraja.

> This is the Timestamp of the transaction, normaly in the formart of YEAR+MONTH+DATE+HOUR+MINUTE+SECOND (YYYYMMDDHHMMSS) Each part should be atleast two digits apart from the year which takes four digits.

## Usage

### Installing

npm install tajiri-mpesa-time

---

### Usage

### Using Async Await:

```javascript
const time = require("tajiri-mpesa-time");

const timeZone = "Africa";
const Area = "Nairobi";

const getTime = async () => {
  let t = await time();
  console.log(t);
};

// Using Async Await
// The time function requires tow arguments
//time(arg1,arg2)
//arg1 by default is the Africa
//arg2 by default is Nairobi

const getTime2 = async () => {
  let t = await time(timeZone, Area);
  console.log(t);
};

getTime();
getTime2();
```

### Using Promises

````javascript
```javascript
const time = require("tajiri-mpesa-time");

const timeZone = "Africa";
const Area = "Nairobi";
```;

// The time function requires tow arguments
//time(arg1,arg2)
//arg1 by default is the Africa
//arg2 by default is Nairobi

// Using Promises
time(timeZone, Area)
  .then((t) => {
    console.log(t);
  })
  .catch((e) => {
    console.log(e);
  });

// The time function requires tow arguments
//time(arg1,arg2)
//arg1 by default is the Africa
//arg2 by default is Nairobi

// Using Promises
time()
  .then((t) => {
    console.log(t);
  })
  .catch((e) => {
    console.log(e);
  });
````

## References

> get the application credentials from daraja

[daraja]](https://developer.safaricom.co.ke/)
