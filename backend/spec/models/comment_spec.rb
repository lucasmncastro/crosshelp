require 'rails_helper'

RSpec.describe Comment, type: :model do
  fixtures :all

  it "should validate presence of user" do
    comment = Comment.create user: nil
    expect(comment.errors[:user]).to eq(["must exist"])
  end

  it "should validate presence of ticket" do
    comment = Comment.create ticket: nil
    expect(comment.errors[:ticket]).to eq(["must exist"])
  end

  it "should have status :none by default" do
    comment = Comment.new
    expect(comment.action).to eq :none
  end

  it "should accept :close action" do
    comment = Comment.new action: :close
    expect(comment.action).to eq :close
  end

  it "should not accept action different to :close, :reopen and :none" do
    comment = Comment.new action: :other
    expect(comment.action).to eq nil
  end

  context "when create with action :close" do
    it "should close the ticket" do
      ticket = tickets(:one)
      alex   = users(:alex)

      expect(ticket.status).to eq :open
      ticket.comments.create(user: alex, action: 'close')
      expect(ticket.status).to eq :closed
    end
  end

  context "when create with action :reopen" do
    it "should close the ticket" do
      ticket = tickets(:two)
      alex   = users(:alex)
      
      expect(ticket.status).to eq :closed
      ticket.comments.create(user: alex, action: 'reopen')
      expect(ticket.status).to eq :open
    end
  end

  context "when create with action :reopen" do
    it "should close the ticket" do
      ticket = tickets(:two)
      alex   = users(:alex)

      expect(ticket.status).to eq :closed
      ticket.comments.create(user: alex, action: :none)
      expect(ticket.status).to eq :closed
    end
  end

  context "#as_json" do
    before do
      @comment = comments(:one)
      @json    = @comment.as_json
    end

    it "should get the attributes" do
      expect(@json[:id]).to eq @comment.id
      expect(@json[:message]).to eq @comment.message
      expect(@json[:action]).to eq @comment.action
      expect(@json[:created_at]).to eq @comment.created_at
    end

    it "should get the user who created this ticket" do
      expect(@json[:user]).to eq @comment.user
    end
  end

end
