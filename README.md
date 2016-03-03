# Rec_D

[heroku]: https://blooming-journey-31210.herokuapp.com/

## Minimum Viable Product

Rec'D is a web application inspired by Yelp for coffee enthusiasts in San Fransisco built using Ruby on Rails and React.js. Rec'D allows users to:


- [x] Create an account
- [x] Log in / Log out
- [x] View local Restaurants
- [x] Leave comments and ratings
- [x] Filter Stores by tags
- [ ] Search by Location
- [ ] Search by Name


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] blank landing page
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages


### Phase 2: Stores Model, API, and basic APIUtil (1.0 days)

**Objective:** Stores can be viewed.

- [x] create `Stores` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for notes (`StoresController`)
- [x] jBuilder views for Stores
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.0 days)

**Objective:** Stores can be viewed with all it's features.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each Store component, building out the flux loop as needed.
  - [x] `StoresIndex`
  - [x] `StoreIndexItem`
  - [x] `StoreDetail`
  - [x] `StoreBasicInfo`
  - [x] `StoreBusinessInfo`
  - [x] `StoreHours`

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/login) will look good.

- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles

### Phase 5: User Page & NavBar (0.5 day)

**Objective:** User and NavBar available
- [x] NavBar and redirect function
- build out API, Flux loop, and components for:
  - [x] User CRUD
- [x] Use CSS to style new views

### Phase 6: User Reviews & Rating (1 day)

**Objective:** Users can rate and comment stores

- [X] create `Reviews` model
- build out API, Flux loop, and components for:
  - [x] Reviews CRUD
  - [x] adding reviews requires a User and Store
  - [x] viewing reviews in Store
- Use CSS to style new views

### Phase 7: Map (1.0 days)
- [x] add map to stores index
- [x] add map to stores detail
- [x] map to filter


### Phase 8: Tags (1.0 days)

**Objective:** Stores can have tags

- [x] create `Tags` model and join table
- build out API, Flux loop, and components for:
  - [x] fetching tags for Stores
  - [x] adding tags to Stores
  - [x] searching Stores by tag
- [x] Style new elements

### Phase 9: Search and Location Filters (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [x] Allow location to change locations being searched
- [x] Search for names of stores

### Phase 10: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [x] Get feedback on my UI from others
- [x] Refactor HTML classes & CSS rules
- [x] Seeding Data
- [ ] Splash Page
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Follow other users
- [ ] Frontend Auth
- [x] Infinite scroll
- [ ] Trending Nearby Stores
- [ ] User Profile and Following
