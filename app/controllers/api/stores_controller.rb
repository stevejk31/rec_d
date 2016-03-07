class Api::StoresController < ApplicationController
  def index
    if params[:params]
      if params[:params][:bounds]
        @stores = Store.includes(:tags).in_bounds(params[:params][:bounds])
      end
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
      if params[:params][:wifi] == "true"
        @stores = @stores.joins(:business_info).where("wifi = ?", "Yes")
      end
      if params[:params][:creditCard] == "true"
        @stores = @stores.joins(:business_info).where("wifi = ?", "Yes")
      end
      if params[:params][:acceptsAndroid] == "true"
        @stores = @stores.joins(:business_info).where("accepts_android = ?", "Yes")
      end
      if params[:params][:acceptsApple] == "true"
        @stores = @stores.joins(:business_info).where("accepts_apple = ?", "Yes")
      end
      if params[:params][:parking] == "true"
        @stores = @stores.joins(:business_info).where("parking = ?", "Yes")
      end
      if params[:params][:bikeParking] == "true"
        @stores = @stores.joins(:business_info).where("bike_parking = ?", "Yes")
      end
      if params[:params][:outdoorSeating] == "true"
        @stores = @stores.joins(:business_info).where("outdoor_seating = ?", "Yes")
      end
      if params[:params][:hasTv] == "true"
        @stores = @stores.joins(:business_info).where("has_tv = ?", "Yes")
      end
      if params[:params][:waiterService] == "true"
        @stores = @stores.joins(:business_info).where("waiter_service = ?", "Yes")
      end
      if ["Quiet", "Medium", "Loud"].include?(params[:params][:noiseLevel])
        @stores = @stores.joins(:business_info).where("noise_level = ?", params[:params][:noiseLevel])
      end
    end

    #janky pagation
    if @stores && params[:params][:numStores]
      @stores = @stores.first(params[:params][:numStores])
    else
      @stores
    end

    # popular
    if !@stores && params[:params][:numStores] == "5"
      @stores = Store.where('rating = ?', 5).order("RANDOM()").first(5)
    end
  end

  def show
    @store = Store.includes(:business_info, :hours, :tags).find_by(id: params[:id])
  end
end
