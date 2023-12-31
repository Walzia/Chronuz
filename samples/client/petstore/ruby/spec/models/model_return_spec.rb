=begin
#OpenAPI Petstore

#This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.0.0-SNAPSHOT

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Petstore::ModelReturn
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'ModelReturn' do
  before do
    # run before each test
    @instance = Petstore::ModelReturn.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of ModelReturn' do
    it 'should create an instance of ModelReturn' do
      expect(@instance).to be_instance_of(Petstore::ModelReturn)
    end
  end
  describe 'test attribute "_return"' do
    it 'should work' do
      # assertion here. ref: https://rspec.info/features/3-12/rspec-expectations/built-in-matchers/
    end
  end

end
