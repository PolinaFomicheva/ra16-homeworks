import React from "react";


function Listing({ items }) {


    const listitem  =  items.state != "removed" ? (
        <div class="item">
          <div class="item-image">
            <a href={items.url}>
              <img src={items.MainImage.url_570xN} alt="image"/>
            </a>
          </div>
          <div class="item-details">
            <p class="item-title">
              {items.title.length > 50 ?
                items.title.substr(0, 50) + "…"
                : items.title
              }
            </p>
            <p class="item-price">
              {items.currency_code == "USD" ? "$" + items.price
                : items.currency_code == "EUR" ? "€" + items.price
                  : items.price + " GBP"
              }
            </p>
            {items.quantity <= 10 ?
              <p class="item-quantity level-low">{items.quantity} left</p>
              : items.quantity <= 20 ?
                <p class="item-quantity level-medium">{items.quantity} left</p>
                : <p class="item-quantity level-high">{items.quantity} left</p>
            }
            
          </div>
        </div>
      ) : null

return (
    <>
    {listitem}
    </>
)
}


export default Listing