import { Link } from "react-router-dom";

const IconLink = ({ linkTo }) => {

    // console.log(linkTo.slice(1))

    const capitalise = (item) => {
        const firstLetter = item.slice(0, 1)
        return firstLetter.toUpperCase() + item.slice(1)
    }

    return (
        <>
            <Link
                to={linkTo}
                className="w-40 pl-2 h-20 bg-slate-100 font-semibold text-lg">
                {capitalise(linkTo)}
            </Link>
        </>
    );
}

export default IconLink;