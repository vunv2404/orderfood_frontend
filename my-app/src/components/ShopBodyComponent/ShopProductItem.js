import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

class ShopProductItem extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/product/product-1.jpg'})`}}>
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><FontAwesomeIcon icon={faHeart} color="black" /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faRetweet} color="black" /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faShoppingBag} color="black" /> </a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Crab Pool Security</a></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopProductItem;