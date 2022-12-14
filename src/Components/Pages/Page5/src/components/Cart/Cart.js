import classes from ".Cart.module.css";

const Card = (props) => {
  const cartItems =<ul className={classes['cart-item']}>{[
    {id: "c1", 
    name:'Shushi', 
    anount:2,
    price: 12.99 
    }].map((item)=><li>{item.name}</li>)}</ul>;

  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Card;
