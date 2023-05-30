import useData from "../../src/hooks/useData";

describe("useData hook", function () {
  it("should tru", function () {
    expect(useData("/games", { params: { genres: "action" } })).toEqual("");
  });
});
