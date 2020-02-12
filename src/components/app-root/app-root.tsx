import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: false
})
export class AppRoot {
  render() {
    return <app-nav></app-nav>;
  }
}
