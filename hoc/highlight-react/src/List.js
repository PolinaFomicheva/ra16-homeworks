import React from 'react';
import Video from "./Video";
import Article from "./Article";
import Popular from "./Popular";
import New from "./New";

const List = (props) => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                  withWrapper(Video)({...item})
                );

            case 'article':
                return (
                    withWrapper(Article)({...item})
                );
        }
    });
};

const withWrapper = (WrappedComponent) => (props) => {
    if (props.views > 1000) {
        return (
            <Popular>
                <WrappedComponent {...props}/>
            </Popular>
        )
    }
    else if (props.views < 100) {
        return (
            <New>
                <WrappedComponent {...props}/>
            </New>
        )
    }
    else {
        return <WrappedComponent {...props}/>
    }
}

export default List;