import { Component, h, Listen, Prop } from "@stencil/core";

@Component({
  tag: "app-nav",
  styleUrl: "nav.css",
  shadow: false
})
export class Nav {
  @Prop() componentName: string;

  @Listen("dashboardEvent")
  Listen(event) {
    console.log(event);
    this.componentName = event.detail;
  }

  render() {
    return (
      <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header has-drawer is-upgraded">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">{this.componentName}</span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link">
                <i class="material-icons">account_circle</i>
                Neha Singh
              </a>
              <a class="mdl-navigation__link">Sign Out</a>
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <header class="demo-drawer-header">
            <img src="/assets/icon/carl-logo.png" class="demo-avatar" />
            <hr />
          </header>

          <div></div>
          <nav class="demo-navigation mdl-navigation">
            <stencil-route-link class="mdl-navigation__link" url="/dashboard">
              <i class="material-icons"> pie_chart </i>
              Dashboard
            </stencil-route-link>
            {/* <p>
              <i class="material-icons"> pie_chart </i>
              <stencil-route-link url="/dashboard">
                DASHBOARD MENU
              </stencil-route-link>
            </p> */}
            <stencil-route-link class="mdl-navigation__link" url="/newcase">
              <i class="material-icons"> my_location </i>
              NEW CASE
            </stencil-route-link>

            {/* <p>
              <i class="material-icons"> my_location </i>
              <stencil-route-link url="/newCase">NEW CASE</stencil-route-link>
            </p> */}

            <stencil-route-link class="mdl-navigation__link" url="/cases">
              <i class="material-icons"> note </i>
              CASES
            </stencil-route-link>
            {/* <p>
              <i class="material-icons"> note </i>
              <stencil-route-link url="/cases"> CASES</stencil-route-link>
            </p> */}

            <stencil-route-link class="mdl-navigation__link" url="/">
              <i class="material-icons"> contacts </i>
              CONTACT
            </stencil-route-link>
            {/* <p>
              <i class="material-icons"> contacts </i>
              <stencil-route-link url="/contacts"> CONTACT</stencil-route-link>
            </p> */}

            <stencil-route-link class="mdl-navigation__link" url="/">
              <i class="material-icons"> notifications </i>
              SUBSCRIPTIONS
            </stencil-route-link>

            {/* <p>
              <i class="material-icons"> notifications </i>
              <stencil-route-link url="/subscriptions">
                SUBSCRIPTIONS
              </stencil-route-link>
            </p> */}

            <stencil-route-link class="mdl-navigation__link" url="/">
              <i class="material-icons"> devices </i>
              DEVICE GUIDES
            </stencil-route-link>

            {/* <p>
              <i class="material-icons"> devices </i>
              <stencil-route-link url="/deviceGuides">
                DEVICE GUIDES
              </stencil-route-link>
            </p> */}

            <stencil-route-link class="mdl-navigation__link " url="/">
              <i class="material-icons"> library_books </i>
              ANVANDARMANUAL
            </stencil-route-link>
            {/* <p>
              <i class="material-icons"> library_books </i>
              <stencil-route-link url="/manual">
                ANVANDARMANUAL
              </stencil-route-link>
            </p> */}

            <stencil-route-link class="mdl-navigation__link" url="/">
              <i class="material-icons">account_circle</i>
              Neha Singh
            </stencil-route-link>
            {/* <p>
              <i class="material-icons">account_circle</i>
              <stencil-route-link url="/account">Neha Singh</stencil-route-link>
            </p> */}
          </nav>
        </div>
        <main class="mdl-layout__content">
          <div class="page-content" style={{ height: "600px " }}>
            <stencil-router>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/dashboard" component="app-dashboard" />
              <stencil-route url="/newcase" component="app-newcase" />
              <stencil-route url="/cases" component="app-cases" />
            </stencil-router>
          </div>
        </main>
      </div>
    );
  }
}
