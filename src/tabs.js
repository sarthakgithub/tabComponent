import React from "react";
import Tab from "./tab";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onTabClick = tab => {
    this.setState({
      activeTab: tab
    });
  };
  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <div className="tab-list">
          {this.props.children.map(child => {
            return (
              <Tab
                activeTab={activeTab}
                label={child.props.label}
                key={child.props.label}
                onClick={this.onTabClick}
              />
            );
          })}
        </div>
        <div className="tab-content">
          {this.props.children.map(child => {
            if (child.props.label !== activeTab) return null;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
