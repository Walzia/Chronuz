<?php

/**
 * OpenAPI Petstore
 * PHP version 7.4
 *
 * @package OpenAPIServer
 * @author  OpenAPI Generator team
 * @link    https://github.com/openapitools/openapi-generator
 */

/**
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

/**
 * App configuration file example.
 *
 * Copy file to config/dev/config.inc.php and config/prod/config.inc.php
 * App loads dev config only when prod doesn't exist
 * in other words if both configs presented - prod config applies
 */

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use OpenAPIServer\Mock\OpenApiDataMocker;

$mocker = new OpenApiDataMocker();
$mocker->setModelsNamespace('OpenAPIServer\Model\\');

return [
    'slimSettings' => [
        'displayErrorDetails' => false,
        'logErrors' => true,
        'logErrorDetails' => true,
    ],

    'tokenAuthenticationOptions' => [
        /**
         * Tokens are essentially passwords. You should treat them as such and you should always
         * use HTTPS. If the middleware detects insecure usage over HTTP it will return unauthorized
         * with a message Required HTTPS for token authentication. This rule is relaxed for requests
         * on localhost. To allow insecure usage you must enable it manually by setting secure to
         * false.
         * Default: true
         */
        // 'secure' => true,

        /**
         * Alternatively you can list your development host to have relaxed security.
         * Default: ['localhost', '127.0.0.1']
         */
        // 'relaxed' => ['localhost', '127.0.0.1'],

        /**
         * By default on occurred a fail on authentication, is sent a response on json format with a
         * message (`Invalid Token` or `Not found Token`) and with the token (if found), with status
         * `401 Unauthorized`. You can customize it by setting a callable function on error option.
         * Default: null
         */
        // 'error' => null,
    ],

    'mockerOptions' => [
        // 'dataMocker' => $mocker,

        // 'getMockStatusCodeCallback' => function (ServerRequestInterface $request, array $responses) {
        //     // check if client clearly asks for mocked response
        //     $pingHeader = 'X-OpenAPIServer-Mock';
        //     $pingHeaderCode = 'X-OpenAPIServer-Mock-Code';
        //     if (
        //         $request->hasHeader($pingHeader)
        //         && $request->getHeader($pingHeader)[0] === 'ping'
        //     ) {
        //         $responses = (array) $responses;
        //         $requestedResponseCode = ($request->hasHeader($pingHeaderCode)) ? $request->getHeader($pingHeaderCode)[0] : 'default';
        //         if (array_key_exists($requestedResponseCode, $responses)) {
        //             return $requestedResponseCode;
        //         }

        //         // return first response key
        //         reset($responses);
        //         return key($responses);
        //     }

        //     return false;
        // },

        // 'afterCallback' => function (ServerRequestInterface $request, ResponseInterface $response) {
        //     // mark mocked response to distinguish real and fake responses
        //     return $response->withHeader('X-OpenAPIServer-Mock', 'pong');
        // },
    ],
];
