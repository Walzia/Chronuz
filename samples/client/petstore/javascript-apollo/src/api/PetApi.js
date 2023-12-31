/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */



import ApiClient from "../ApiClient";
import ApiResponse from '../model/ApiResponse';
import Pet from '../model/Pet';

/**
* Pet service.
* @module api/PetApi
* @version 1.0.0
*/
export default class PetApi extends ApiClient {

    /**
    * Constructs a new PetApi. 
    * @alias module:api/PetApi
    * @class
    */
    constructor(baseURL = 'http://petstore.swagger.io:80/v2') {
      super(baseURL);
    }


    /**
     * Add a new pet to the store
     * 
     * @param {module:model/Pet} pet Pet object that needs to be added to the store
     * @param requestInit Dynamic configuration. @see {@link https://github.com/apollographql/apollo-server/pull/1277}
     * @return {Promise}
     */
    async addPet(pet, opts, requestInit) {
      opts = opts || {};
      let postBody = pet;
      // verify the required parameter 'pet' is set
      if (pet === undefined || pet === null) {
        throw new Error("Missing the required parameter 'pet' when calling addPet");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'User-Agent': 'OpenAPI-Generator/1.0.0/Javascript',
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = [];
      let returnType = null;
      let basePaths = ['http://petstore.swagger.io/v2', 'http://path-server-test.petstore.local/v2'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }


      return this.callApi(
        '/pet', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, requestInit
      );
    }

    /**
     * Deletes a pet
     * 
     * @param {Number} petId Pet id to delete
     * @param {Object} opts Optional parameters
     * @param {String} [apiKey] 
     * @param requestInit Dynamic configuration. @see {@link https://github.com/apollographql/apollo-server/pull/1277}
     * @return {Promise}
     */
    async deletePet(petId, opts, requestInit) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling deletePet");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
        'User-Agent': 'OpenAPI-Generator/1.0.0/Javascript',
        'api_key': opts['apiKey']
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.callApi(
        '/pet/{petId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, requestInit
      );
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param {Array.<module:model/String>} status Status values that need to be considered for filter
     * @param requestInit Dynamic configuration. @see {@link https://github.com/apollographql/apollo-server/pull/1277}
     * @return {Promise<Array.<module:model/Pet>>}
     */
    async findPetsByStatus(status, requestInit) {
      let postBody = null;
      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling findPetsByStatus");
      }

      let pathParams = {
      };
      let queryParams = {
        'status': this.buildCollectionParam(status, 'csv')
      };
      let headerParams = {
        'User-Agent': 'OpenAPI-Generator/1.0.0/Javascript',
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = [Pet];

      return this.callApi(
        '/pet/findByStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, requestInit
      );
    }

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param {Array.<String>} tags Tags to filter by
     * @param requestInit Dynamic configuration. @see {@link https://github.com/apollographql/apollo-server/pull/1277}
     * @return {Promise<Array.<module:model/Pet>>}
     */
    async findPetsByTags(tags, requestInit) {
      let postBody = null;
      // verify the required parameter 'tags' is set
      if (tags === undefined || tags === null) {
        throw new Error("Missing the required parameter 'tags' when calling findPetsByTags");
      }

      let pathParams = {
      };
      let queryParams = {
        'tags': this.buildCollectionParam(tags, 'csv')
      };
      let headerParams = {
        'User-Agent': 'OpenAPI-Generator/1.0.0/Javascript',
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = [Pet];

      return this.callApi(
        '/pet/findByTags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, requestInit
      );
    }

    /**
     * Find pet by ID
     * Returns a single pet
     * @param {Number} petId ID of pet to return
     * @param requestInit Dynamic configuration. @see {@link https://github.com/apollographql/apollo-server/pull/1277}
     * @return {Promise<module:model/Pet>}
     */
    async getPetById(petId, requestInit) {
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling getPetById");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
        'User-Agent': 'OpenAPI-Generator/1.0.0/Javascript',
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = Pet;

      return this.callApi(
        '/pet/{petId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, requestInit
      );
    }

    /**
     * Update an existing pet
     * 
     * @param {module:model/Pet} pet Pet object that needs to be added to the store
     * @param requestInit Dynamic configuration. @see {@link https://github.com/apollographql/apollo-server/pull/1277}
     * @return {Promise}
     */
    async updatePet(pet, opts, requestInit) {
      opts = opts || {};
      let postBody = pet;
      // verify the required parameter 'pet' is set
      if (pet === undefined || pet === null) {
        throw new Error("Missing the required parameter 'pet' when calling updatePet");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'User-Agent': 'OpenAPI-Generator/1.0.0/Javascript',
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = [];
      let returnType = null;
      let basePaths = ['http://petstore.swagger.io/v2', 'http://path-server-test.petstore.local/v2'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof opts['_base_path_index'] !== 'undefined') {
        if (opts['_base_path_index']  >= basePaths.length || opts['_base_path_index'] <  0) {
          throw new Error("Invalid index " + opts['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[opts['_base_path_index']];
      }


      return this.callApi(
        '/pet', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, requestInit
      );
    }

    /**
     * Updates a pet in the store with form data
     * 
     * @param {Number} petId ID of pet that needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} [name] Updated name of the pet
     * @param {String} [status] Updated status of the pet
     * @param requestInit Dynamic configuration. @see {@link https://github.com/apollographql/apollo-server/pull/1277}
     * @return {Promise}
     */
    async updatePetWithForm(petId, opts, requestInit) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling updatePetWithForm");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
        'User-Agent': 'OpenAPI-Generator/1.0.0/Javascript',
      };
      let formParams = {
        'name': opts['name'],
        'status': opts['status']
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;

      return this.callApi(
        '/pet/{petId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, requestInit
      );
    }

    /**
     * uploads an image
     * 
     * @param {Number} petId ID of pet to update
     * @param {Object} opts Optional parameters
     * @param {String} [additionalMetadata] Additional data to pass to server
     * @param {File} [file] file to upload
     * @param requestInit Dynamic configuration. @see {@link https://github.com/apollographql/apollo-server/pull/1277}
     * @return {Promise<module:model/ApiResponse>}
     */
    async uploadFile(petId, opts, requestInit) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling uploadFile");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
        'User-Agent': 'OpenAPI-Generator/1.0.0/Javascript',
      };
      let formParams = {
        'additionalMetadata': opts['additionalMetadata'],
        'file': opts['file']
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;

      return this.callApi(
        '/pet/{petId}/uploadImage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, requestInit
      );
    }

    /**
     * uploads an image (required)
     * 
     * @param {Number} petId ID of pet to update
     * @param {File} requiredFile file to upload
     * @param {Object} opts Optional parameters
     * @param {String} [additionalMetadata] Additional data to pass to server
     * @param requestInit Dynamic configuration. @see {@link https://github.com/apollographql/apollo-server/pull/1277}
     * @return {Promise<module:model/ApiResponse>}
     */
    async uploadFileWithRequiredFile(petId, requiredFile, opts, requestInit) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling uploadFileWithRequiredFile");
      }
      // verify the required parameter 'requiredFile' is set
      if (requiredFile === undefined || requiredFile === null) {
        throw new Error("Missing the required parameter 'requiredFile' when calling uploadFileWithRequiredFile");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
        'User-Agent': 'OpenAPI-Generator/1.0.0/Javascript',
      };
      let formParams = {
        'additionalMetadata': opts['additionalMetadata'],
        'requiredFile': requiredFile
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;

      return this.callApi(
        '/fake/{petId}/uploadImageWithRequiredFile', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, requestInit
      );
    }


}
