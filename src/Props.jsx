function Props({
  name,
  fatherName,
  siblings = ["Raj Mishra ", "Aman Shukla "],
  study = { a: "B.Tech", b: "BCA" },
}) {
  return (
    <div className="info">
      <div>
        hello my name is {name} and my father's name is {fatherName}.
      </div>
      <p>I have siblings respectively names :{siblings}</p>
      <p>I have siblings respectively names :{study}</p>
    </div>
  );
}
export default Props;
