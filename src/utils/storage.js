export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("plantora-favorites")) || []
}

export const saveFavorites = (favorites) => {
  localStorage.setItem(
    "plantora-favorites",
    JSON.stringify(favorites)
  )
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem("plantora-cart")) || []
}

export const saveCart = (cart) => {
  localStorage.setItem(
    "plantora-cart",
    JSON.stringify(cart)
  )
}