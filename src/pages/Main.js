import React, { Component } from "react";
import Container from "../components/Container";
import friends from "../friends.json";
import ClickItem from "../components/ClickItem";
import Navbar from "../components/Navbar";

class Main extends Component {
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friends => {
      friends.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    this.state.friends.find((item, index) => {
      if (item.id === id) {
        if (!friends[index].count) {
          friends[index].count = 1;
          this.setState({ score: this.state.score + 1 });
          this.state.friends.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
      return false;
    });
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} highscore={this.state.highscore} />
        <div className="waterFilter" tabIndex="-1"></div>
        <Container style={{ marginTop: 30 }}>
          {this.state.friends.map(friend => (
            <ClickItem
              key={friend.name}
              id={friend.id}
              image={friend.image}
              clickCount={this.clickCount}
              height={friend.height}
              width={friend.width}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Main;
