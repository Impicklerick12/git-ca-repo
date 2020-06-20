require 'test_helper'

class CelebritiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get celebrities_index_url
    assert_response :success
  end

  test "should get show" do
    get celebrities_show_url
    assert_response :success
  end

end
