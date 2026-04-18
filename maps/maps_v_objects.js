function fixUserMap(brokenMap) {
  const newMap = new Map();
  for (let [key, value] of brokenMap) {
    const fullName = `${key.fname} ${key.lname}`;
    newMap.set(fullName, value);
  }
  return newMap;
}
