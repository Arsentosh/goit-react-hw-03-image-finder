import { Dna } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.style';
export const Loader = () => {
  return (
    <LoaderDiv>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </LoaderDiv>
  );
};
