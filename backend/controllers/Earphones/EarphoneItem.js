const prisma = require("../../prisma/index");
const getEarphoneItem = async (req, res) => {
  const slug = req.params.slug;
  try {
    const earphoneItem = await prisma.produit.findFirst({
      where: {
        slug: slug,
        category: "earphones",
      },
    });
    if (earphoneItem == null)
      return res.status(404).json({ message: " Ce slug n'existe pas " });
    return res
      .status(200)
      .json({ message: "data chargée", data: earphoneItem });
  } catch (error) {
    console.log("EarPhone", error);
    console.log(error);
  }
};
module.exports = getEarphoneItem;
