function Timings_prayer(props) {
  return (
    <div>
      <div className="flex justify-between text-white mt-4 text-xl bg-[#a54f3a] px-3 py-3 rounded-md">
        <h3>{props.name}:</h3>
        <p>{props.time}</p>
      </div>
    </div>
  );
}

export default Timings_prayer;
