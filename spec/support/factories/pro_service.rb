FactoryGirl.define do
  factory :pro_service do
    service_ids [1,2,3,4]
    pro nil
    radius Faker::Number.between(1, 10)
    service_ids [1]
  end
end
