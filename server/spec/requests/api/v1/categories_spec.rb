require 'rails_helper'

RSpec.describe "Api::V1::Categories", type: :request do
  let!(:categories) { create_list(:category, 5) }
  let(:category_id) { categories.first.id }

  describe "GET /index" do
    before do
      get '/api/v1/categories'
    end

    it 'should return 5 categories' do
      expect(assigns(:categories).size).to eq(5)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe "GET Post/Categories" do
    let!(:post) { create(:post, :with_categories) }

    it 'post should have 4 categories' do
      expect(post.categories.size).to eq(4)
    end

    it 'returns status code 200' do
      get "/api/v1/posts/#{post.id}/categories"
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /create" do
    let(:valid_attributes) { { category: { name: 'Music' } } }

    context 'when the request is valid' do
      before { post '/api/v1/categories', params: valid_attributes }

      it 'creates a category' do
        expect(assigns(:category).name).to eq('Music')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      it 'should forbit to create blank category, returns status code 422' do
        post '/api/v1/categories', params: { category: { name: '' } }
        expect(response).to have_http_status(422)
      end
    end
  end

  describe "DELETE /destroy" do
    before { delete "/api/v1/categories/#{category_id}" }

    it 'returns status code 303' do
      expect(response).to have_http_status(303)
    end

    it 'destroys the category' do
      expect(Category.exists?(category_id)).to be_falsey
    end
  end
end

