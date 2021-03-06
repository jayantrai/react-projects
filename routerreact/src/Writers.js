import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom'
import Writer from './Writer'
import NotFound from './Errors'

export default ({ match: {url}, writers}) =>
<Fragment>
    <ul>
        {writers.map(({ id, name }) => <li key={id}>
                <Link to={`${url}/${id}`}>{name}</Link>
            </li>
        )}
    </ul>
    <Route exact path={url} render={
        () => <h2>Please select a writer from above</h2>  } />
    <Route path={`${url}/:writerId`} render={ props => {
            const writer = writers.find(writer => writer.id === props.match.params.writerId)
            if (!writer) {
                return <NotFound />
            }
            return <Writer {...props} {...writer} />
            console.log(writer)
        }
    } />

</Fragment>