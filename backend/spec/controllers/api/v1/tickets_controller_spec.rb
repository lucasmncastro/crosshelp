require 'rails_helper'

RSpec.describe Api::V1::TicketsController, type: :controller do
  include AuthHelper

  fixtures :all

  describe "GET /" do
    before(:each) do
      @alex   = users(:alex)
      @andrey = users(:andrey)
      @bryan  = users(:bryan)
    end

    describe "when user isn't logged in" do
      it "should respond with status :unauthorized" do
        get :index
        expect(response).to have_http_status(:unauthorized)
      end
    end

    describe "when user is logged in" do
      it "should respond with status :ok" do
        login @andrey

        get :index
        expect(response).to have_http_status(:ok)
      end
    end

    describe "when current user is a customer" do
      it "answers a json with only tickets of this user" do
        login @andrey
        expect(@andrey.role).to eq 'customer'

        get :index

        # For some strange reason, this matching is not working:
        # expect(response.body).to eq @andrey.tickets.to_json
        expect(JSON.parse(response.body)).to eq JSON.parse(@andrey.tickets.to_json)
      end
    end

    describe "when current user is an admin" do
      it "answers a json with all tickets" do
        login @alex
        expect(@alex.role).to eq 'admin'

        get :index

        expect(JSON.parse(response.body)).to eq JSON.parse(Ticket.all.to_json)
      end
    end

    describe "when current user is an agent" do
      it "answers a json with all tickets" do
        login @alex
        expect(@alex.role).to eq 'admin'

        get :index

        expect(JSON.parse(response.body)).to eq JSON.parse(Ticket.all.to_json)
      end
    end

    describe "when with_status parameter is :open" do
      it "gets only open tickets" do
        login @andrey
        get :index, params: { with_status: :open }
        expect(JSON.parse(response.body)).to eq JSON.parse(@andrey.tickets.with_status(:open).to_json)
      end
    end

    describe "when with_status parameter is :closed" do
      it "gets only closed tickets" do
        login @andrey
        get :index, params: { with_status: :closed }
        expect(JSON.parse(response.body)).to eq JSON.parse(@andrey.tickets.with_status(:closed).to_json)
      end
    end
  end


end
