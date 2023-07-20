function ForLoops() {
  let stringArray1 = ['string1', 'string2'];
  let stringArray2 = [];

  stringArray1.push('string3');
  stringArray1.splice(1, 1);

  for (let i = 0;
      i < stringArray1.length;
      i++) {
    const string1 = stringArray1[i];
    stringArray2.push(
        string1.toUpperCase());
  }

  return (
      <>
        <h3>Looping through arrays</h3>
        stringArray2 = {stringArray2}<br />
      </>
  )
}

export default ForLoops;