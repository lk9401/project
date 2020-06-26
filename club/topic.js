let topicsArray=
[
    "去聽",
    "去混",
    "蹺課",
    "沒課",
    "看心情",
    "去聽",
    "放假"
];

let startDate=new Date();

function setMonthAndDay(startMonth,startDay)
{
    //一次設定好月分與日期
    startDate.setMonth(startMonth-1,startDay);
    //時間先忽略，設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

let days =
[
    "日",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六"
];