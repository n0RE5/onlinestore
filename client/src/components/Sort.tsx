import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { IDevice } from '../types/Interfaces';
import { useSearchQuery } from '../hooks/useSearchQuery';
import classes from './styles/Sort.module.scss'
import Radio from './UI/Radio/Radio';

interface SortProps {
    list: IDevice[],
    setSortedList: (arg0:any) => void
}

const Sort: React.FC<SortProps> = ({list, setSortedList}) => {
    const [search, setParams] = useSearchQuery()
    const orderBy = search.get('orderBy') || 'default'
    const category = search.get('category') || 'all'
    const price = search.get('price') || '0'

    const price_decorator = (list: IDevice[]) => {
        if(Number(price) === 0) {
            return list
        }
        
        return [...list].filter(item => item.price > Number(price))
    }

    const filter_decorator = (list: IDevice[]) => {
        if(category === "all") {
            return list
        }

        return [...list].filter(item => item.type === category)
    }

    const order_decorator = (list: IDevice[]) => {
        if (orderBy === "priceLtH") {
            return [...list].sort((a, b) => a.price - b.price)
        }

        if(orderBy === "priceHtL") {
            return [...list].sort((a, b) => b.price - a.price)
        }

        if(orderBy === "avgRating") {
            return [...list].sort((a, b) => b.rating - a.rating)
        }

        return [...list]
    }

    const sort = () => {
        setSortedList(order_decorator(filter_decorator(price_decorator(list))))
    }

    useEffect(() => {
        sort()
    }, [orderBy, category, price]);

    return (
            <div>
                <form>
                    <div className={classes.sorts}>
                        <div className={classes.sort_title}>Order By</div>
                        <hr className={classes.sort_hr} />
                        <Radio label="Default" name="orderBy" value="default" id="defaultRadio" setValue={(e) => setParams("orderBy", e)}/>
                        <Radio label="Average rating" name="orderBy" value="avgRating" id="avgRatingRadio" setValue={(e) => setParams("orderBy", e)}/>
                        <Radio label="Price: low to high" name="orderBy" value="priceLtH" id="priceLtHRadio" setValue={(e) => setParams("orderBy", e)}/>
                        <Radio label="Price: high to low" name="orderBy" value="priceHtL" id="priceHtLRadio" setValue={(e) => setParams("orderBy", e)}/>         
                    </div>
                    <div className={classes.sorts}>
                        <div className={classes.sort_title}>Category</div>
                        <hr className={classes.sort_hr} />
                        <Radio label="All" name="category" value="all" id="allRadio" setValue={(e) => setParams("category", e)} />
                        <Radio label="Laptop" name="category" value="laptop" id="laptopRadio" setValue={(e) => setParams("category", e)} />
                        <Radio label="Smartphone" name="category" value="smartphone" id="phoneRadio" setValue={(e) => setParams("category", e)} />
                        <Radio label="Tablet" name="category" value="tablet" id="tabletRadio" setValue={(e) => setParams("category", e)} />
                        <Radio label="Camera" name="category" value="camera" id="cameraRadio" setValue={(e) => setParams("category", e)} />
                        <Radio label="Headphones" name="category" value="headphones" id="headphonesRadio" setValue={(e) => setParams("category", e)} />
                    </div>
                    <div className={classes.sorts}>
                        <div className={classes.sort_title}>Price</div>
                        <hr className={classes.sort_hr} />
                        <input className={classes.sort_slider} value={price} onChange={(e) => setParams("price", e.target.value)} type="range" id="price" name="price" min="0" max="10000"/>
                        <div className={classes.sort_slider_value}>
                            <div>0$</div>
                            <span><input type="number" value={price} onChange={(e) => setParams("price", e.target.value)} />$</span>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default Sort;