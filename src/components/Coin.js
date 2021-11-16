import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin, deleteCoin }) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
  return (
    <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
      <li className="coinlist-item list-group-item list-group-item-action list-group-item-info 
      rounded-top-right-20 d-flex justify-content-between align-items-center text-dark">
        <img className="coinlist-image" src={coin.image} alt="" />
        <span className="text-decoration-none">{formatter.format(coin.current_price)}</span>

        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1"></i>
          )}
          {coin.price_change_percentage_24h}
        </span>
        <button     
        onClick={(e) => {
            e.preventDefault();
            deleteCoin(coin.id);
          }}
          className="btn btn-danger"
          >Remove</button>
      </li>
    </Link>
  );
};

export default Coin;