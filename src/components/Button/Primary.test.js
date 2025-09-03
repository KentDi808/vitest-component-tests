import { describe, it } from "vitest";

import "./Primary";

describe("Primary", () => {
  it("should render", () => {
    // document.body.innerHTML = '<div id="root"><custom-button label="test" /></div>';
    // document.body.innerHTML = '<div id="root"></div>';
    // const customButton = document.createElement("custom-button");
    // customButton.label = "Test";

    // document.getElementById("root").appendChild(customButton);

    const root = document.getElementById("root");
    root.innerHTML = '<primary-button label="Test" />'
  })
});