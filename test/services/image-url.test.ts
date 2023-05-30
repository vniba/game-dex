describe("image url", function () {
  const noImage = "noImage";
  const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  };
  it("should return no image", function () {
    expect(getCroppedImageUrl("")).toEqual(noImage);
  });

  it("should add crop query to url", function () {
    expect(getCroppedImageUrl("nothing/media/what")).toEqual(
      "nothing/media/crop/600/400/what"
    );
  });
});
