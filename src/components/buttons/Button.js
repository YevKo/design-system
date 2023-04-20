import className from "classnames";

function Button({
    children,
    primary,
    secondary,
    tertiary,
    rounded,
    ghost
}) {
    let classes = className("px-5 py-3 text-base font-medium transition duration-200", {
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