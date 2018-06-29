import { mount } from "@vue/test-utils";
import TopBanner from "../src/components/TopBanner.vue";
import expect from "expect";

describe("TopBanner", () => {
  it("loads successfully", () => {
    let wrapper = mount(TopBanner);
    expect(wrapper.exists()).toBe(true);
  });

  it("loads with an image element", () => {
    let wrapper = mount(TopBanner);
    expect(wrapper.contains("img")).toBe(true);
  });

  it("loads with link elements", () => {
    let wrapper = mount(TopBanner);
    expect(wrapper.contains("a")).toBe(true);
  });
});
