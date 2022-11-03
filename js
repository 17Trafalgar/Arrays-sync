function test(syncedArray, externalArray) {
  const result = {
    update: [],
    delete: [],
    add: [],
  };

  syncedArray.forEach((oldId) => {
    externalArray.forEach((newId) => {
      if (oldId.id == newId.id) {
        oldId.check = true;
        newId.check = true;

        if (oldId.price != newId.price) {
          result.update.push(oldId.id);
        }
      }
    });
  });

  syncedArray.forEach((oldObj) => {
    if (!oldObj.check) {
      result.delete.push(oldObj.id);
    }
  });

  externalArray.forEach((newObj) => {
    if (!newObj.check) {
      result.add.push(newObj.id);
    }
  });
  return result;
}

const syncedArray = [
  {
    id: "1",
    externalId: "yd-12",
    price: 200,
  },
  {
    id: "2",
    externalId: "yd-23",
    price: 449,
  },
  {
    id: "3",
    externalId: "yd-13",
    price: 300,
  },
  {
    id: "4",
    externalId: "yd-09",
    price: 550,
  },
];

const externalArray = [
  {
    id: "1",
    externalId: "yd-12",
    price: 220,
  },
  {
    id: "2",
    externalId: "yd-23",
    price: 449,
  },
  {
    id: "4",
    externalId: "yd-09",
    price: 550,
  },
  {
    id: "5",
    externalId: "yd-01",
    price: 999,
  },
];

console.log(test(syncedArray, externalArray));
