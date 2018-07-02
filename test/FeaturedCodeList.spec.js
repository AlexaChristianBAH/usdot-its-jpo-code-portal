import { mount } from "@vue/test-utils";
import FeaturedCodeList from "../src/components/FeaturedCodeList.vue";
import expect from "expect";

describe("Featured Code List", () => {
  it("loads successfully", () => {
    let wrapper = mount(FeaturedCodeList);
    expect(wrapper.exists()).toBe(true);
  });
});
