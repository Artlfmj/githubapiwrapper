import { Wrapper } from "..";
test("Wrapper", () => {
    const wrapper = new Wrapper({username : "Artlfmj", apikey : "rrrr"});
    expect(wrapper).toBeInstanceOf(Wrapper);
    expect(wrapper.getUserInfo).toBeInstanceOf(Function);
})