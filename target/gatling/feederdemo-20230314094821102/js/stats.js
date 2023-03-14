var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "244",
        "ok": "244",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "percentiles1": {
        "total": "243",
        "ok": "243",
        "ko": "-"
    },
    "percentiles2": {
        "total": "389",
        "ok": "389",
        "ko": "-"
    },
    "percentiles3": {
        "total": "392",
        "ok": "392",
        "ko": "-"
    },
    "percentiles4": {
        "total": "393",
        "ok": "393",
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
        "total": "3",
        "ok": "3",
        "ko": "-"
    }
},
contents: {
"req_go-to---page--81b61": {
        type: "REQUEST",
        name: "Go to #{page}",
path: "Go to #{page}",
pathFormatted: "req_go-to---page--81b61",
stats: {
    "name": "Go to #{page}",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "385",
        "ok": "385",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "389",
        "ok": "389",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles1": {
        "total": "390",
        "ok": "390",
        "ko": "-"
    },
    "percentiles2": {
        "total": "392",
        "ok": "392",
        "ko": "-"
    },
    "percentiles3": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "percentiles4": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
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
        "total": "1.5",
        "ok": "1.5",
        "ko": "-"
    }
}
    },"req_go-to---page--r-5841e": {
        type: "REQUEST",
        name: "Go to #{page} Redirect 1",
path: "Go to #{page} Redirect 1",
pathFormatted: "req_go-to---page--r-5841e",
stats: {
    "name": "Go to #{page} Redirect 1",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles1": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles2": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles3": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles4": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
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
        "total": "1.5",
        "ok": "1.5",
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
