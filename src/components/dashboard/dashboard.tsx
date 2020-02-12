import { Component, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "app-dashboard",
  styleUrl: "dashboard.css",
  shadow: false
})
export class Dashboard {
  @Event() dashboardEvent: EventEmitter;

  dashboardHandler() {
    this.dashboardEvent.emit("Dashboard");
  }
  componentDidLoad() {
    this.dashboardHandler();
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <div class="mdl-grid demo-content">
                <div class="demo-card-square mdl-card mdl-shadow--2dp">
                  <div class="mdl-card__supporting-text">
                    <h2 class="caseNo">2</h2>
                    <p class="pStyle">Opened Cases</p>
                  </div>
                </div>
              </div>
            </td>

            <td>
              <div class="mdl-grid demo-content">
                <div class="demo-card-square mdl-card mdl-shadow--2dp">
                  <div class="mdl-card__supporting-text">
                    <h2 class="caseNo">9</h2>
                    <p class="pStyle">SMS Sent</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <div class="mdl-grid demo-content">
                <div
                  class="demo-card-square mdl-card mdl-shadow--2dp"
                  style={{
                    width: "405px",
                    height: "444px"
                  }}
                >
                  <div class="mdl-card__supporting-text">
                    <span class="outcome">Case Outcome</span>
                    <p>January 2020</p>
                  </div>
                </div>
              </div>
            </td>

            <td>
              <div class="mdl-grid demo-content">
                <div
                  class="demo-card-wide mdl-card mdl-shadow--2dp"
                  style={{ width: " 789px", height: "445px" }}
                >
                  <div class="mdl-card__supporting-text">
                    <span class="outcome">Cases 2020</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <div class="mdl-grid demo-content">
                <div
                  class="demo-card-square mdl-card mdl-shadow--2dp"
                  style={{ width: "614px", height: "284px" }}
                >
                  <div
                    class="mdl-card__supporting-text"
                    style={{ paddingTop: "16px", paddingBottom: "0px" }}
                  >
                    <span class="outcome">Cases</span>
                    <p>All cases during 2020</p>
                  </div>
                  <table class="outcomeTable">
                    <tr>
                      <th>Month</th>
                      <th>Amount of cases</th>
                      <th>Success rate</th>
                    </tr>
                  </table>
                </div>
              </div>
            </td>

            <td>
              <div class="mdl-grid demo-content">
                <div
                  class="demo-card-wide mdl-card mdl-shadow--2dp"
                  style={{ width: "614px", height: "284px" }}
                >
                  <div class="mdl-card__supporting-text">
                    <span class="outcome">Stats Test</span>
                    <p>All cases during 2020</p>
                    <table class="outcomeTable">
                      <tr>
                        <th>Month</th>
                        <th>Amount of cases</th>
                        <th>Success rate</th>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
