const BASEURL = "https://gift4uall.herokuapp.com/";

const getGifts = async (page: number) =>
  await fetch(`${BASEURL}/gift/collection/${page}`)
    .then((response) => response.json())
    .then((response) => ({ data: response }));

const createGift = async (gift: object) =>
  await fetch(`${BASEURL}/gift/create`, {
    method: "POST",
    body: JSON.stringify(gift),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  });

export { getGifts, createGift };
