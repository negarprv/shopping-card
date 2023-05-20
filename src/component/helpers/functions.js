const isInCard = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  }
  return state.selectedItems[index].quantity;
};

export { isInCard, quantityCount };
