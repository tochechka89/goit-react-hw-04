import { Watch } from "react-loader-spinner";

import css from './Loader.module.css';

export default function CustomLoader({ loader }) {
    return (<Watch
        visible={loader}
        type="Watch"
        height="80"
        width="80"
        radius="48"
        color="#007bff"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass={css.loader}
    />
    );
}