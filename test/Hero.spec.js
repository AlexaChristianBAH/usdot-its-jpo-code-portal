import { mount } from "@vue/test-utils";
import HeroCopy from "../src/components/HeroCopy.vue";
import expect from "expect";

describe("HeroCopy", () => {
  it("loads successfully", () => {
    let wrapper = mount(HeroCopy);
    expect(wrapper.exists()).toBe(true);
  });
});
