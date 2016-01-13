import React from 'react';

class Lists extends React.Component {
  getListItems() {
    return this.props.items.map((item) => {
      return item.name
    });
  }

  render() {
    return <div>
      {this.getListItems()}
    </div>
  }
};

Lists.defaultProps = {
  items: []
};

export default Lists;