class Author < ApplicationRecord
    has_one :address, dependent: :destroy
end
