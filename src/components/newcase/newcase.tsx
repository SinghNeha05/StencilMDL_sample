import { Component, Event, h, EventEmitter } from "@stencil/core";

@Component({
  tag: "app-newcase",
  styleUrl: "newcase.css",
  shadow: false
})
export class Newcase {
  @Event() dashboardEvent: EventEmitter;

  dashboardHandler() {
    this.dashboardEvent.emit("Case");
  }
  componentDidLoad() {
    this.dashboardHandler();
  }
  render() {
    return (
      <div class="mdl-grid demo-content">
        <div
          class="demo-card-wide mdl-card mdl-shadow--2dp"
          style={{ width: " 789px", height: "445px" }}
        >
          <div class="mdl-card__supporting-text">
            <h4 class="newCase">New Case</h4>
          </div>
        </div>
      </div>
    );
  }
}
