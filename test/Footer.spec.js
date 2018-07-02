import { mount } from "@vue/test-utils";
import Footer from "../src/components/Footer.vue";
import expect from "expect";

describe("Footer", () => {
  it("loads successfully", () => {
    let wrapper = mount(Footer);
    expect(wrapper.exists()).toBe(true);
  });

  it("has an element with class logos-container", () => {
    let wrapper = mount(Footer);
    let container = wrapper.find("ul");
    expect(container.hasClass("logos-container")).toBe(true);
  });

  it("has a contact element", () => {
    let wrapper = mount(Footer);
    let contact = wrapper.find("div");
    expect(contact.hasClass("contact")).toBe(true);
  });
});
