function NewProps({ first, second, third = " Kaise ho" }) {
  return (
    <>
      <p>
        {first} {second}
        {third}!!
      </p>
    </>
  );
}
export default NewProps;
