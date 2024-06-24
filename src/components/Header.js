import React from "react"

export class Header extends React.Component {
    constructor(params = {}) {
        super(params)
        this.params = params;
    }

    render() {
        return (<>Header: {JSON.stringify(this.params.data)}</>)
    }
}

// <MapHolder
//   location={locationDataArray.locations.find(location => location.slug === ID)}
//   />