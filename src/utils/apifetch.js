import React from "react";

// const AddToCartFetcher = ({ onAddToCart, onRemoveFromCart }) => {
    export const addToCart = async (id, onAddToCart) => {
        try {
            const response = await fetch('http://localhost:4000/graphql', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                    mutation {
                        addToCart(id: "${id}") {
                            id
                            name
                            price
                            inCart
                        }
                    }`
                })
            });
            const result = await response.json();
            if (onAddToCart) {
                onAddToCart(result.data.addToCart)
            }
        } catch(error) {
            console.error('Error adding the item to thee cart', error)

        }
    }

    export const removeFromCart = async (id, onRemoveFromCart) => {
        try {
            const response = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                query: `mutation {
                    removeFromCart(id: "${id}") {
                        id
                        name
                        price
                        inCart
                    }
                }`
            })
        });
        const result = await response.json();
        console.log('API Response:', result);
        if(onRemoveFromCart) {
            onRemoveFromCart(result.data.removeFromCart);
        }
        } catch(error) {
            console.error('Error removing the item from the cart', error);
        }   
    };
    
// };

