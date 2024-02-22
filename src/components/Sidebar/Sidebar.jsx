import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

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
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    render() {
        const { isOpened } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });

        return (
            <div className={ containerClassnames }>
                <div className="sidebar__logo">
                    <img
                        src={ logo }
                        alt="TensorFlow logo"
                        width="35"
                        height="35"
                    />
                    <span>TensorFlow</span>
                    <button className='sidebar__button' onClick={ this.toggleSidebar }>
                        <FontAwesomeIcon icon='angle-left' />
                    </button>
                </div>

                <div className='sidebar__nav-list'>
                    {
                        routes.map((route) => (
                            <div className="sidebar__nav-item" key={ route.title } onClick={ () => this.goToRoute(route.path)} tabIndex={0} >
                                <FontAwesomeIcon icon={ route.icon } />
                                <span>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>

                <div>
                    {
                        bottomRoutes.map((route) => (
                            <div className="sidebar__user-item" key={ route.title } onClick={ () => this.goToRoute(route.path) } tabIndex={0} >
                                <FontAwesomeIcon icon={ route.icon } />
                                <span>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
