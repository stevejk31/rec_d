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
    end
    if @stores && params[:params][:numStores]
      @stores = @stores.first(params[:params][:numStores])
    else
      @stores
    end
    if !@stores && params[:params][:numStores] == "5"
      @stores = Store.where('rating = ?', 5).order("RANDOM()").first(5)
    end
  end

  def show
    @store = Store.includes(:business_info, :hours, :tags).find_by(id: params[:id])
  end
end
