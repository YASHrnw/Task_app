const Add = (payload) => {
  return {
      type: "Add",
      payload: payload
  }
}

const Delete = (payload) => {
  return {
      type: "Delete",
      payload: payload
  }
}
const Edit = (payload) => {
  return {
      type: "Edit",
      payload: payload
  }
}

export { Add, Delete, Edit };