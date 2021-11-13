import { Component } from "react";

class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="container py-4">
                <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1">
                    {children}
                </div>
            </div>
        )
    }
}

export default Layout;