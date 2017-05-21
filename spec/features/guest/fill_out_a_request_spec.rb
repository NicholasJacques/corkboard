require 'rails_helper'

RSpec.feature 'guest fills out a project request' do
  let!(:industry) { create(:industry, name: "Home Improvement") }
  let!(:category) { create(:category, name: "Lawn Care", industry: industry) }
  let!(:service)  { create(:service, name: "Mowing", category: category) }

  scenario 'from the root path' do
    visit root_path

    click_link('home-link')
    expect(current_path).to eq('/home-improvement')

    click_link("#{category.slug}")
    expect(current_path).to eq('/home-improvement/lawn-care')

    click_on("#{service.slug}")
    expect(current_path).to eq('/hire/mowing')

    expect(page).to have_css('.project-form')

    fill_in('project[zipcode]', :with => '80210')
    choose('Recurring')
    fill_in('project[description]', :with => 'This is a project that I need done right away')
    choose('ASAP')
    expect(page).to have_content('Login or Sign Up to request this project')
  end
end
