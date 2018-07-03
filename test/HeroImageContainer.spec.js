import { mount } from "@vue/test-utils";
import HeroImageContainer from "../src/components/HeroImageContainer.vue";
import expect from "expect";

describe("HeroImageContainer", () => {
  it("loads successfully", () => {
    let wrapper = mount(HeroImageContainer);
    expect(wrapper.exists()).toBe(true);
  });
});
