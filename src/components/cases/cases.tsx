import { Component, Event, h, EventEmitter } from "@stencil/core";

@Component({
  tag: "app-cases",
  styleUrl: "cases.css",
  shadow: false
})
export class Cases {
  @Event() dashboardEvent: EventEmitter;

  dashboardHandler() {
    this.dashboardEvent.emit("Case");
  }
  componentDidLoad() {
    this.dashboardHandler();
  }
  render() {
    return (
      <div>
        <h1>Hello from cases</h1>
      </div>
    );
  }
}
