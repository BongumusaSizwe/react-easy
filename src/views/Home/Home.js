import React, { Component } from 'react'
import { getTotal } from '../../helpers/generalHelper'
import './Home.scss'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItems: [],
            total: 0
        }
    }

    setSelectedItems(selectedItem) {
        this.setState({ selectedItems: [...this.state.selectedItems, selectedItem] })
    }

    async setTotal() {
        // TODO: set total value
        
        let res = await getTotal(this.state.selectedItems);
        console.log(res.data.total);
        let tot = res.data.total;
        this.setState({total: tot});
    }

    removeSelectedItems(selectedItem, index) {
        // TODO: remove selected item from list
        //const name = selectedItem.name;
        //const index = this.state.selectedItems.findIndex(x=> x.name === name);
        let tmp_items = this.state.selectedItems;
        
        //Remove the item from the list
        tmp_items.splice(index, 1);
        
        this.setState({selectedItems: tmp_items})

    }

    render() {
        const header = 'Tuck Shop'

        // TODO (optional): create api to send foods and drinks then set variables with data returned from api call
        const foods = [
            {
                name: 'Pie',
                price: 12
            },
            {
                name: 'Burger',
                price: 15            },
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
                <div className={'columns'}>
                    <div className={'column'}>
                        {
                            foods.map((food, index) => {
                                return(
                                    <li className={'tuck-shop-item'} key={index} onClick={() => this.setSelectedItems(food)}>
                                        {food?.name + ' R' + food?.price}
                                    </li>
                                )
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
                                )
                            })
                        }
                    </div>
                </div>
                <div className={'calculator'}>
                    <div className={'calculator-title'}>
                        {'Total: R' + this.state.total}
                    </div>
                    <button
                        className={'calculate-button'}
                        onClick={()=>this.setTotal()}
                    >
                        {'Calculate'}
                    </button>
                    <div className={'column'}>
                        {
                            this.state.selectedItems.map((selectedItem, index) => {
                                return(
                                    <li className={'tuck-shop-item'} key={index} onClick={() => this.removeSelectedItems(selectedItem, index)}>
                                        {selectedItem?.name + ' R' + selectedItem?.price}
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
