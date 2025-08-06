const prisma = require("../../prisma/index");
const getSpeakersItem = async (req, res) => {
  const slug = req.params.slug;
  try {
    const speakerItem = await prisma.produit.findFirst({
      where: {
        slug: slug,
        category: "speakers",
      },
    });
    if (speakerItem == null)
      return res.status(404).json({ message: " Ce slug n'existe pas " });
    return res.status(200).json({ message: "data chargée", data: speakerItem });
  } catch (error) {
    console.log("speakers", error);
  }
};
module.exports = getSpeakersItem;
