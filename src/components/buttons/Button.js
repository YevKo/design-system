import { PropTypes } from "prop-types";

function Button({
    children,
    primary,
    secondary,
    tertiary,
    rounded,
    ghost
}) {
    let classes = "px-5 py-3 text-base font-medium transition duration-200";

    if (primary) {
        classes = classes + " border-2 border-blue-800 bg-blue-800 text-white hover:bg-blue-600 active:bg-blue-700";
    } else if (secondary) {
        classes = classes + " border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700";
    } else if (tertiary) {
        classes = classes + " bg-gradient-to-br from-[#6025F5] to-[#FF5555] text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50";
    }

    if (rounded) {
        classes = classes + " rounded-xl";
    }
    if (ghost) {
        classes = classes + " bg-transparent text-blue-800 hover:text-white";
    }

    return <button className={classes}>{children}</button>
}

Button.propTypes = {
    checkOnlyOneVariationAllowed: ({ primary, secondary, tertiary}) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!tertiary)

        if (count > 1 ) {
            return new Error('Invalid props: only one variation type is expected, primary, secondary or tertiary')
        }
    }
}

export default Button;