import classNames from 'classnames';
import useNavigation from '../../hooks/use-navigation';

function Link( {to, children, ...rest} ) {
    const { currentPath, navigate } = useNavigation();
    let classes = classNames(rest.className, 'text-base', {
        "font-bold border-l-4 dark:border-white pl-2": (currentPath === to)
    });
    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey ){
            return;
        }
        event.preventDefault();

        navigate(to);
    }
    return <a {...rest} className={classes} href={to} onClick={handleClick}>
        {children}
    </a>
}

export default Link;