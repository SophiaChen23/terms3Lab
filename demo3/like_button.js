'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = { like:false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
    'button',
        {onceClick:() => this.setState({liked:true})},
        'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
