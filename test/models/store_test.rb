# == Schema Information
#
# Table name: stores
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  lat          :float            not null
#  lon          :float            not null
#  street       :string           not null
#  city         :string           not null
#  phone        :integer          not null
#  rating       :float            not null
#  review_count :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class StoreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
