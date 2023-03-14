var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1054",
        "ok": "1054",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "406",
        "ok": "406",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "343",
        "ok": "343",
        "ko": "-"
    },
    "percentiles1": {
        "total": "271",
        "ok": "271",
        "ko": "-"
    },
    "percentiles2": {
        "total": "435",
        "ok": "435",
        "ko": "-"
    },
    "percentiles3": {
        "total": "930",
        "ok": "930",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1029",
        "ok": "1029",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 20
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1054",
        "ok": "1054",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "406",
        "ok": "406",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "343",
        "ok": "343",
        "ko": "-"
    },
    "percentiles1": {
        "total": "271",
        "ok": "271",
        "ko": "-"
    },
    "percentiles2": {
        "total": "435",
        "ok": "435",
        "ko": "-"
    },
    "percentiles3": {
        "total": "930",
        "ok": "930",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1029",
        "ok": "1029",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 20
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
