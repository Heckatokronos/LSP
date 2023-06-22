FactoryBot.define do
  factory :category do
    name { Faker::Alphanumeric.unique.alpha(number: rand(4..20)) }
  end
end
