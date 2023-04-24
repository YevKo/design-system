import Link from '../links/Link';
import classNames from 'classnames';

function SidebarMenu() {
    let linkClasses = classNames("py-2 text-gray-900 dark:text-white active:hover:bg-gray-100 dark:hover:bg-gray-700");

    const links = [
        { text: 'Buttons', path: '/'},
        { text: 'Accordion', path: '/accordion'},
        { text: 'Dropdown', path: '/dropdown'},
    ];

    const renderedLinks = links.map((link) => {
        return <Link to={link.path} className={linkClasses}>{link.text}</Link>
    });
    return (
        <nav id="components" className="space-y-2">
            <ul>
                { renderedLinks.map((link) => {
                    return <li className="mb-2">{link}</li>
                })}
            </ul>
        </nav>
    );
}

export default SidebarMenu;
