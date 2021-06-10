import axios from "axios";

import React, {useEffect} from 'react';


export const COMMENTS_URL = "https://movieapp-server.herokuapp.com/";

// CREATE =>  POST: add a new product to the server
export function createProduct(product) {
  return axios.post(COMMENTS_URL, { product });
}

// READ
export function getAllProducts(user) {
  return axios.get(COMMENTS_URL+'users');
}

// useEffect(()=>{
//     const getall= async() =>{
//       const allContacts =await getAllProducts();
//       if (allContacts) console.log(allContacts)
    
//     }
//     getall()
    
//     },[]);




// console.log(getAllProducts())





export function getProductById(productId) {
  return axios.get(`${COMMENTS_URL}/${productId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findProducts(queryParams) {
  return axios.post(`${COMMENTS_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the procuct on the server
export function updateProduct(product) {
  return axios.put(`${COMMENTS_URL}/${product.id}`, { product });
}

// UPDATE Status
export function updateStatusForProducts(ids, status) {
  return axios.post(`${COMMENTS_URL}/updateStatusForProducts`, {
    ids,
    status
  });
}

// DELETE => delete the product from the server
export function deleteProduct(productId) {
  return axios.delete(`${COMMENTS_URL}/${productId}`);
}

// DELETE Products by ids
export function deleteProducts(ids) {
  return axios.post(`${COMMENTS_URL}/deleteProducts`, { ids });
}

