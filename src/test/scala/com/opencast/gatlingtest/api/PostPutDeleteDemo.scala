package com.opencast.gatlingtest.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._
class PostPutDeleteDemo extends  Simulation{

  //protocol you can add base url and headers here
  val httpProtocol = http.baseUrl("https://reqres.in/api")

  //scenario
  val createUserScn = scenario("create user")
    .exec(
      http("Create user Request")
        .post("/users")
        .header("content-type","applicaton/json")
        .asJson
        .body(RawFileBody("data/user.json"))
//        .body(StringBody(
//          """
//            |{
//            |    "name": "Ramesh",
//            |    "job": "leader"
//            |}
//            |""".stripMargin)).asJson
        .check(
          status is 201,
          jsonPath("$.name") is "RameshA"
    )
    )
    .pause(1)

    val updateUserScn = scenario("Update user")
    .exec(
      http("update user")
        .put("/users/2")
        .body(RawFileBody("data/user.json")).asJson
        .check(
          status is 200,
          jsonPath("$.name") is "RameshA"

        )
    )
      .pause(2)

    val deleteUserScn = scenario("Delete User")
      .exec(
        http("Delete user Request")
          .delete("/users/2")
          .check(
            status is 204
          )
      )
      .pause(1)
  //setup
   setUp(
     createUserScn.inject(rampUsers(10).during(5)),
     updateUserScn.inject(rampUsers(6).during(3)),
     deleteUserScn.inject(rampUsers(3).during(2))
   ).protocols(httpProtocol)
}
