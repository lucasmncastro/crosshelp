require 'rails_helper'

RSpec.describe Ticket, type: :model do
  fixtures :all

  it "should validate presence of user" do
    ticket = Ticket.create user: nil
    expect(ticket.errors[:user]).to eq(["must exist"])
  end

  it "should validate presence of title" do
    ticket = Ticket.create title: nil
    expect(ticket.errors[:title]).to eq(["can't be blank"])
  end

  it "should have status :open by default" do
    ticket = Ticket.new
    expect(ticket.status).to eq :open
  end

  it "should accept :closed status" do
    ticket = Ticket.new status: :closed
    expect(ticket.status).to eq :closed
  end

  it "should not accept status different to :close or :open" do
    ticket = Ticket.new status: :processing
    expect(ticket.status).to eq nil
  end

  it ".with_status(:open) should get all open tickets" do
    open = Ticket.with_status(:open).to_a
    expect(open).to eq [tickets(:three), tickets(:one)]
  end

  it ".with_status(:closed) should get all closed tickets" do
    closed = Ticket.with_status(:closed)
    expect(closed).to eq [tickets(:two)]
  end

  context "#as_json" do
    before do
      @ticket = tickets(:one)
      @json   = @ticket.as_json
    end

    it "should get the attributes" do
      expect(@json[:id]).to eq @ticket.id
      expect(@json[:title]).to eq @ticket.title
      expect(@json[:status]).to eq @ticket.status
      expect(@json[:message]).to eq @ticket.message
    end

    it "should get the user who created this ticket" do
      expect(@json[:user]).to eq users(:andrey)
    end

    it "should get the associated comments" do
      expect(@ticket.comments).to eq([comments(:one)])
    end
  end
end
