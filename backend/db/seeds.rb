# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#


# Customers

likke = Customer.create!(name: "Likke")
aurea = Customer.create!(name: "Aurea")
mobi  = Customer.create!(name: "Mobi")


# Internal users

default_password = "12345678"
attrs = {
  password: default_password,
  password_confirmation: default_password
}

alex = User.create!(attrs.merge(
  name:  "Alex",
  email: "alex@email.com",
  role:  "admin"
))
karla = User.create!(attrs.merge(
  name:  "Karla",
  email: "karla@email.com",
  role:  "agent"
))


# Customer users

andrey = likke.users.create!(attrs.merge(
  name:  "Andrey Migin",
  email: "andrey@email.com",
  role:  "customer"
))
andy = aurea.users.create!(attrs.merge(
  name:  "Andy Montgomery",
  email: "andy@email.com",
  role:  "customer"
))
bryan = mobi.users.create!(attrs.merge(
  name:  "Bryan Karp",
  email: "bryan@email.com",
  role:  "customer"
))


# Tickets

ticket1 = andrey.tickets.create!(
  title:   "My website is down",
  message: "Please, check my webiste out to figure out what is happening. Cheers!",
  status:  "open"
)
