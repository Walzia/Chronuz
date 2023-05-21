{-
   OpenAPI Petstore
   This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.

   The version of the OpenAPI document: 1.0.0

   NOTE: This file is auto generated by the openapi-generator.
   https://github.com/openapitools/openapi-generator.git

   DO NOT EDIT THIS FILE MANUALLY.

   For more info on generating Elm code, see https://eriktim.github.io/openapi-elm/
-}


module Api.Request.User exposing
    ( createUser
    , createUsersWithArrayInput
    , createUsersWithListInput
    , deleteUser
    , getUserByName
    , loginUser
    , logoutUser
    , updateUser
    )

import Api
import Api.Data exposing (..)
import Dict
import Http
import Json.Decode
import Json.Encode

{-| This can only be done by the logged in user.
-}
createUser : Api.Data.User -> Api.Request ()
createUser user_body =
    Api.request
        "POST"
        "/user"
        []
        []
        []
        (Maybe.map Http.jsonBody (Just (Api.Data.encodeUser user_body)))
        (Json.Decode.succeed ())


createUsersWithArrayInput : List Api.Data.User -> Api.Request ()
createUsersWithArrayInput user_body =
    Api.request
        "POST"
        "/user/createWithArray"
        []
        []
        []
        (Maybe.map Http.jsonBody (Just (Json.Encode.list encodeUser user_body)))
        (Json.Decode.succeed ())


createUsersWithListInput : List Api.Data.User -> Api.Request ()
createUsersWithListInput user_body =
    Api.request
        "POST"
        "/user/createWithList"
        []
        []
        []
        (Maybe.map Http.jsonBody (Just (Json.Encode.list encodeUser user_body)))
        (Json.Decode.succeed ())


{-| This can only be done by the logged in user.
-}
deleteUser : String -> Api.Request ()
deleteUser username_path =
    Api.request
        "DELETE"
        "/user/{username}"
        [ ( "username", identity username_path ) ]
        []
        []
        Nothing
        (Json.Decode.succeed ())


getUserByName : String -> Api.Request Api.Data.User
getUserByName username_path =
    Api.request
        "GET"
        "/user/{username}"
        [ ( "username", identity username_path ) ]
        []
        []
        Nothing
        Api.Data.userDecoder


loginUser : String -> String -> Api.Request String
loginUser username_query password_query =
    Api.request
        "GET"
        "/user/login"
        []
        [ ( "username", Just <| identity username_query ), ( "password", Just <| identity password_query ) ]
        []
        Nothing
        Json.Decode.string


logoutUser : Api.Request ()
logoutUser =
    Api.request
        "GET"
        "/user/logout"
        []
        []
        []
        Nothing
        (Json.Decode.succeed ())


{-| This can only be done by the logged in user.
-}
updateUser : String -> Api.Data.User -> Api.Request ()
updateUser username_path user_body =
    Api.request
        "PUT"
        "/user/{username}"
        [ ( "username", identity username_path ) ]
        []
        []
        (Maybe.map Http.jsonBody (Just (Api.Data.encodeUser user_body)))
        (Json.Decode.succeed ())
