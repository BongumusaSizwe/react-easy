import React, { Component } from 'react'
import { getTotal } from '../../helpers/generalHelper';
import './Home.scss'

export default class Home extends Component {
    constructor(props) {
		super(props);
		this.state = {
			selectedItems: [],
            total: 0
		};
	}

    setSelectedItems(selectedItem) {
        this.setState({selectedItems: [... this.state.selectedItems, selectedItem]});

        this.setTotal();
    }

    async setTotal() {
        // TODO: set total value
        this.setState({total: await getTotal(this.state.selectedItems)})
    }

    removeSelectedItems(selectedItem){
        // TODO: remove selected item from list
    }

    render() {
        const header = 'Tuck Shop'
        const foods = [
            {
            name: 'Pie',
            price: 12
        },
        {
            name: 'Burger',
            price: 15
        },
        {
            name: 'Pizza',
            price: 20
        },
    ]
    const drinks = [
        {
        name: 'Coke',
        price: 12
    },
    {
        name: 'Water',
        price: 10
    },
    {
        name: 'Ice Tea',
        price: 14
    },
]

        return (
            <div className={'home'}>
                <div className={'header'}>{header}</div>
                <div className={"columns"}>
                <div className={'column'}>
                {
                    foods.map((food, index) => {
                        return(
                            <li className={'tuck-shop-item'} key={index} onClick={() => this.setSelectedItems(food)}>{food?.name + ' R' + food?.price}</li>
                        );
                    })
                }
                </div>
                <div className={'column'}>
                {
                    drinks.map((drink, index) => {
                        return(
                            <li className={'tuck-shop-item'} key={index} onClick={() => this.setSelectedItems(drink)}>
                            {drink?.name + ' R' + drink?.price}
                            </li>
                        );
                    })
                }
                </div>
                </div>
                <div className={'calculator'}>
                    <div className={'calculator-title'}>
                        {'Total: R' + this.state.total}
                    </div>
                    <div className={'column'}>
                    {
                    this.state.selectedItems.map((selectedItem, index) => {
                        return(
                            <li className={'tuck-shop-item'} key={index} onClick={() => this.removeSelectedItems(selectedItem)}>
                            {selectedItem?.name + ' R' + selectedItem?.price}
                            </li>
                        );
                    })
                }
                </div>
                </div>
            </div>
        )
    }
}
