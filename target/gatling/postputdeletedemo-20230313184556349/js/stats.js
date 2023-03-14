var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "16",
        "ok": "16",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles1": {
        "total": "138",
        "ok": "138",
        "ko": "-"
    },
    "percentiles2": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "percentiles3": {
        "total": "245",
        "ok": "245",
        "ko": "-"
    },
    "percentiles4": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.667",
        "ok": "2.667",
        "ko": "-"
    }
},
contents: {
"req_create-user-req-29953": {
        type: "REQUEST",
        name: "Create user Request",
path: "Create user Request",
pathFormatted: "req_create-user-req-29953",
stats: {
    "name": "Create user Request",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "245",
        "ok": "245",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles1": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles2": {
        "total": "166",
        "ok": "166",
        "ko": "-"
    },
    "percentiles3": {
        "total": "231",
        "ok": "231",
        "ko": "-"
    },
    "percentiles4": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
    }
}
    },"req_update-user-a0386": {
        type: "REQUEST",
        name: "update user",
path: "update user",
pathFormatted: "req_update-user-a0386",
stats: {
    "name": "update user",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "160",
        "ok": "160",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles1": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles2": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "percentiles3": {
        "total": "228",
        "ok": "228",
        "ko": "-"
    },
    "percentiles4": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
