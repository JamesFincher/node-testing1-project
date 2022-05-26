const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {

  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(input)
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const newObj = utils.trimPropertiesMutation(input)
    expect(newObj).toEqual(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const integers = [{ integer: 3}, {integer: 15}, {integer: 100}]
    const largest = 100
    const result = utils.findLargestInteger(integers)
    expect(result).toEqual(largest)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const firstResult = counter.countDown()
    expect(firstResult).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const secondResuult = counter.countDown()
    expect(secondResuult).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    const fourthResult = counter.countDown()
    const fifthResult = counter.countDown()
    expect(fourthResult).toBe(0)
    expect(fifthResult).toBe(0)


  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toBe("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 1; i < 40; i++) {
      seasons.next()
    }
    expect(seasons.next()).toBe("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const returnVal = focus.drive(100)
    const odometer = focus.odometer
    expect(returnVal).toBe(odometer)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(60) //expect to burn 2 gallons with 30mpg
    expect(focus.tank).toBe(18)
  })
  test('[16.1] tank never goes negative if attempting to drive more miles than possible', () => {
    focus.drive(1000) //full tank has limit of 20 gallons * 30 miles/gallon = 600 miles
    expect(focus.tank).toBe(0)
  })
  test('[16.2] odometer only adds possible miles if attempting to drive more miles than in tank', () => {
    focus.drive(1000) //expect to only add 600 miles
    expect(focus.odometer).toBe(600)
  })
  
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    focus.refuel(5)
    focus.drive(100)
    expect(focus.odometer).toBe(700)
  })
  test('[17.1] refueling returns the miles that can be driven after refueling', () => {
    focus.drive(300)
    expect(focus.refuel(5)).toBe(15 * 30) //should have 15 gallons now
    
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(1000)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const answer = await utils.isEvenNumberAsync(4)
    expect(answer).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const answer = await utils.isEvenNumberAsync(5)
    expect(answer).toBe(false)
  })
})
