import { mount } from "@vue/test-utils";
import FeaturedCode from "../src/components/FeaturedCode.vue";
import expect from "expect";

describe("Featured Code", () => {
  it("loads successfully", () => {
    let wrapper = mount(FeaturedCode);
    expect(wrapper.exists()).toBe(true);
  });

  it("loads with an unordered list", () => {
    let wrapper = mount(FeaturedCode);
    expect(wrapper.contains("ul")).toBe(true);
  });
});
