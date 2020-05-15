const hydrationTestData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numOunces": 37
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numOunces": 75
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numOunces": 47
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "numOunces": 85
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numOunces": 69
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numOunces": 91
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "numOunces": 99
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "numOunces": 95
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "numOunces": 96
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numOunces": 96
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "numOunces": 28
  },
  {
    "userID": 4,
    "date": "2019/06/17",
    "numOunces": 82
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "numOunces": 61
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "numOunces": 70
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "numOunces": 40
  },
  {
    "userID": 4,
    "date": "2019/06/18",
    "numOunces": 93
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "numOunces": 91
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "numOunces": 76
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "numOunces": 85
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "numOunces": 21
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "numOunces": 50
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "numOunces": 71
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "numOunces": 51
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "numOunces": 95
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "numOunces": 50
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "numOunces": 27
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "numOunces": 41
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "numOunces": 91
  },
  {
    "userID": 1,
    "date": "2019/06/22",
    "numOunces": 43
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "numOunces": 58
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "numOunces": 78
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "numOunces": 34
  },
  {
    "userID": 1,
    "date": "2019/06/23",
    "numOunces": 39
  },
  {
    "userID": 2,
    "date": "2019/06/23",
    "numOunces": 44
  },
  {
    "userID": 3,
    "date": "2019/06/23",
    "numOunces": 35
  },
  {
    "userID": 4,
    "date": "2019/06/23",
    "numOunces": 62
  },
  {
    "userID": 1,
    "date": "2019/06/24",
    "numOunces": 61
  },
  {
    "userID": 2,
    "date": "2019/06/24",
    "numOunces": 33
  },
  {
    "userID": 3,
    "date": "2019/06/24",
    "numOunces": 40
  },
  {
    "userID": 4,
    "date": "2019/06/24",
    "numOunces": 66
  },
  {
    "userID": 1,
    "date": "2019/06/25",
    "numOunces": 51
  },
  {
    "userID": 2,
    "date": "2019/06/25",
    "numOunces": 67
  },
  {
    "userID": 3,
    "date": "2019/06/25",
    "numOunces": 47
  },
  {
    "userID": 4,
    "date": "2019/06/25",
    "numOunces": 27
  },
  {
    "userID": 1,
    "date": "2019/06/26",
    "numOunces": 52
  },
  {
    "userID": 2,
    "date": "2019/06/26",
    "numOunces": 27
  },
  {
    "userID": 3,
    "date": "2019/06/26",
    "numOunces": 48
  },
  {
    "userID": 4,
    "date": "2019/06/26",
    "numOunces": 44
  },
  {
    "userID": 1,
    "date": "2019/06/27",
    "numOunces": 29
  },
  {
    "userID": 2,
    "date": "2019/06/27",
    "numOunces": 70
  },
  {
    "userID": 3,
    "date": "2019/06/27",
    "numOunces": 89
  },
  {
    "userID": 4,
    "date": "2019/06/27",
    "numOunces": 83
  },
  {
    "userID": 1,
    "date": "2019/06/28",
    "numOunces": 57
  },
  {
    "userID": 2,
    "date": "2019/06/28",
    "numOunces": 56
  },
  {
    "userID": 3,
    "date": "2019/06/28",
    "numOunces": 66
  },
  {
    "userID": 4,
    "date": "2019/06/28",
    "numOunces": 47
  },
  {
    "userID": 1,
    "date": "2019/06/29",
    "numOunces": 99
  },
  {
    "userID": 2,
    "date": "2019/06/29",
    "numOunces": 35
  },
  {
    "userID": 3,
    "date": "2019/06/29",
    "numOunces": 41
  },
  {
    "userID": 4,
    "date": "2019/06/29",
    "numOunces": 68
  },
  {
    "userID": 1,
    "date": "2019/06/30",
    "numOunces": 64
  },
  {
    "userID": 2,
    "date": "2019/06/30",
    "numOunces": 92
  },
  {
    "userID": 3,
    "date": "2019/06/30",
    "numOunces": 29
  },
  {
    "userID": 4,
    "date": "2019/06/30",
    "numOunces": 71
  },
  {
    "userID": 1,
    "date": "2019/07/01",
    "numOunces": 82
  },
  {
    "userID": 2,
    "date": "2019/07/01",
    "numOunces": 31
  },
  {
    "userID": 3,
    "date": "2019/07/01",
    "numOunces": 52
  },
  {
    "userID": 4,
    "date": "2019/07/01",
    "numOunces": 27
  },
  {
    "userID": 1,
    "date": "2019/07/02",
    "numOunces": 53
  },
  {
    "userID": 2,
    "date": "2019/07/02",
    "numOunces": 91
  },
  {
    "userID": 3,
    "date": "2019/07/02",
    "numOunces": 94
  },
  {
    "userID": 4,
    "date": "2019/07/02",
    "numOunces": 66
  },
]

if (typeof module !== 'undefined') {
  module.exports = hydrationTestData;
}