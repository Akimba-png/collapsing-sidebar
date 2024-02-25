import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'
import { DELAY } from '../../const';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
        };

        this.navListRef = React.createRef();
        this.userListRef = React.createRef();
    }

    componentDidMount() {
        const navItems = this.navListRef.current.children;
        const userItems = this.userListRef.current.children;
        this.addAnimationDelay(navItems, userItems);
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    addAnimationDelay(navList, userList) {
        for (let i = 0; i < navList.length; i++) {
            navList[i].style.animationDelay = (DELAY.NavList + i * DELAY.Step) + 's';
            if (userList[i]) {
                userList[i].style.animationDelay = (DELAY.UserList + i * DELAY.Step) + 's';
            }
        }
    }

    render() {
        const { isOpened } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });

        return (
            <div className={ containerClassnames }>
                <h1 className="visually-hidden">Sidebar panel</h1>
                <div className="sidebar__logo">
                    <img
                        src={ logo }
                        alt="TensorFlow logo"
                        width="35"
                        height="35"
                    />
                    <span className="sidebar__title">TensorFlow</span>
                </div>
                <button className="sidebar__button" onClick={ this.toggleSidebar }>
                    <FontAwesomeIcon icon='angle-right' />
                    <span className="visually-hidden">{isOpened ? 'close' : 'open'}</span>
                </button>

                <div className="sidebar__nav-list" ref={ this.navListRef }>
                    {
                        routes.map((route) => (
                            <div className="sidebar__nav-item" key={ route.title } onClick={ () => this.goToRoute(route.path)} tabIndex={0} >
                                <FontAwesomeIcon icon={ route.icon } />
                                <span className="sidebar__title">{ route.title }</span>
                            </div>
                        ))
                    }
                </div>

                <div ref={ this.userListRef }>
                    {
                        bottomRoutes.map((route) => (
                            <div className="sidebar__user-item" key={ route.title } onClick={ () => this.goToRoute(route.path) } tabIndex={0} >
                                <FontAwesomeIcon icon={ route.icon } />
                                <span className="sidebar__title">{ route.title }</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
