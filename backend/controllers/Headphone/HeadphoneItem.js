const prisma = require("../../prisma/index");
const getHeadphoneItem = async (req, res) => {
  const slug = req.params.slug;
  try {
    const headPhoneItem = await prisma.produit.findFirst({
      where: {
        slug: slug,
        category: "headphones",
      },
    });
    if (headPhoneItem == null)
      return res.status(404).json({ message: " Ce slug n'existe pas " });
    return res
      .status(200)
      .json({ message: "data chargée", data: headPhoneItem });
  } catch (error) {
    console.log("headphones", error);
  }
};
module.exports = getHeadphoneItem;
