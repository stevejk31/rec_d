# Rec_D

Rec'D is a web application inspired by Yelp for coffee enthusiasts in San Fransisco built using Ruby on Rails, PostgresSQL, React.js, FLUX, Google Maps APi, and jQuery.

View it live at www.recd-sf.com

###Main Functionality:
* Search for Coffee shops in the city of San Fransisco
* Filter search results by location and several store features (ei. hours, parking, wifi)
* Submit reviews on visited coffee shops fielding a dynamic rating of the store.
* See recent reviews and high scoring local shops to enhance your inner-adventurer

###Additional Features:
* Google Maps integration
* Server-side searching and pagination
* Hand-rolled authentication via Rails
* Creating chain-able search results dependent on if the filter is available

And thus our search method becomes simply:
```
def search(params)
	@@symbolized_input_options = input_options.symbolize_keys
  if params[:params][:tag]
    @stores = Store.joins(:tags)
                   .where("tag = ?", params[:params][:tag])
                   .in_bounds(params[:params][:bounds])
  end
  if params[:params][:store]
    @stores = @stores.where("UPPER(name) LIKE UPPER(?)", "%#{params[:params][:store]}%")
  end
  if params[:params][:open] == "true"
    @stores = @stores.open_closed
  end
end
```
###TODO
* create User Favorite and Show Page
