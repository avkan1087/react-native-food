import axios from "axios";

export default axios.create({
   baseURL: "https://api.yelp.com/v3/businesses",
   headers: {
      Authorization:
         "Bearer 5zX0kPPjbSA7dxt8Wgn6UnlGseXZ7HBa0FEp7ardS0qW-OMIqpHLgRL46LPGjaXBJEm5NJYif8ATjoO9BT9y8f_OIvJ6aprjBLw-0VP-FLBcoV8S9RCZIE36wfFXXnYx"
   }
});
