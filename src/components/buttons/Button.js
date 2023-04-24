import className from "classnames";
import { MdSearch, MdTrendingFlat, MdArrowCircleDown } from 'react-icons/md';

function Button({
    children,
    primary,
    secondary,
    tertiary,
    rounded,
    ghost,
    icon,
    ...rest
}) {
    // switch classes based on the variant
    let classes = className(rest.className, "flex justify-center items-center px-5 py-3 text-base font-large transition duration-200", {
        "border-blue-800 bg-blue-800 hover:bg-blue-600 active:bg-blue-700": primary,
        "border-blue-500 bg-blue-500 hover:bg-blue-600 active:bg-blue-700": secondary,
        "bg-gradient-to-br from-[#6025F5] to-[#FF5555] transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50": tertiary,
        "rounded-full": rounded,
        "bg-none bg-white": ghost,
        "border-2": primary || secondary || tertiary,
        "text-white border-2": (primary || secondary || tertiary) && !ghost,
        "border-[#6025F5]": ghost && tertiary,
        "hover:text-white": ghost && secondary,
        "text-blue-800": (ghost && primary) || (ghost && secondary) || (ghost && tertiary)
    });

    // icons map
    const icons = {
        'search': <MdSearch/>,
        'arrow': <MdTrendingFlat />,
        'download': <MdArrowCircleDown />
    }

    // parsing all other props like onClick, onMouseMove etc
    return <button {...rest} className={classes}>
            {icon ? <span className="mr-2">{icons[icon]}</span> : ''}
            {children}
        </button>
}

// checking that only one main button variant is provided
Button.propTypes = {
    checkOnlyOneVariationAllowed: ({ primary, secondary, tertiary}) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!tertiary)

        if (count > 1 ) {
            return new Error('Invalid props: only one variation type is expected, primary, secondary or tertiary')
        }
    }
}

export default Button;