const prisma = require("../../prisma/index");
const getEarphones = async (req, res) => {
  try {
    const allEarphones = await prisma.produit.findMany({
      where: {
        category: "earphones",
      },
      select: {
        id: true,
        slug: true,
        name: true,
        image: true,
        new: true,
        category: true,
        categoryImage: true,
        description: true,
      },
    });
    return res
      .status(200)
      .json({ message: "data chargée", data: allEarphones });
  } catch (error) {
    console.log("EarPhone", error);
  }
};

module.exports = getEarphones;
