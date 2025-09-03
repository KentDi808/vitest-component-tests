import { describe, it } from "vitest";

import "./Primary";

describe("Primary", () => {
  it("should render", () => {
    const root = document.getElementById("root");
    root.innerHTML = '<primary-button label="Test" />'
  })
});