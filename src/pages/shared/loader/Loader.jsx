import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold">Loading...</h3>
      <DNA
        visible={true}
        height="50"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
