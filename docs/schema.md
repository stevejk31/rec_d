# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## following
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follower_id     | integer   | not null, indexed, unique
follwing_id     | integer   | not null, indexed, unique


## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
store_id        | integer   | not null, indexed
rating          | float     | not null
review          | text      | not null


## pictures
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique
store_id        | integer   | not null, indexed, unique
url             | string    | not null


## tags -polymorphic
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
type            | string    | not null, indexed, unique
store/user_id   | integer   | not null, indexed, unique
description     | string    | not null


## stores
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
lat             | float     | not null
lon             | float     | not null
street          | string    | not null
city            | string    | not null
phone           | integer   | not null
rating          | float     | not null
review_count    | integer   | not null


## hours day of week starting sunday
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
store_id        | integer   | not null, indexed, unique
day_of_week     | integer   | not null
time_open       | string    | not null
time_closed     | string    | not null


## businessInfo
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
store_id        | integer   | not null, indexed, unique
accepts_credit  | string    | not null, 2choies?(Yes, No)
accepts_cash    | string    | not null, 2choies?(Yes, No)
accepts_android | string    | not null, 2choies?(Yes, No)
accepts_apple   | string    | not null, 2choies?(Yes, No)
parking         | string    | not null, 2choies?(Yes, No)
bike_parking    | string    | not null, 2choies?(Yes, No)
noise_level     | string    | not null, 3choices?(quiet, medium, loud)
outdoor_seating | string    | not null, 2choies?(Yes, No)
wifi            | string    | not null, 2choies?(Yes, No)
has_tv          | string    | not null, 2choies?(Yes, No)
waiter_service  | string    | not null, 2choies?(Yes, No)
