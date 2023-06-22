require 'rails_helper'

RSpec.describe "Api::V1::Posts", type: :request do
  describe "GET /api/v1/posts" do
    let!(:post) { create(:post) }

    it 'should display all posts' do
      get api_v1_posts_path

      expect(response).to have_http_status(:ok)
    end

    it 'should show post correctly' do
      get "/api/v1/posts/#{post.id}"

      post_response = JSON.parse(response.body)

      expect(response).to have_http_status(:ok)
      expect(post_response['title']).to eq(post.title)
      expect(post_response['body']).to eq(post.body)
      expect(post_response['author']).to eq(post.author)
      expect(post_response['audio_data']).to eq(post.audio_data)
    end
  end

  describe "POST /api/v1/posts" do
    before do
      @post = build(:post)
    end

    it "should create a post" do
      post_params = {
        post: {
          title: @post.title,
          body: @post.body,
          author: @post.author,
          audio_data: @post.audio_data
        }
      }

      post('/api/v1/posts', params: post_params)

      expect(response).to have_http_status(:created)
    end


    it "Should forbid to create a post" do
      post '/api/v1/posts', params: { post: { title: 'Test title' } }

      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe "Delete /api/v1/posts" do
    let!(:post) { create(:post) }

    it "Should destroy a post" do
      delete "/api/v1/posts/#{post.id}"

      expect(response).to have_http_status(:see_other)
    end
  end

  describe 'Put /api/v1/posts' do
    let!(:post) { create(:post) }

    it 'should update a post' do
      put "/api/v1/posts/#{post.id}", params: { post: { body: 'Put action here, it work!' } }
      post.reload

      expect(post.body).to eq('Put action here, it work!')
    end

    it 'should forbid update a post' do
      put "/api/v1/posts/#{post.id}", params: { post: { title: nil } }
      post.reload

      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
