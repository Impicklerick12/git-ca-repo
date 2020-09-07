require 'test_helper'

class PolaroidsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get polaroids_create_url
    assert_response :success
  end

  test "should get edit" do
    get polaroids_edit_url
    assert_response :success
  end

end
