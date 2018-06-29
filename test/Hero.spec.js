import { mount } from "@vue/test-utils";
import Hero from "../src/components/Hero.vue";
import expect from "expect";

describe("Hero", () => {
  it("loads successfully", () => {
    let wrapper = mount(Hero);
    expect(wrapper.exists()).toBe(true);
  });
});
