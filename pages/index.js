import React, { Component, Fragment } from "react"

class Index extends Component {

  constructor() {
    super()
    const cumple = new Date(1536987600000).getTime()
    const now = Date.now()
    const distance = cumple - now
    this.state = { cumple, distance }
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  
  tick = () => {
    const { cumple } = this.state
    const now = Date.now()
    this.setState({ distance: cumple - now })
  }

  formatNumber = number => number < 10 ? `0${number}` : number

  render() {
    const { distance } = this.state
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return (
      <Fragment>
        <div className="container">
          <h1 id="head">¡Todavía no!</h1>
          <h2 id="sub">¿Por qué lo abriste?</h2>
          <ul className="countdown">
            <li>
              <span className="days">{days}</span>
            </li>
            <li className="seperator">.</li>
            <li>
              <span className="hours">{this.formatNumber(hours)}</span>
            </li>
            <li className="seperator">:</li>
            <li>
              <span className="minutes">{this.formatNumber(minutes)}</span>
            </li>
            <li className="seperator">:</li>
            <li>
              <span className="seconds">{this.formatNumber(seconds)}</span>
            </li>
          </ul>
        </div>
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Lobster|Nanum+Gothic+Coding');
        body {
          margin: 0;
        }
        .container {
          background-color: #0074D9;
          color: white;
          position: absolute;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        ul.countdown {
          list-style: none;
          margin: 75px 0;
          padding: 0;
          display: block;
          text-align: center;
        }
        ul.countdown li {
          display: inline-block;
        }
        ul.countdown li span {
          font-size: 80px;
          font-weight: 300;
          line-height: 80px;
        }
        ul.countdown li.seperator {
          font-size: 80px;
          line-height: 70px;
          vertical-align: top;
        }
        ul.countdown li p {
          color: #a7abb1;
          font-size: 14px;
        }
        h1, h2, span {
          font-family: 'Lobster', cursive;
        }
        .days, .hours, .minutes, .seconds {
          font-family: 'Nanum Gothic Coding', monospace;
        }
        `}</style>
      </Fragment>
    )
  }
}

export default Index