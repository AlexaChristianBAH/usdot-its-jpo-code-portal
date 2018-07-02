import { mount } from "@vue/test-utils";
import NavBar from "../src/components/NavBar.vue";
import expect from "expect";

describe("NavBar", () => {
  it("loads successfully", () => {
    let wrapper = mount(NavBar);
    expect(wrapper.exists()).toBe(true);
  });
});
